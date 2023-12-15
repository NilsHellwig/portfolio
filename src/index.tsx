import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Stylesheets
import "./App.css";
import "./fonts.css";

document.body.style.backgroundColor = 'rgb(249, 250, 251)';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
