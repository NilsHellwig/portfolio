export const LECTURES = [
  {
    title: "Web Engineering",
    lecturer: "Nils Hellwig",
    term: "Summer Term 2025",
    iconPath: require("../img/icons/lectures/web-dev-25.svg").default,
    description:
      "Participants will learn the fundamentals of web development both theoretically and practically in this course. Over 11 sessions, the course includes theoretical units with lecture slides as well as interactive live-coding sessions. Topics covered include basic web technologies such as HTML, CSS, and JavaScript, as well as advanced concepts and tools like React, Node.js, Docker, and MongoDB. The goal of the course is to develop interactive and user-friendly web applications. During the semester break, a practice-oriented workshop follows, serving as preparation for the final project (module grade). Here we focus on prototyping, ER diagrams, and user stories to create a solid foundation for implementing your project.",
    competences: [
      "Next.js",
      "MongoDB",
      "Docker",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    materials: [
      {
        name: "01 Git und GitHub",
        description: "Fundamentals of version control with Git and GitHub.",
        documentPath: "web-dev-25/01 Git und GitHub.pdf",
      },
      {
        name: "02 HTML",
        description: "Essential concepts and syntax of HyperText Markup Language (HTML)",
        documentPath: "web-dev-25/02 HTML.pdf",
      },
      {
        name: "03 CSS",
        description: "Basic principles and styling techniques with Cascading Style Sheets (CSS)",
        documentPath: "web-dev-25/03 CSS.pdf",
      },
      {
        name: "04 JavaScript",
        description: "Foundations of JavaScript programming language and its applications",
        documentPath: "web-dev-25/04 JavaScript.pdf",
      },
      {
        name: "04b JavaScript II",
        description: "Advanced JavaScript concepts and techniques",
        documentPath: "web-dev-23/04b JavaScript II.pdf",
      },
      {
        name: "05 Node JS",
        description: "Server-side JavaScript development with Node.js",
        documentPath: "web-dev-25/05 Node JS.pdf",
      },
      {
        name: "06 Docker",
        description: "Containerization and deployment with Docker",
        documentPath: "web-dev-25/06 Docker.pdf",
      },
      {
        name: "07 NOSQL und MongoDB",
        description: "NoSQL databases and MongoDB for modern web applications",
        documentPath: "web-dev-25/07 NOSQL und MongoDB.pdf",
      },
      {
        name: "08 React",
        description: "Building user interfaces with React library",
        documentPath: "web-dev-25/08 React.pdf",
      },
      {
        name: "08b React Router Strict Mode und Styling",
        description: "Advanced React concepts including routing and styling",
        documentPath: "web-dev-25/08b React Router Strict Mode und Styling.pdf",
      },
      {
        name: "09 JWT Tokens",
        description: "Authentication and authorization with JSON Web Tokens",
        documentPath: "web-dev-25/09 JWT Tokens.pdf",
      },
    ],
  },
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
        documentPath: "web-dev-23/intro-git.pdf",
      },
      {
        name: "02 Introduction to HTML",
        description: "Essential concepts and syntax of HyperText Markup Language (HTML)",
        documentPath: "web-dev-23/intro-html.pdf",
      },
      {
        name: "03 Introduction to CSS",
        description: "Basic principles and styling techniques with Cascading Style Sheets (CSS)",
        documentPath: "web-dev-23/intro-css.pdf",
      },
      {
        name: "04 Introduction to JavaScript",
        description: "Foundations of JavaScript programming language and its applications",
        documentPath: "web-dev-23/intro-javascript.pdf",
      },
      {
        name: "09 Introduction to React",
        description: "Overview of React library and building user interfaces with React components",
        documentPath: "web-dev-23/intro-react.pdf",
      },
      {
        name: "Course Concept",
        description: "Overview of the course chapters",
        documentPath: "web-dev-23/course-concept.pdf",
      },
    ],
  },
];
