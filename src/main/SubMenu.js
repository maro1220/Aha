import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./SubMenu.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import homeLower from '../images/main/home-lower-bg_243f6a5.jpg'
const SubMenu = () => {
  const [listdata, setListdata] = useState([
    {
      id: 1,
      text: "Q.집주인이 건물 관리에 소홀할 경우?",
      title: "Paper",
      category: "법률 / 답변수23",
    
    },
    {
      id: 2,
      text: "Q.내년에 가상화폐에 세금 어떤식으로 계산하나요?",
      title: "Paper",
      category: "블록 / 답변수8",
     
    },
    {
      id: 3,
      text: "Q.바늘로 머리를 계속 찌리는 듯한 느낌이 오는데 어딜 가야하나요?",
      title: "Paper",
      category: "의료 / 답변수1",
    
    },
    {
      id: 4,
      text: "Q.코로나 후유증에는 무엇이 있나요?",
      title: "Paper",
      category: "의료 / 답변수2",

    },
    {
      id: 5,
      text: "Q.통풍 증상이 뼈 마디가 아프고 그런가요?",
      title: "Paper",
      category: "의료 / 답변수12",
    
    },
    {
      id: 6,
      text: "Q.중고싸이드 거래시 발생한 사기사건 해결방법",
      title: "Paper",
      category: "법률 / 답변수3",
     
    },
    {
      id: 7,
      text: "Q.좋은 콜레스트레롤과 나쁜 콜레스테롤을 나누는 기준은?",
      title: "Paper",
      category: "의료 / 답변수4",
    
    },
    {
      id: 8,
      text: "Q.전동 킥보드 사고 해결할수 있는 방법은 없을까요???",
      title: "Paper",
      category: "의료 / 답변수2",

    },
  ]);

  return (
    <>
    <div className="SubMenu">
      <div>
        <span></span>
        <p>지금 미친 듯이 인기 있는 질문과 답변</p>
      </div>
      <Grid
        style={{
          display: "flex",
          maxWidth: "1020px",
          width: "90vw",
          justifyContent: "center",
          margin: "0 auto",
          flexWrap: "wrap",
        }}
      >
        {listdata.map((listdata) => (
          <Paper key={listdata.id} className="item">
            <div>
              <p>{listdata.text}</p>
            </div>
            <div>
              <span>{listdata.category}</span>
              <ThumbUpAltIcon style={{ cursor: "pointer" }} />
            </div>
          </Paper>
        ))}
      </Grid>
  
    </div>
    <div className="SubMenuImg">
        <img src={homeLower}></img> 
        <div>
        <p>아하의 지식답변자가 되어보세요.</p>
          <span>추가수익 + 온라인명성 + 뿌듯함을 한꺼번에 가질 수 있습니다.</span>
          <button>지원하기</button>
        </div>
    </div>

   
      </>
  );
};

export default SubMenu;
