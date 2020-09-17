import React from "react";
import MainNav from "../main/MainNav";
import Footer from "../main/Footer"
import FaqMain from "./FaqMain";



const About = () => {
  return (
    <div style={{background:'#f8f8f8',height:'100%',width:'100vw' , overflow:'hidden'}}>
      <MainNav />
        <FaqMain />
      <Footer/>
    </div>
  );
};

export default About;
