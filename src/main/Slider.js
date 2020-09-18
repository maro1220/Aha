import React, { useState, useRef} from "react";
import "./Slider.css";
import useInterval from "react-useinterval";
import img1 from "../images/main/title.png";
import img2 from "../images/main/title2.png";
import img3 from "../images/main/title3.png";
import img4 from "../images/main/title4.png";
import img5 from "../images/main/title5.png";
import { Link} from "react-router-dom";
import SaveAltTwoTone from "@material-ui/icons/SaveAltTwoTone";
import SchoolIcon from "@material-ui/icons/School";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import PersonIcon from "@material-ui/icons/Person";

const Slider = () => {



  const refs = useRef();
  const [li] = useState([
    {
      id:1,
      src: img1,
      color: "#20d7d0",
      link:'/Aha'
    },
    {
      id:2,
      src: img2,
      color: "#0e2ab1",
      link:'/Aha/tokens'
    },
    {
      id:3,
      src: img3,
      color: "#3c50d1",
      link:'/Aha'
    },
    {
      id:4,
      src: img4,
      color: "#0076bf",
      link:'/Aha/about'
    },
    {
      id:5,
      src: img5,
      color: "#6158f2",
      link:'/Aha/about'
    },
    {
      id:6,
      src: img1,
      color: "#20d7d0",
      link:'/Aha'
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
    if (num === 4) {
      setTimeout(() => {
        setStyel({ marginLeft: 0, transition: "0s" });
        setNum(0);
      }, 500);
    }
  }, 3000);

  return (
    <div>
     
        <div className="area">
          <ul className="slider" ref={refs} style={style}>
            {li.map((li) => (
              <li key={li.id} className="slider_list" style={{ background: li.color }}>
                <Link to={li.link} style={{ width: "100%" }}>
                  <img src={li.src}  alt={li.src}/>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="listbox">
          <ul>
            <li>
              <Link to='/Aha/about'  className="listtext">
                <SaveAltTwoTone className="listicon" />
                아하소개
              </Link>
            </li>
            <li>
              <Link  to='/Aha/notice'  className="listtext">
                <SchoolIcon className="listicon"  />
                공지사항
              </Link>
            </li>
            <li>
              <Link to='/Aha/faq'   className="listtext">
                <TrackChangesIcon className="listicon"  />
                FAQ
              </Link>
            </li>
            <li>
              <Link  to='/Aha/tokens'   className="listtext">
                <PersonIcon className="listicon" />
                아하 토큰
              </Link>
            </li>
          </ul>
        </div>
 
    </div>
  );
};

export default Slider;
