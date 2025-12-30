export type ProgrammingLanguage = {
  name: string;
  description: string;
  iconPath: string;
};

export const PROGRAMMING_LANGUAGES: ProgrammingLanguage[] = [
  {
    name: "Python",
    description:
      "Python is my primary programming language for data science and machine learning projects. I extensively use it for data processing, developing ML pipelines, and building robust web applications with FastAPI. Its versatility and rich ecosystem make it my go-to choice for both academic research and professional development.",
    iconPath: require("../img/icons/programming-languages/python.svg").default,
  },
  {
    name: "TypeScript",
    description:
      "I leverage TypeScript extensively for front-end development across frameworks including React, Vue.js, and Angular. My experience spans personal projects, professional applications, and academic work, where TypeScript's strong typing system ensures code reliability and maintainability.",
    iconPath: require("../img/icons/programming-languages/typescript.svg").default,
  },
  {
    name: "R",
    description: "I employ R extensively for statistical analysis and data visualization in academic research. Its powerful statistical packages and visualization libraries make it an essential tool for conducting rigorous data analysis and creating publication-quality graphics.",
    iconPath: require("../img/icons/programming-languages/r.svg").default,
  },
  {
    name: "Java",
    description: "I utilize Java for Android mobile development and enterprise applications. My experience includes building native Android apps and developing scalable backend services with Spring Boot, leveraging Java's robust ecosystem and performance characteristics.",
    iconPath: require("../img/icons/programming-languages/java.svg").default,
  },
];
