import { Slider } from "@material-ui/core";
import React from "react";
import MainNav from "./MainNav";
import Sliders from "./Slider";
import InputJS from "./InputJS"
import MainMenu from "./MainMenu";

const Main = () => {
  return (
    <div style={{background:'#f8f8f8',height:'100%'}}>
      <MainNav />
      <Sliders />
      <InputJS />
      <MainMenu/>
    </div>
  );
};

export default Main;
