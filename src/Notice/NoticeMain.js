import React, { useState } from 'react';
import {Link,NavLink} from 'react-router-dom'
import './NoticeMain.css'
import imgs from "../images/notice/banner_stamp_attendance.png"

const NoticeMain = () => {
    const [nodicedata] = useState([
        {
            id:1,
            text:'추천인 가입 어뷰징 관리 정책 안내',
            checked:true,
            date:'2020.08.04',
            new:true,
        },
        {
            id:2,
            text:'아하서비스 콘텐츠 관리정책',
            checked:true,
            date:'2020.03.17',
            new:true,
        },
        {
            id:3,
            text:'서비스 개인정보처리방침 개정공지',
            checked:false,
            date:'2020.09.11',
            new:true,
        },
        {
            id:4,
            text:'질문 답변 공유보상 신규개편 안내',
            checked:false,
            date:'2020.07.23',
            new:false,
        },
        {
            id:5,
            text:'아하토큰을 획득할 수 있는 핵꿀팁!',
            checked:false,
            date:'2020.05.29',
            new:false,
        },
        {
            id:6,
            text:'어뷰징 회원 제재 안내',
            checked:false,
            date:'2020.07.02',
            new:false,
        },
        {
            id:7,
            text:'서비스 이용약관 개정 공지',
            checked:false,
            date:'2020.07.02',
            new:false,
        },
        {
            id:8,
            text:'아하서비스 대규모 순차 업데이트 공지',
            checked:false,
            date:'2020.05.16',
            new:false,
        }
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
                    <p>공지사항</p>
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
                           <Link style={{textDecoration:'none'}} to="/Aha/notice"><p>{nodicedata.text}</p></Link> 
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