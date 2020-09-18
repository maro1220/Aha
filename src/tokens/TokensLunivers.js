import React from "react";
import "./TokensMain.css";
import img1 from "../images/token/1.png";
import img2 from "../images/token/2.png";
import img3 from "../images/token/3.png";
import img4 from "../images/token/4.png";
import img5 from "../images/token/5.png";
import img22 from "../images/token/22.png";
import img23 from "../images/token/23.png";
import img24 from "../images/token/24.png";
import img25 from "../images/token/25.png";
import smile from "../images/token/ahabot_smile_cec6818.png";
import bottombg from "../images/token/bottom-bg.jpg";

const TokensLunivers = () => {
  return (
    <div className="TokenLunivers">
      <div className="area1">
        <div>
          <p>
            아하 서비스의 공식 외부 지갑은 <span>루니버스 드랍스</span> 입니다.<br/> 아하 서비스
            홈페이지에서 보관 중인 아하 토큰을 <span>루니버스 드랍스로 출금을 원하실 경우</span>
            아래의 내용을 참고 부탁드립니다.
          </p>
          <h2>1.드랍스 주소 생성 및 복사</h2>
          <div>
            <h3>드랍스 계정생성</h3>
            <p>Luniverse DROPS 홈페이지에 접속합니다.</p>
            <a href="https://drops.luniverse.io/drops">
              Luniverse DROPS 바로가기
            </a>
          </div>
          <div>
            <img src={img1} alt="드랍스 계정생성 가이드1 "></img>
            <p>
              <span>로그인</span>이라는 글씨를 클릭하시면 다음과 같은 화면이
              나옵니다.
            </p>
            <img src={img2} alt="드랍스 계정생성 가이드2 "></img>
            <p>
              이미 드랍스 계정이 있으신 분은 <span>로그인</span>을
              해주시고,<br/>가입한 적이 없다면 <span>회원가입</span>을 진행하시기
              바랍니다.
            </p>
            <p>
              회원가입은 <span>간편 로그인 (Upbit, 카카오, 구글) 버튼</span>을
              누르시면 쉽게 진행하실 수 있습니다.
              <br />
              간편 로그인을 원치 않으시면 하단의 <span>회원가입</span>을
              눌러주세요.
            </p>
          </div>
          <div>
            <h3>DROPS 지갑 주소 복사</h3>
            <img src={img3} alt="드랍스 계정생성 가이드3 "></img>
            <p>
              로그인이 완료되면 아래와 같이<span>회원님의 닉네임이</span>
              표시됩니다.
              <br />
              좌측 상단의 <span>햄버거 메뉴</span>를 길게 눌러 계정 정보에
              접근합니다.
            </p>
            <img src={img4} alt="드랍스 계정생성 가이드4 "></img>
            <p>
              프로필 옆에 있는 <span>지갑주소</span> 버튼을 클릭하여 지갑주소를
              확인 합니다.
            </p>
            <img src={img5} alt="드랍스 계정생성 가이드5 "></img>
            <p>
              <span>주소복사 버튼</span>을 클릭하면 지갑 주소가 복사됩니다.
              <br />
              화면 하단에 <span>지갑주소가 복사</span>되었습니다는 문구가
              표시됩니다.
            </p>
          </div>
        </div>
        <div className="area2">
          <h2>2.아하 서비스에서 출금하기</h2>
          <img src={img22} alt="아하 서비스에서 출금하기 가이드"></img>
          <p>'로그인 - 계정설정 - 토큰관리' 의 '출금하기' 버튼을 눌러주세요.</p>
          <img src={img23} alt="아하 서비스에서 출금하기 가이드2"></img>
          <p>루니버스 드랍스에서 복사한 주소를 ‘출금 주소 입력’ 란에 ‘붙여넣기’ 하고 ‘다음’ 버튼을 눌러주세요.</p>
          <img src={img24} alt="아하 서비스에서 출금하기 가이드3"></img>
          <p>희망하는 ‘출금 수량을 입력’ 하고 ‘다음’ 버튼을 눌러주세요.</p>
          <img src={img25} alt="아하 서비스에서 출금하기 가이드4"></img>
          <p>‘내 휴대폰으로 인증 번호 받기’ 버튼을 클릭 후<br/>
            휴대폰으로 전송된 인증번호를 입력해주시고<br/>
            ‘출금 요청’ 버튼을 누르면 출금요청이 완료됩니다.
            </p>
          <span>
            *주의 : 아하 토큰은 루니버스 기반 토큰입니다. 이더리움 등 타 플랫폼
            기반 주소로 보내시는 경우,
            <br />
            유효하지 않은 주소로 출금하는 경우에는 모든 자산이 유실되오니 각별히
            주의 부탁드립니다.
            <br />
            위와 같은 상황이 발생할 경우, 당사에서는 일체의 책임을 지지
            않습니다.
          </span>
        </div>
      </div>
      <div style={{ background: "url(" + bottombg + ")" }} className="area3">
       
        <h2 > 
         <span style={{background:"url(" + smile + ")",width:'40px',height:'43px',display:'inline-block',verticalAlign:'bottom' }}></span> 문의사항이 있으세요? <br/>hello@a-ha.io로 이메일 주시면 빠르게
          응대하겠습니다.
        </h2>
      </div>
    </div>
  );
};

export default TokensLunivers;
