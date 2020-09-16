import React from "react";
import MainNav from "../main/MainNav";
import Footer from "../main/Footer"
import AboutMain from "./AboutMain";



const About = () => {
  return (
    <div style={{background:'#f8f8f8',height:'100%',width:'100vw' , overflow:'hidden'}}>
      <MainNav />
      <AboutMain />
      <Footer/>
    </div>
  );
};

export default About;
