type Project = {
  id?: string;
  title: string;
  subtitle: string;
  description?: string;
  technologies?: string[];
  programmingLanguages?: string[];
  type: string;
  iconPath: string;
  galleryImages?: string[];
  links?: { name: string; url: string }[];
};

export const PROJECTS: Project[] = [
  {
    id: "basisdokument",
    title: "Das Basisdokument",
    subtitle: "Digital structuring for civil proceedings.",
    description:
      '"Das Basisdokument" enables lawyers and judges to create their previous analogue correspondence in a digital environment. The application was created as a co-operation between Media Informatics group and the faculty of law at University of Regensburg. From 2023 on, the implemented application was used at several courts in Bavaria and Lower Saxony, laying the first foundation stone for the digitalisation of civil proceedings. I recommend using the demo at https://app.parteivortrag.de/ since the hosted application does not have a backend for privacy reasons. You can experiment freely on the domain without any concerns.',
    type: "Web-App",
    technologies: ["Tailwind", "HTML", "CSS", "Radix", "Draft.js"],
    programmingLanguages: ["TypeScript"],
    iconPath: require("../img/icons/projects/basisdokument.svg").default,
    galleryImages: [
      "basisdokument/basisdokument-1.png",
      "basisdokument/basisdokument-2.png",
      "basisdokument/basisdokument-3.png",
      "basisdokument/basisdokument-4.png",
      "basisdokument/basisdokument-5.png",
    ],
    links: [
      { name: "Universität Regensburg: Basisdokument", url: "https://www.uni-regensburg.de/forschung/reallabor-parteivortrag-im-zivilprozess/startseite" },
      { name: "Justizministerium Bayern: Reallabor Strukturvorgaben im Zivilprozess", url: "https://www.justiz.bayern.de/presse-und-medien/pressemitteilungen/archiv/2023/52.php" },
      { name: "GitHub Repository: Das Basisdokument", url: "https://github.com/markusbink/basisdokument-implementierung" },
      { name: "Demo (without Backend)", url: "https://app.parteivortrag.de/" },
    ],
  },
  {
    id: "device-manager",
    title: "UR Device Manager",
    subtitle: "Device Management for the University of Regensburg",
    description:
      "This device manager was dockerized application developed as part of the course Advanced Software Engineering (module code: 36632b) at the University of Regensburg. The Device Manager is a web-based solution for managing devices at the University of Regensburg. For this purpose, a backend with FastAPI ⚡ and a SQLite database as well as a frontend with React.js ⚛️ were implemented.",
    type: "Web-App",
    technologies: ["FastApi", "Uvicorn", "Bcrypt", "PyTest", "SQLAlchemy", "Radix", "React.js"],
    programmingLanguages: ["JavaScript", "Python"],
    iconPath: require("../img/icons/projects/ur-device-manager.svg").default,
    galleryImages: ["device-manager/device-manager-1.png", "device-manager/device-manager-2.gif", "device-manager/device-manager-3.gif", "device-manager/device-manager-4.gif"],
    links: [{ name: "GitLab Repository: Device Manager", url: "https://git.uni-regensburg.de/ase22ws/abschlussprojekt-device-manager-nils-constantin-hellwig" }],
  },
  {
    id: "amadeus",
    title: "AMADEUS",
    subtitle: "Free, data protection-compliant lesson evaluation",
    type: "Web-App",
    iconPath: require("../img/icons/projects/amadeus.svg").default,
  },
  {
    id: "bird-id",
    title: "BirdID",
    subtitle: "App for Bird species identification",
    type: "App",
    description:
      "BirdID is a mobile application designed for the recognition of 307 distinct bird species through image recognition utilizing Convolutional Neural Networks (CNN). This project was developed as a component of my bachelor’s thesis. React Native served as the framework for the application, while the CNN underwent training, validation, and testing processes with an extensive dataset comprising almost 300,000 bird images sourced from Flickr. The deployment of the trained CNN model was achieved using Flask.",
    iconPath: require("../img/icons/projects/bird-id.png"),
  },
  {
    id: "vall-music",
    title: "Vall Music",
    subtitle: "New Portfolio for French producer Vall",
    type: "Website",
    iconPath: require("../img/icons/projects/vall-music.svg").default,
  },
  {
    id: "whistle-tube",
    title: "WhistleTube",
    subtitle: "A slightly different messenger service",
    type: "Web-App",
    iconPath: require("../img/icons/projects/whistle-tube.svg").default,
  },
  {
    id: "discover-malta",
    title: "Discover Malta",
    subtitle: "A fictional vacation blog implemented with docsify",
    type: "Website",
    iconPath: require("../img/icons/projects/discover-malta.png"),
  },
  {
    id: "game-hub",
    title: "GameHub",
    subtitle: "A platform for reviewing games",
    type: "Web-App",
    iconPath: require("../img/icons/projects/game-hub.svg").default,
  },
  {
    id: "wheater-assistant",
    title: "Wheater Assistant",
    subtitle: "ChatBot for the weather",
    type: "Python Application",
    iconPath: require("../img/icons/projects/wheater-assistant.svg").default,
  },
  {
    id: "uni-hub",
    title: "UniHub",
    subtitle: "Platform for storing documents during academic studies.",
    type: "App",
    iconPath: require("../img/icons/projects/uni-hub.svg").default,
  },
  {
    id: "flickr-fetcher",
    title: "TheFlickrFetcher",
    subtitle: "Image data extraction tool for Flickr",
    type: "Python Utility",
    iconPath: require("../img/icons/projects/flickr-fetcher.svg").default,
  },
  {
    id: "image-fetcher",
    title: "TheImageFetcher",
    subtitle: "Image data extraction tool for Google images",
    type: "Python Utility",
    iconPath: require("../img/icons/projects/image-fetcher.svg").default,
  },
  {
    id: "id3-algorithm",
    title: "ID3-Algorithm",
    subtitle: "A decision tree algorithm implemented in Java",
    type: "Java Utility",
    iconPath: require("../img/icons/projects/id3-algorithm.svg").default,
  },
  {
    id: "predestrian-rnn",
    title: "Pedestrian RNN",
    subtitle: "Position prediction using a recurrent neural network",
    type: "Python Utility",
    iconPath: require("../img/icons/projects/pedestrian-rnn.svg").default,
  },
  {
    id: "painting-colorizer",
    title: "Painting Colorizer",
    subtitle: "Colorizing black and white images",
    type: "Python Utility",
    iconPath: require("../img/icons/projects/painting-colorizer.png"),
  },
  {
    id: "flight-delay-prediction",
    title: "Flight delay prediction with SVM",
    subtitle: "Flight delay prediction for munich airport ",
    type: "R Project",
    iconPath: require("../img/icons/projects/flight-delay-prediction.svg").default,
  },
];
