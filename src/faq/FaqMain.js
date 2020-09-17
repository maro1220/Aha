import React, { useState } from 'react';
import './FaqMain.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import {Link} from 'react-router-dom'
const FaqMain = () => {
    const[data,setData]=useState([
        {
            id:1,
            text1:'서비스와 관련된 문의사항은 어디에 문의해야 하나요?',
            text:'아하 서비스는 이메일 상담만을 지원하고 있습니다. hello@a-ha.io로 문의사항을 보내주시기 바랍니다. 접수된 메일은 순차적으로 답변을 드리고 있습니다.',
            checked:false,
            button:false
        },
        {
            id:2,
            text1:'질문은 아무나 할 수 있나요?',
            text:'아하 서비스에서는 누구나 다양한 분야에 질문을 할 수 있습니다. 단, 컨텐츠 관리 정책을 준수하지 않은 질문은 신고를 받을 수 있고, 신고가 승인되면 페널티를 받게 되니 컨텐츠 관리 정책을 숙지해주시기 바랍니다.',
            checked:false,
            button:true,
            buttontext:'아하 컨텐츠 관리 정책 보기'
        },
        {
            id:3,
            text1:'답변은 아무나 할 수 있나요?',
            text:'아하 서비스의 답변자는 각 분야의 현업 전문가 또는 실무자입니다. 답변자는 일반 사용자 보다 더 큰 보상을 받을 수 있습니다. 답변자가 되려면 "답변자 인증" 과정을 통해 해당 분야의 전문가임을 입증해야 합니다. (단, 생활상식 / 재테크 상식은 누구나 답변 가능)',
            checked:false,
            button:true,
            buttontext:'답변자 인증'
        },
        {
            id:4,
            text1:'아하토큰이 무엇인가요?',
            text:'아하토큰은 질문, 답변, 콘텐츠 공유 등 아하 서비스 활동에 대한 보상으로 지급되는 암호화폐입니다.',
            checked:false,
            button:false
        },
        {
            id:5,
            text1:'아하토큰은 어떤 경우 지급되나요?',
            text:'아하토큰 지급 기준은 아래의 링크를 통해 확인하시기 바랍니다.',
            checked:false,
            button:true,
            buttontext:'아하토큰 지급기준'
        },
        {
            id:6,
            text1:'로그인 이메일 주소를 잊어버렸습니다.',
            text:'hello@a-ha.io로 휴대폰 번호 및 닉네임을 알려주시면 계정 정보를 확인해 드리겠습니다.',
            checked:false,
            button:false
        },
        {
            id:7,
            text1:'전화번호가 변경되었습니다. 로그인 및 서비스 사용에는 문제가 없나요?',
            text:'로그인 및 서비스 이용에 아무런 문제가 없습니다. 다만 전화번호와 연동되어 있는 암호화폐 지갑을 사용하시는 경우, 계정의 전화번호를 변경하지 않으시면 토큰 출금시 잘못된 지갑으로 송금이 될 수 있으므로 반드시 로그인 후 계정 설정 페이지에서 전화번호를 변경하시기 바랍니다.만일, 소셜로그인이 되지 않으면 전화번호에 연동된 소셜 계정이 변경된 경우이므로 아래 FAQ를 참고하시기 바랍니다.',
            checked:false,
            button:false
        },
        {
            id:8,
            text1:'회원 탈퇴를 하고 싶습니다.',
            text:'PC 및 모바일 화면 최하단 또는 계정 설정 페이지의 "회원 탈퇴" 기능을 이용하시기 바랍니다.',
            checked:false,
            button:false
        }
    ])

    const datas =(id)=>{
        setData(data.map(data=>data.id===id ? {...data,checked:!data.checked}:{...data,checked:false})) 
    }
    

    return (
        <div className="faqMain">
            <h2>FAQ</h2>
       
                <div>
            
                    {data.map(data=>
                    <div>
                        <div onClick={()=>datas(data.id)}>
                            <p style={data.checked === true ? {color:'#6158f2'}:{color:'black'}} >{data.text1}</p>
                            {data.checked === false ? 
                            <ArrowDropDownIcon style={data.checked === true ? {color:'#6158f2',fontSize:'3rem'}:{color:'black',fontSize:'3rem'}} />
                            :<ArrowDropUpIcon style={data.checked === true ? {color:'#6158f2',fontSize:'3rem'}:{color:'black',fontSize:'3rem'}}/>}
                        </div>

             
                    { data.checked ===true && <span>{data.text}</span>}
                            { data.checked ===false || data.button ===true &&<Link to="/Aha/faq"><button>{data.buttontext}</button></Link>}
                    </div>
                    )
                   }
                </div>
         
        </div>
    );
};

export default FaqMain;