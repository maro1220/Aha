import React from "react";
import "./App.css";
import Main from "./main/Main";
import { BrowserRouter as Router, Route} from "react-router-dom";
import About from "./about/About";
import Notice from "./Notice/Notice";
import Faq from "./faq/Faq"

function App() {
  

  return (
    <Router>
      <div className="App">
        <Route path="/Aha" component={Main} exact={true}   />
        <Route path="/Aha/about" component={About}  />
        <Route path="/Aha/notice" component={Notice} />
        <Route path="/Aha/new" component={Notice} />
        <Route path="/Aha/token" component={Notice} />
        <Route path="/Aha/faq" component={Faq}/>
      </div>
    </Router>
  );
}

export default App;
