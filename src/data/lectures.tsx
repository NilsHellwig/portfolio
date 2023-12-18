export const LECTURES = [
  {
    title: "Modern Web-App Development with JavaScript, Node.js and React",
    lecturer: "Stefan Böhringer, Nils Hellwig",
    term: "Summer Term 2023",
    iconPath: require("../img/icons/lectures/web-dev-23.svg").default,
    description:
      "Participants will gain insight into contemporary practices of (Full-Stack) web development using the JavaScript programming language. JavaScript is now widely employed to address challenges on both the frontend and backend sides. A significant milestone in this regard was the development of Node.js, which serves as the foundation for the course. Building upon this, participants will familiarize themselves with typical JavaScript tools through a project accompanying the course—an authentication-enabled ToDo app. ",
    competences: [
      "Express.js as a Node framework for creating and managing the application on the server",
      "MongoDB as a database utilizing JSON for data storage",
      "EJS for straightforward templating",
      "React.js for implementing more complex Graphical User Interfaces",
    ],
    materials: [
      {
        name: "01 Git und GitLab",
        description: "Fundamentals of version control with Git and GitLab.",
        documentPath: "intro-git.pdf",
      },
      {
        name: "02 Introduction to HTML",
        description: "Essential concepts and syntax of HyperText Markup Language (HTML)",
        documentPath: "intro-html.pdf",
      },
      {
        name: "03 Introduction to CSS",
        description: "Basic principles and styling techniques with Cascading Style Sheets (CSS)",
        documentPath: "intro-css.pdf",
      },
      {
        name: "04 Introduction to JavaScript",
        description: "Foundations of JavaScript programming language and its applications",
        documentPath: "intro-javascript.pdf",
      },
      {
        name: "09 Introduction to React",
        description: "Overview of React library and building user interfaces with React components",
        documentPath: "intro-react.pdf",
      },
      {
        name: "Course Concept",
        description: "Overview of the course chapters",
        documentPath: "course-concept.pdf",
      },
    ],
  },
];
