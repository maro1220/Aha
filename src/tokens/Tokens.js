import React from "react";
import MainNav from "../main/MainNav";
import Footer from "../main/Footer"
import TokensMain from "./TokensMain";
import TokensLunivers from "./TokensLunivers"
import TokensMoney from "./TokensMoney"
import {Route} from 'react-router-dom'



const Tokens = () => {
  return (
    <div style={{background:'#f8f8f8',height:'100%',width:'100vw' , overflow:'hidden'}}>
      <MainNav />
        <TokensMain />
        <Route path="/Aha/tokens" component={TokensLunivers} exact={true} />
        <Route path="/Aha/tokens/money" component={TokensMoney} />
      <Footer/>
    </div>
  );
};

export default Tokens;
