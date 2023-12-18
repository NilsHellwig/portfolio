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
};

export const PROJECTS: Project[] = [
  {
    id: "basisdokument",
    title: "Das Basisdokument",
    subtitle: "Digital structuring for civil proceedings.",
    description:
      "BirdID is a mobile application designed for the recognition of 307 distinct bird species through image recognition utilizing Convolutional Neural Networks (CNN). This project was developed as a component of my bachelor’s thesis. React Native served as the framework for the application, while the CNN underwent training, validation, and testing processes with an extensive dataset comprising almost 300,000 bird images sourced from Flickr. The deployment of the trained CNN model was achieved using Flask.",
    type: "Web-App",
    technologies: ["Tailwind", "HTML", "CSS", "Radix", "Draft.js"],
    programmingLanguages: ["TypeScript"],
    iconPath: require("../img/icons/projects/basisdokument.svg").default,
    galleryImages: ["basisdokument/basisdokument-1.png"],
  },
  {
    title: "UR Device Manager",
    subtitle: "Device Management for the University of Regensburg",
    type: "Web-App",
    iconPath: require("../img/icons/projects/ur-device-manager.svg").default,
  },
  {
    title: "AMADEUS",
    subtitle: "Free, data protection-compliant lesson evaluation",
    type: "Web-App",
    iconPath: require("../img/icons/projects/amadeus.svg").default,
  },
  {
    title: "BirdID",
    subtitle: "App for Bird species identification",
    type: "App",
    iconPath: require("../img/icons/projects/bird-id.png"),
  },
  {
    title: "Vall Music",
    subtitle: "New Portfolio for French producer Vall",
    type: "Website",
    iconPath: require("../img/icons/projects/vall-music.svg").default,
  },
  {
    title: "WhistleTube",
    subtitle: "A slightly different messenger service",
    type: "Web-App",
    iconPath: require("../img/icons/projects/whistle-tube.svg").default,
  },
  {
    title: "Discover Malta",
    subtitle: "A fictional vacation blog implemented with docsify",
    type: "Website",
    iconPath: require("../img/icons/projects/discover-malta.png"),
  },
  {
    title: "GameHub",
    subtitle: "A platform for reviewing games",
    type: "Web-App",
    iconPath: require("../img/icons/projects/game-hub.svg").default,
  },
  {
    title: "Wheater Assistant",
    subtitle: "ChatBot for the weather",
    type: "Python Application",
    iconPath: require("../img/icons/projects/wheater-assistant.svg").default,
  },
  {
    title: "UniHub",
    subtitle: "Platform for storing documents during academic studies.",
    type: "App",
    iconPath: require("../img/icons/projects/uni-hub.svg").default,
  },
  {
    title: "TheFlickrFetcher",
    subtitle: "Image data extraction tool for Flickr",
    type: "Python Utility",
    iconPath: require("../img/icons/projects/flickr-fetcher.svg").default,
  },
  {
    title: "TheImageFetcher",
    subtitle: "Image data extraction tool for Google images",
    type: "Python Utility",
    iconPath: require("../img/icons/projects/image-fetcher.svg").default,
  },
  {
    title: "ID3-Algorithm",
    subtitle: "A decision tree algorithm implemented in Java",
    type: "Java Utility",
    iconPath: require("../img/icons/projects/id3-algorithm.svg").default,
  },
  {
    title: "Pedestrian RNN",
    subtitle: "Position prediction using a recurrent neural network",
    type: "Python Utility",
    iconPath: require("../img/icons/projects/pedestrian-rnn.svg").default,
  },
  {
    title: "Painting Colorizer",
    subtitle: "Colorizing black and white images",
    type: "Python Utility",
    iconPath: require("../img/icons/projects/painting-colorizer.png"),
  },
  {
    title: "Flight delay prediction with SVM",
    subtitle: "Flight delay prediction for munich airport ",
    type: "R Project",
    iconPath: require("../img/icons/projects/flight-delay-prediction.svg").default,
  },
];
