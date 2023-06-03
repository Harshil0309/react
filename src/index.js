import React from "react";
import ReactDOM from "react-dom/client";
// import FeedList from './App';
import ToDo from "./ToDo";
import ResumeBuilder from "./ResumeBuilder"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ToDo /> */}
    <ResumeBuilder/>
  </React.StrictMode>
);
