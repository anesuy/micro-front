import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/Container";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Container/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("root"));
