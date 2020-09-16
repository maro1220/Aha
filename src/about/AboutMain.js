import React from 'react';
import main1 from '../images/about/1.png'
import main2_1 from '../images/about/2-1.png'
import main2_2 from '../images/about/2-2.png'
import main2_3 from '../images/about/2-3.png'
import main2_4 from '../images/about/2-4.png'
import question from '../images/about/bg-question.png'
import answer from '../images/about/bg-answer.png'
import './AboutMain.css'

const AboutMain = () => {
    return (
        <div className="AboutMain">
            <div className="main1">
                <h2>전문 시식을 묻고 답해보세요.</h2>
                <p>아하(Aha)는 궁금한 점을 질문하면 검증된 전문가의 답변을 받을 수 있는 전문지식 Q&amp;A서비스입니다.<br/>
                    변호사, 세무사, 노무사, 심리상담사, 보험설계사 등 전문 답변자에게 언제든지 질문해보세요!<br/>
                    아하는 블록체인과 연계되어 Q&amp;A를 하는 것만으로 토큰보상을 받을 수 있습니다.</p>
                    <span>
                        white paper
                    </span>
            </div>
            <img src={main1}></img>
            <div className="main2">
                <h2>아하는 어떻게 사용하나요?</h2>
                <div>
                    <div className="main2_box" >
                        <p>질문</p>
                        <img src={main2_1}></img>
                        <span>사용자는 궁금한 점을<br/>아하에 질문합니다.</span>
                    </div>
                    <div className="main2_box" >
                        <p>전문가의 답변</p>
                        <img src={main2_2}></img>
                        <span>사전에 인증된 전문 분야의<br/>답변자들이 답변을 등록합니다.</span>
                    </div>
                    <div className="main2_box" >
                        <p>큐레이션</p>
                        <img src={main2_3}></img>
                        <span>채택, 공감, 비공감, 신고 등을<br/>통해 질문과 답변을<br/>검증(큐레이션)합니다.</span>
                    </div>
                    <div className="main2_box" >
                        <p>아하토큰</p>
                        <img src={main2_4}></img>
                        <span>아하  Q&amp;A 생태계에<br/>기여한 참여자는 자동으로<br/>아하토큰 보상을 받게 됩니다.</span>
                    </div>
                </div>
            </div>
            <div className="main3">
                <div style={{background:'url('+question+')'}}>
                    <p>전문가의 답변이 궁금하세요?<br/>마음껏 질문해보세요!</p>
                    <span>질문하러 가기</span>
                </div>
                <div style={{background:'url('+answer+')'}}>
                    <p>아하의 답변자로 활동하고<br/> 추가 수익을 얻고 싶다면?</p>
                    <span>답변자 신청하기</span>
                </div>
            </div>
        </div>
    );
};

export default AboutMain;