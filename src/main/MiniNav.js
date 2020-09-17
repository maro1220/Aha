import React, { useState } from "react";
import AssignmentIcon from "@material-ui/icons/Assignment";
import "./MiniNav.css";
import useInterval from "react-useinterval";


const MiniNav = () => {
    const [style,setStyle] = useState({
        bottom:'100px',
        right:'30px'

    })
    useInterval(() => {
        setTimeout(() => {
            setStyle({bottom:'130px',right:'30px'})
        }, 400);
        setTimeout(() => {
            setStyle({bottom:'90px',right:'30px'})
        }, 600);
        setTimeout(() => {
            setStyle({bottom:'120px',right:'30px'})
        }, 800);
        setTimeout(() => {
            setStyle({bottom:'90px',right:'30px'})
        },1000);
        setTimeout(() => {
            setStyle({bottom:'100px',right:'30px'})
        },1200);
      }, 2000);
    
  return (
    <div>
      <div className="message" style={style}>첫 질문 <br/>+50AHT</div>
      <div       style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "70px",
          height: "70px",
          zIndex: "10",
          background: "#1fc7c1",
          borderRadius: "70px",
          fontSize: "0.5rem",
          cursor: "pointer",
          color: "white",
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          boxShadow: "1px 1px 5px 1px   rgb(150,150,150)",
        }}>
      <AssignmentIcon
    
        style={
            {
                fontSize:'2.5rem'
            }
        }
      />
      </div>

    </div>
  );
};

export default MiniNav;
