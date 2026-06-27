export type ProgrammingLanguage = {
  name: string;
  iconPath: string;
  favorite?: boolean;
};

export const PROGRAMMING_LANGUAGES: ProgrammingLanguage[] = [
  {
    name: "Python",
    favorite: true,
    iconPath: require("../img/icons/programming-languages/python.svg").default,
  },
  {
    name: "TypeScript",
    favorite: true,
    iconPath: require("../img/icons/programming-languages/typescript.svg").default,
  },
  {
    name: "R",
    iconPath: require("../img/icons/programming-languages/r.svg").default,
  },
  {
    name: "Java",
    iconPath: require("../img/icons/programming-languages/java.svg").default,
  },
];
