import React from "react";
import "./App.css";
import Main from "./main/Main";
import { Route , Switch} from "react-router-dom";
import About from "./about/About";
import Notice from "./Notice/Notice";
import Faq from "./faq/Faq"
import Tokens from "./tokens/Tokens";


  
function App() {

  const ScrollToTop = ()=>{
    window.scrollTo(0,0);
    return null;
  }
  return (
  
      <div className="App">
          <Switch>
        <Route path="/Aha" component={Main} exact={true}   />
        <Route path="/Aha/about" component={About}  />
        <Route path="/Aha/notice" component={Notice} />
        <Route path="/Aha/new" component={Notice} />
        <Route path="/Aha/token" component={Notice} />
        <Route path="/Aha/faq" component={Faq}/>
        <Route path="/Aha/tokens" component={Tokens} />
        </Switch>
        <Route component={ScrollToTop} />
      </div>

  );
}

export default App;
