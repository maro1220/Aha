import { Slider } from "@material-ui/core";
import React from "react";
import MainNav from "./MainNav";
import Sliders from "./Slider";
import InputJS from "./InputJS"
import MainMenu from "./MainMenu";
import SubMenu from "./SubMenu";
import Footer from "./Footer"
import MiniNav from "./MiniNav";
import {useHistory} from 'react-router-dom';

const Main = () => {



  return (
    <div style={{background:'#f8f8f8',height:'100%',width:'100vw' , overflow:'hidden'}}>
      <MiniNav />
      <MainNav />
      <Sliders />
      <InputJS />
      <MainMenu/>
      <SubMenu/>
      <Footer />
    </div>
  );
};

export default Main;
