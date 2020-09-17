import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import aha_logo_black from "../images/main/aha_logo_black.png";
import "./MainNav.css";
import useInterval from "react-useinterval";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function MainNav() {
  const [num, setNum] = useState(1);
  const [style, setStyle] = useState({
    marginTop: 0,
    transition: "0.5s",
  });
  const [data] = useState([
    {
      id: 1,
      text: "서비스 개인정보처리방침 개정공지",
    },
    {
      id: 2,
      text: "추천인 가입 어뷰징 안내",
    },
    {
      id: 3,
      text: "아하서비스 콘텐츠 관리정책",
    },
    {
      id: 4,
      text: "서비스 개인정보처리방침 개정공지",
    },
  ]);

  useInterval(() => {
    setNum(num + 1);
    setStyle({ marginTop: -30 * num, transition: "0.5s" });
    if (num === 3) {
      setTimeout(() => {
        setStyle({ marginTop: 0, transition: "0s" });
        setNum(1);
      }, 500);
    }
  }, 2000);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div className="navall">
        <div className="nav">
          <div className="snav1">
            <Link to="/Aha">
              <img src={aha_logo_black} alt="아하로고 블랙"></img>
            </Link>
            <Link to="/Aha" className="Link">
              Q&amp;A홈
            </Link>
            <Button
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              더보기 &or;
            </Button>
          </div>
          <div className="snav2">
            <div className="slider" style={style}>
              {data.map((data) => (
                <Link to="/Aha" className="Link" key={data.id}>
                  {data.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="snav3">
            <input placeholder="아하 지식검색" />
            <Link to="/Aha" className="Link">
              로그인
            </Link>
            <Link to="/Aha" className="Link">
              회원가입
            </Link>
          </div>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
            style={{
              marginTop: "20px",
              outline: "none",
              stroke: "none",
              zIndex: 10,
            }}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === "bottom" ? "top" : "bottom",
                }}
              >
                <Paper
                  style={{
                    width: "100vw",
                    background: "white",
                    boxShadow: "none",
                    outline: "none",
                    stroke: "none",
                    border: "none",
                  }}
                >
                  <ClickAwayListener
                    onClickAway={handleClose}
                    style={{ outline: "none", stroke: "none" }}
                  >
                    <MenuList
                      style={{ outline: "none", stroke: "none" }}
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <div
                        style={{
                          maxWidth: "1500px",
                          width: "100%",
                          display: "flex",
                          outline: "none",
                          stroke: "none",
                          border: "none",
                          margin: "0 auto",
                        }}
                      >
                        <div>
                          <p
                            style={{
                              margin: "10px 20px 0px 0px",
                              fontWeight: "700",
                              fontSize: "1.1rem",
                            }}
                          >
                            아하QA
                          </p>
                        </div>
                        <div className="list">
                          <MenuItem onClick={handleClose}>의료</MenuItem>
                          <MenuItem onClick={handleClose}>법률</MenuItem>
                          <MenuItem onClick={handleClose}>세무</MenuItem>
                          <MenuItem onClick={handleClose}>인사</MenuItem>
                          <MenuItem onClick={handleClose}>재무설계</MenuItem>
                          <MenuItem onClick={handleClose}>보험</MenuItem>
                          <MenuItem onClick={handleClose}>무역</MenuItem>
                          <MenuItem onClick={handleClose}>블록체인</MenuItem>
                          <MenuItem onClick={handleClose}>프로그래밍</MenuItem>
                          <MenuItem onClick={handleClose}>심리상담</MenuItem>
                          <MenuItem onClick={handleClose}>생활상식</MenuItem>
                          <MenuItem onClick={handleClose}>재택크상식</MenuItem>
                          <MenuItem onClick={handleClose}>부동산</MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              {" "}
                              주식
                            </Link>
                          </MenuItem>
                        </div>
                        <div className="list">
                          <MenuItem onClick={handleClose}>
                            <Link
                              to="/Aha/about"
                              style={{
                                textDecoration: "none",
                                color: "rgb(70,70,70)",
                              }}
                            >
                              {" "}
                              아하소개
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link
                              to="/Aha/notice"
                              style={{
                                textDecoration: "none",
                                color: "rgb(70,70,70)",
                              }}
                            >
                              {" "}
                              공지사항
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link
                              to="/Aha/new"
                              style={{
                                textDecoration: "none",
                                color: "rgb(70,70,70)",
                              }}
                            >
                              {" "}
                              아하소식
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link
                              to="/Aha/token"
                              style={{
                                textDecoration: "none",
                                color: "rgb(70,70,70)",
                              }}
                            >
                              {" "}
                              아하토큰소식
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link
                              to="/Aha/faq"
                              style={{
                                textDecoration: "none",
                                color: "rgb(70,70,70)",
                              }}
                            >
                              {" "}
                              FAQ
                            </Link>
                          </MenuItem>
                        </div>
                      </div>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    </div>
  );
}
