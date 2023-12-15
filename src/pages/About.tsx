import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">About</h2>
      <div className="text-zinc-500 flex flex-col gap-4 mt-8">
        <p>
          I’m a 23 year old developer living in Regensburg, Germany. During my studies of media informatics at the University of Regensburg, I got especially interested in the development of web and
          mobile applications.
        </p>
        <p>
          As a software developer, I am passionate about both frontend and backend development. I find the process of creating intuitive and visually appealing user interfaces to be just as exciting
          as developing efficient and robust solutions on the backend.{" "}
        </p>
        <p>
          Additionally, I am deeply fascinated by the field of artificial intelligence. In particular, my interests lie in the areas of image processing and natural language processing. Having worked
          with convolutional neural networks (CNNs), generative adversarial networks (GANs), and diffusion models.
        </p>
        <p>
          In the domain of Natural Language Processing, I have a comprehensive understanding and hands-on experience with transformer-based language models, utilizing them for tasks such as
          classification, token classification, and phrase generation. Additionally, my contributions include publications in conferences related to Sentiment Analysis.
        </p>
      </div>
    </div>
  );
};

export default About;
