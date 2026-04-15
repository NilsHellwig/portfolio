For the past three years, I have focused my research heavily on the effective use of Large Language Models (LLMs). With the rapid rise of LLMs, **Prompt Engineering** quickly established itself as a new and important discipline in NLP research. Techniques such as Few-Shot Prompting, Chain-of-Thought Prompting, and Prompt Chaining became widely adopted.

However, there are many other parameters and techniques that — whether in academic studies or industrial applications — deliver significant performance gains, yet have received far less attention than they deserve.

## 1. Prefix Batching: How can a multi-billion parameter Large Language Model generate thousands of outputs per second on a consumer GPU?

In nearly every study I’m involved in, we quickly run into the same challenge: testing dozens of conditions and prompts generates an enormous number of requests to the LLM.

Consider this simple example: We want to compare the performance of 5 different LLMs across 4 datasets (each with 1,000 test examples) using 3 distinct prompting techniques. That adds up to **5 × 4 × 1,000 × 3 = 60,000 requests**.

Using commercial APIs? Prohibitively expensive. Even with open-source models running locally, sequentially processing thousands of requests quickly becomes impractical and painfully slow.

But here’s the key observation: When you look closely at the prompts, almost all of them share the exact same prefix — only the actual test examples (the suffixes) change.

**The answer: Prefix Batching!**

**Prefix Batching** is a powerful inference optimization that dramatically improves efficiency in exactly these scenarios.

Instead of processing each request from scratch, the system identifies the common **prefix** (the shared part of the prompt, such as the system instruction, few-shot examples, or task description) and computes its Key-Value (KV) cache **only once**. This pre-computed cache is then reused across all requests that share the same prefix, while the unique suffixes (the varying test examples) are processed efficiently in a batched manner.

The result?

- Massive reduction in redundant computations
- Significantly higher throughput — often enabling thousands of outputs per second even on consumer-grade GPUs
- Much lower memory usage and latency for large-scale evaluations
- No quality loss compared to standard inference

Several modern LLM inference engines offer excellent support for prefix batching / prefix caching, including: [vLLM](https://docs.vllm.ai/en/stable/features/automatic_prefix_caching/), [Hugging Face Text Generation Inference (TGI)](https://huggingface.co/docs/text-generation-inference/en/conceptual/chunking), [SGLang](https://lmsys.org/blog/2024-01-17-sglang/), [TensorRT-LLM (NVIDIA)](https://nvidia.github.io/TensorRT-LLM/advanced/kv-cache-reuse.html), and [LMDeploy](https://lmdeploy.readthedocs.io/en/latest/inference/turbomind_config.html).

## 2. Guided Decoding: I added a huge list of constraints to my prompt, but the model still generates outputs that violate them. What can I do?

Especially in tasks with strict output requirements (e.g., structured data generation), it’s common to add long constraint lists to the prompt. Yet even detailed instructions often fail — the model still produces invalid JSON, broken schemas, or violated rules.

So the idea is simple: we want the LLM to strictly follow a **rule** or **grammar** during generation — for example, “output must be valid JSON according to this schema” or “match this regex pattern.”

**The answer: Guided Decoding!**

We can define such rules using finite-state machines (or pushdown automata). At every token step, the system checks the current state and masks out any tokens that would violate the rule.

With vocabularies of 128k+ tokens, however, naively checking if for every possible token if it violates the rule at the current step creates heavy computational overhead.

**xGrammar** solves this elegantly and efficiently. It uses a **byte-level pushdown automaton** with smart caching: most tokens are precomputed once during grammar compilation, while only a small subset needs runtime checking via a persistent stack. This brings the overhead close to zero and delivers massive speedups.

Thanks to this approach, you can reliably enforce many complex output formats. vLLM and ollama/llama.cpp for example support:

- **JSON** via JSON Schema, meaning you can build your schema in Python with Pydantic, convert it to JSON Schema, and let xGrammar handle the rest.
- **Regex** patterns, which are especially useful, since many structured formats can be expressed as regular languages (e.g., CSV, TSV, simple XML, etc.)

The outcome? At least guaranteed structural correctness — no retries, no post-processing, no more invalid outputs.

But that’s not all. Even with guided decoding, the LLM itself is still “wandering in the dark”.

It has no inherent knowledge of your grammar or constraints. At each generation step, it doesn’t automatically know which tokens are allowed or forbidden.

That’s why it’s still important to **include the grammar or schema in the prompt** (for example, by providing the JSON schema or a clear description of the expected structure). This helps the model stay semantically on track, while the guided decoding engine ensures structural correctness.

## 3. Making the model itself more efficient

I won’t spend much time on **Mixture-of-Experts (MoE)** models — you’ve probably heard about them already. In many cases, they’re an excellent choice, so try them 😉!

However, the last few months have brought some truly exciting developments that can deliver impressive speed and efficiency gains on top. Here are a few I find particularly promising:

### Speculative Decoding

Instead of generating one token at a time, a small, fast **draft model** quickly proposes several future tokens. The large target model then verifies them in parallel. If most guesses are correct, you get **1.5–3× faster inference** (sometimes more) with mathematically identical output distribution. Modern variants like EAGLE-3 or self-speculative decoding make it even more practical — no extra model needed in some cases.

### TurboQuant (from Google Research)

One of the hottest recent advances: **TurboQuant** dramatically compresses the Key-Value (KV) cache — the part of the model that remembers previous tokens.

It works with **most modern LLMs** because it’s training-free and data-oblivious — no model-specific fine-tuning required.

TurboQuant quantizes the KV cache down to **2.5–4 bits per value** (compared to the usual 16-bit FP16/BF16). The sweet spot is **4-bit** (near-zero accuracy loss) or **3.5-bit** (still statistically indistinguishable from full precision in most long-context benchmarks).

**Concrete example on consumer hardware**

Take the popular **Llama-3.1-8B-Instruct** model on a single **NVIDIA RTX 4090 (24 GB VRAM)**:

- Without TurboQuant (FP16 KV cache) → at 128k context the KV cache alone eats ~16 GB.
- With **4-bit TurboQuant** → the same 128k context drops to just **~2.7 GB** for the KV cache (6× smaller).

That means you can comfortably run 128k–200k+ context lengths while still having plenty of headroom for the model weights and maybe (prefix) batching 😉. Notably, TurboQuant is not yet widely available in production engines, e.g. teams of vLLM and ollama/llama.cpp are still working on it.

Transparency note: I used Claude Sonnet 4 for formulating this blog post, but all the techniques and insights are based on my own research and experience.