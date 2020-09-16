import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./main/Main";
import { BrowserRouter as Router, Route ,Link} from "react-router-dom";
import About from "./about/About";


function App() {
  

  return (
    <Router>
      <div className="App">
        <Route path="/Aha" component={Main} exact={true}   />
        <Route path="/Aha/about" component={About}  />
      </div>
    </Router>
  );
}

export default App;
