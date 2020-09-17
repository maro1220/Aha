import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

const InputJS = () => {
  const [style] = useState({
    maxWidth: "1000px",
    width: "90vw",
    margin: "100px auto 0 auto",
    position: "relative",
  });

  const [data,setData] = useState('');
  const onChange= (e)=>setData(e.target.value)
  const onClick = ()=>{
    if(data.length <1){
      alert('한글자 이상 입력해 주세요')
    }
  }
  return (
    <div style={style}>
      <p
        style={{ marginBottom: "15px", fontSize: "1.2rem", fontWeight: "700" }}
      >
        어떤 지식을 찾고 계세요?
      </p>
      <input
        value={data}
        onChange={onChange}
        style={{
          width: "70%",
          height: "40px",
          textAlign: "center",
          borderRadius: "20px",
          stroke: "none",
          outline: "none",
        }}
        type="text"
        placeholder="아하 지식검색"
      />
      <button
       onClick={onClick}
        style={{
          border: "none",
          position: "absolute",
          right: "17%",
          top: "52px",
          stroke: "none",
          outline: "none",
          background: "white",
          cursor: "pointer",
        }}
      >
        <SearchIcon style={{ width: "30px", background: "white" }} />
      </button>
    </div>
  );
};

export default InputJS;
