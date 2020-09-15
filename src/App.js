import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./main/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>
  );
}

export default App;
