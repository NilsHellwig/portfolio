When working with named entity recognition (NER) and structured extraction tasks using large language models, ensuring that the model outputs valid, structured data is critical. vLLM is a fast and memory-efficient inference engine for LLMs that stands out as the only framework combining high-throughput batch processing with guided decoding capabilities through regex patterns and context-free grammars. Under the hood, vLLM leverages PagedAttention to manage key-value caches efficiently and continuous batching to maximize GPU utilization by dynamically scheduling requests.

However, a fundamental limitation emerges when processing multiple texts in a batch: vLLM's guided decoding applies a single regex pattern or grammar to all examples. Each text in NER tasks requires its own unique constraints based on the entities and phrases it contains. I modified vLLM to support per-example structured outputs, enabling both accuracy and speed through batch inference with text-specific constraints.

## The Challenge

In NER tasks, valid entity mentions are specific to each input. Consider this ABSA example where we extract aspect terms and sentiment:

```py
text_1 = "The sushi was great but the service was terrible."
text_2 = "Beautiful ambience and fantastic wine selection!"
```

For `text_1`, valid aspect terms are only "sushi" and "service". For `text_2`, only "ambience" and "wine selection" are valid. Each text has its own set of valid entity mentions, but vLLM's batch processing applied the same constraints to all examples.

## Extracting Valid Phrases at the Right Granularity

A critical component is `find_valid_phrases_list()`, which extracts all possible entity spans from the input text. The function must work at the phrase level rather than the character level. Working at the character level would generate an exponentially large number of possible substrings, making the regex pattern too large and defeating the purpose of constrained decoding. Moreover, context-free grammars require token-level or phrase-level constraints to be effective, as they operate on discrete symbols rather than arbitrary character sequences.

The function splits text at linguistic boundaries including punctuation, spaces, hyphens, and camel-case transitions:

```python
def find_valid_phrases_list(text: str, max_chars_in_phrase: int = 64) -> list[str]:
    text = f" {text.strip()} "
    split_positions = {0, len(text)}
    
    split_patterns = [
        r'(?<=\w)(?=[,!?;:\(\)])',  # before punctuation
        r'(?<=[,!?;:\(\)])(?=\w)',  # after punctuation
        r'\s+',                      # spaces
        r'(?<=\w)(?=-)',             # hyphen boundaries
        r'(?<=\w)(?=\.)',            # period boundaries
    ]
    
    for pattern in split_patterns:
        for match in re.finditer(pattern, text):
            split_positions.update({match.start(), match.end()})
    
    # Generate all substrings between split positions
    phrases = []
    for i, start in enumerate(sorted(split_positions)):
        for end in sorted(split_positions)[i + 1:]:
            phrase = text[start:end].strip()
            if phrase and len(phrase) <= max_chars_in_phrase:
                phrases.append(phrase)
    
    return list(dict.fromkeys(phrases))  # deduplicate while preserving order
```

For "The sushi was great", this generates "The", "sushi", "was", "great", "The sushi", "sushi was", "was great", "The sushi was", and so on. This phrase-level approach keeps the search space manageable while ensuring all valid entity spans are available.

## The vLLM Modification

I modified `vllm/entrypoints/llm.py` to support per-example `StructuredOutputsParams`. The key changes include:

First, I added `StructuredOutputsParams` to the imports and removed the deprecated `AttentionConfig`:

```python
from vllm.sampling_params import (
    BeamSearchParams,
    RequestOutputKind,
    SamplingParams,
    StructuredOutputsParams,  # Added
)
```

Second, I added a new `structured_outputs` parameter to the `generate()` method that accepts either a single parameter or a list:

```python
def generate(
    self,
    prompts: list[str],
    sampling_params: SamplingParams | list[SamplingParams] | None = None,
    structured_outputs: Sequence[StructuredOutputsParams] | None = None,
    # ... other params
):
```

Third, I implemented logic to handle the `structured_outputs` list by creating individual `SamplingParams` for each prompt:

```python
if structured_outputs is not None:
    if isinstance(sampling_params, Sequence):
        raise ValueError(
            "Cannot use both 'structured_outputs' parameter and "
            "'sampling_params' as a list."
        )
    
    if len(structured_outputs) != len(prompt_list):
        raise ValueError(
            f"Length of structured_outputs ({len(structured_outputs)}) "
            f"must match length of prompts ({len(prompt_list)})"
        )
    
    # Create individual SamplingParams for each prompt
    base_params = sampling_params if sampling_params is not None else self.get_default_sampling_params()
    sampling_params_list = []
    for struct_out in structured_outputs:
        params = base_params.clone()
        params.structured_outputs = struct_out
        sampling_params_list.append(params)
    sampling_params = sampling_params_list
```

Additionally, I added handling for the case where `structured_outputs` is passed as a list within a single `SamplingParams` object, automatically splitting it into individual parameters. I also removed the `attention_config` parameter from the `__init__` method and simplified the configuration instantiation logic by removing the generic `_make_config` helper in favor of direct instantiation.

## Results and Impact

This modification enables accurate constrained decoding where only phrases present in each text can be predicted, batch efficiency by processing multiple texts simultaneously with vLLM's optimizations, and reduced hallucinations since models cannot generate entity mentions that don't exist in the input. In my experiments with ABSA, this achieved comparable F1 scores to fine-tuned models while maintaining high throughput.

The concept applies broadly to NER tasks: named entity recognition can constrain person, organization, and location names to spans in the text; relation extraction can enforce valid entity pair patterns; event extraction can constrain temporal expressions and participant entities; and slot filling can limit slot values to phrases actually present in the document. I will soon open-source my vLLM modifications to enable per-example guided decoding for the community.
