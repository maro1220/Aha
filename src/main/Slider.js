import React, { useState, useRef, useEffect, useMemo } from "react";
import "./Slider.css";
import useInterval from "react-useinterval";
import img1 from "../images/main/title.png";
import img2 from "../images/main/title2.png";
import img3 from "../images/main/title3.png";
import img4 from "../images/main/title4.png";
import img5 from "../images/main/title5.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SaveAltTwoTone from "@material-ui/icons/SaveAltTwoTone";
import SchoolIcon from "@material-ui/icons/School";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import PersonIcon from "@material-ui/icons/Person";

const Slider = () => {
  const refs = useRef();
  const [li, setLi] = useState([
    {
      src: img1,
      color: "#20d7d0",
    },
    {
      src: img2,
      color: "#0e2ab1",
    },
    {
      src: img3,
      color: "#3c50d1",
    },
    {
      src: img4,
      color: "#0076bf",
    },
    {
      src: img5,
      color: "#6158f2",
    },
    {
      src: img1,
      color: "#20d7d0",
    },
  ]);
  const [style, setStyel] = useState({
    marginLeft: 0,
    transition: " 0.5s",
  });

  const [num, setNum] = useState(0);

  useInterval(() => {
    setNum(num + 1);
    setStyel({ marginLeft: -90 * (num + 1) + "vw", transition: "0.5s" });
    if (num == 4) {
      setTimeout(() => {
        setStyel({ marginLeft: 0, transition: "0s" });
        setNum(0);
      }, 500);
    }
  }, 3000);

  return (
    <div>
      <Router>
        <div className="area">
          <ul className="slider" ref={refs} style={style}>
            {li.map((li) => (
              <li className="slider_list" style={{ background: li.color }}>
                <Link to="/" style={{ width: "100%" }}>
                  <img src={li.src} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="listbox">
          <ul>
            <li>
              <Link to="/" className="listtext">
                <SaveAltTwoTone style={{ marginRight: "10px" }} />
                출석스탬프
              </Link>
            </li>
            <li>
              <Link to="/" className="listtext">
                <SchoolIcon style={{ marginRight: "10px" }} />
                지식 프로필
              </Link>
            </li>
            <li>
              <Link to="/" className="listtext">
                <TrackChangesIcon style={{ marginRight: "10px" }} />
                룰렛이벤트
              </Link>
            </li>
            <li>
              <Link to="/" className="listtext">
                <PersonIcon style={{ marginRight: "10px" }} />
                계정설정
              </Link>
            </li>
          </ul>
        </div>
      </Router>
    </div>
  );
};

export default Slider;
