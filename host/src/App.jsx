import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Career from "./components/Career";
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
          <Route path='/careear' element={<Career />}/> 
          <Route path='/skills' element={<Skills />}/> 
        </Routes>
      </div>
    </Router>
  </>
);
ReactDOM.render(<App />, document.getElementById("root"));
