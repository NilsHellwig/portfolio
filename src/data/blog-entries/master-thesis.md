# Master Thesis: Large Language Models for ABSA Augmentation

## Background

Aspect-Based Sentiment Analysis (ABSA) has emerged as a subfield of sentiment analysis (SA), aiming to provide more nuanced and detailed insights into opinions expressed in textual data. Unlike traditional sentiment analysis, which classifies an entire document or sentence as positive, negative, or neutral, ABSA focuses on identifying sentiments associated with specific aspects or features of a product, service, or entity. This granular approach allows for a deeper understanding of people's opinions, enabling more precise insights.

Similar to other areas of natural language processing research, the field of ABSA faces a lack of annotated corpora across various languages and domains for training machine learning models to recognize aspects and associated sentiment polarities in texts. The process of manually annotating corpora is very time-consuming, primarily due to the intricate task of identifying the phrases denoting aspects or expressing sentiment.

Large language models (LLMs) appear to be a promising approach in this context. LLMs are based on a transformer architecture and are characterized by their large size with billions of parameters. They have shown a comprehensive language understanding and the ability to produce text that is difficult for humans to distinguish from authentic human text in a wide range of language tasks. Across document-, sentence- and aspect-level, LLMs have demonstrated commendable zero-, one- and few-shot sentiment classification performance without the need for annotated datasets. 

In certain situations, a scarcity of domain-specific examples for annotation and training may occur. Moreover, classifying text through a commercial API of proprietary LLMs like GPT-3 may not be allowed due to inherent privacy considerations. Furthermore, training and inference of LLMs is highly computationally intensive compared to Small Language Models (SLMs) like those based on BERT (Bidirectional Encoder Representations from Transformers) architecture fine-tuned on annotated datasets. To overcome the limitations from data scarcity as well as from computational demands, studies have generated training examples utilizing LLMs both in the broader field of NLP and specifically in the domain of sentence-level SA.

## Methodology 

This study utilized LLMs to generate annotated examples for ABSA in low-resource scenarios, assuming only 500 or 25 manually annotated (real) examples. LLMs, specifically Llama-3-70B and GPT-3.5-turbo, were used to generate examples. Using increasing numbers of synthetic examples in addition to a fixed set of the given 500 or 25 annotated real examples, SLM were trained for four common ABSA tasks. The performance of the models was compared against that achieved when exclusively using 500, 1,000 or 2,000 real examples for training. Finally, the quality of annotations generated by LLMs was assessed and compared using 2,400 human annotations of synthetic examples.

For a given set of training examples, models for the following ABSA tasks were trained: (1) Aspect Category Detection (ACD), (2) Aspect Category Sentiment Analysis (ACSA), (3) End-to-End ABSA (E2E-ABSA) and (4) Target Aspect Sentiment Detection (TASD). Finally, a total of 2,400 human annotations of synthetic examples were employed to assess the quality of annotations generated by LLMs.

## Results

When considering a pool of 25 real examples for few-shot learning, the inclusion of synthetic training examples resulted in F1 scores of 81.33 and 71.71 for the Aspect Category Detection (ACD) and Aspect Category Sentiment Analysis (ACSA) tasks, respectively. In the case of a given pool of 500 real examples, data augmentation with synthetic examples didn't improve the performance, except for ACSA. For the ACSA task, the addition of examples generated with GPT-3.5-turbo significantly increased the F1 score from 84.54 to 86.70.
\end{abstract}

Supplementary materials, including code and model training results, are provided in the appendix of this work and are accessible on [GitHub](https://github.com/NilsHellwig/absa-llm-augmentation).