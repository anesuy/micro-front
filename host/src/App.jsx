import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Component1 from "./components/Component1";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import "./index.css";

const App = () => (
  <>
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <HomePage />
                <Component1 />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  </>
);
ReactDOM.render(<App />, document.getElementById("root"));
