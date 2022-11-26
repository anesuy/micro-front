import React from "react";
import User from "./components/User";
import { GitHubProvider } from "./assets/GitHubContext";

const App = () => (
  <GitHubProvider>
    <User/>
  </GitHubProvider>
  
);
export default App;
