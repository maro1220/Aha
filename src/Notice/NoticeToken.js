import React, { useState } from 'react';
import {Link,NavLink} from 'react-router-dom'
import './NoticeMain.css'
import imgs from "../images/notice/banner_stamp_attendance.png"

const NoticeMain = () => {
    const [nodicedata] = useState([
        {
            id:1,
            text:'2020년 8월24일 아하토큰 보상 지급 오류 건 공지',
            checked:false,
            date:'2020.08.25',
            new:false,
        },
        {
            id:2,
            text:'아하토큰 소각 완료 최종 공지',
            checked:false,
            date:'2020.07.28',
            new:false,
        },
        {
            id:3,
            text:'아하토큰 업비트 원화마켓 상장 공지',
            checked:false,
            date:'2019.06.18',
            new:false,
        },
        {
            id:4,
            text:'아하토큰 3차 소각 공지',
            checked:false,
            date:'2020.07.16',
            new:false,
        },
        {
            id:5,
            text:'아하토큰X데이빗 원화마켓 상장 공지',
            checked:false,
            date:'2020.06.17',
            new:false,
        },
        {
            id:6,
            text:'아하토큰 2차 소각 공지',
            checked:false,
            date:'2020.06.16',
            new:false,
        },
        {
            id:7,
            text:'아하토큰 1차 소각 공지',
            checked:false,
            date:'2020.06.10',
            new:false,
        },
    
    ]) 

        const [linkdata]=useState([
            {
                Link:"/Aha",
                text:'홈',
                id:1,
            },
            {
                Link:"/Aha",
                text:'의료',
                id:2,
            },
            {
                Link:"/Aha",
                text:'법률',
                id:3,
            },
            {
                Link:"/Aha",
                text:'세무',
                id:4,
            },
            {
                Link:"/Aha",
                text:'인사',
                id:5,
            },
            {
                Link:"/Aha",
                text:'재무',
                id:6,
            },
            {
                Link:"/Aha",
                text:'보험',
                id:7,
            },
            {
                Link:"/Aha",
                text:'무역',
                id:8,
            },
            {
                Link:"/Aha",
                text:'블록체인',
                id:9,
            },
            {
                Link:"/Aha",
                text:'프로그래밍',
                id:10,
            },
            {
                Link:"/Aha",
                text:'심리 상담',
                id:11,
            },
            {
                Link:"/Aha",
                text:'생활상식',
                id:12,
            }
        ])
    return (
        <div className="noticemain">
            <div>
                <ul>
                {linkdata.map(linkdata=>
                    <li key={linkdata.id}>
                        <Link to={linkdata.Link}>{linkdata.text}</Link>
                    </li>
                )}
               
                    <li className="up">
                        <NavLink to="/Aha/notice" activeClassName="active" >공지사항 </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Aha/new" >아하소식 </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Aha/token"  >아하 토큰 소식</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Aha/about"  >아하 소개</NavLink>
                    </li>
                </ul>
                   <Link to="/Aha"> <img src={imgs} alt="아하토큰"></img></Link>
            </div>
            <div>
                <div className="notice">
                    <p>아하 토큰 소식</p>
                </div>
                {nodicedata.map(nodicedata=>
                    <div key={nodicedata.id} className="list">
                        <div>   
                            {
                            nodicedata.checked===true && <span 
                            style={{
                                background:'orange',width:'50px',height:'25px',
                                borderRadius:'5px',lineHeight:'25px',color:'white',
                                marginRight:'10px'
                                }}>
                                    필독
                                </span>
                                }
                           <Link style={{textDecoration:'none'}} to="/Aha/new"><p>{nodicedata.text}</p></Link> 
                        </div>
                        <div>
                            <span style={{color:'gray', fontWeight:600,marginRight:'10px'}}>{nodicedata.date}</span>
                            {nodicedata.new===true && <span style={{color:'#1fc7c1',fontWeight:700 , textTransform:'uppercase' ,fontSize:'0.8rem'}}>new</span>}
                        </div>
                     
               
                    </div>
                )}
            </div>
        </div>
    );
};

export default NoticeMain;