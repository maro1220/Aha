import React, { useState } from 'react';
import {Link,NavLink} from 'react-router-dom'
import './NoticeMain.css'
import imgs from "../images/notice/banner_stamp_attendance.png"

const NoticeMain = () => {
    const [nodicedata] = useState([
        {
            id:1,
            text:'지식서비스 아하(Aha), DSC 인베스트먼트 등으로부터 12억원 규모의 투자 유치',
            checked:false,
            date:'2020.03.09',
            new:false,
        },
        {
            id:2,
            text:'실리콘벨리 VC"프라이머사제파트너스"로부터 5억 투자 유치',
            checked:false,
            date:'2019.06.18',
            new:false,
        },
        {
            id:3,
            text:'휴넷 탤런트뱅크, 지식커머스플랫폼 "아하"와 전략적 파트너십 체결',
            checked:false,
            date:'2019.06.18',
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
                    <p>아하 소식</p>
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