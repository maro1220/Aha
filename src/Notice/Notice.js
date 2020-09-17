import React from "react";
import MainNav from "../main/MainNav";
import Footer from "../main/Footer"
import NoticeMain from "./NoticeMain";
import Slider from './Slider'
import { Route } from "react-router-dom";
import NoticeNew from "./NoticeNew"
import NoticeToken from "./NoticeToken"

const Notice = () => {
  return (
    <div style={{background:'#f8f8f8',height:'100%',width:'100vw' , overflow:'hidden'}}>
      <MainNav />
        <Slider/>
          <Route path="/Aha/notice" component={NoticeMain} exact={true}/>
          <Route path="/Aha/new" component={NoticeNew} />
          <Route path="/Aha/token" component={NoticeToken} />
      <Footer/>
    </div>
  );
};

export default Notice;
