import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GitHub from "./components/GitHub";
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
              </>
            }
          />
          <Route path='/github-page' element={<GitHub />}/> 
        </Routes>
      </div>
    </Router>
  </>
);
ReactDOM.render(<App />, document.getElementById("root"));
