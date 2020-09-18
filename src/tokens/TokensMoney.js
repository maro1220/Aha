import React from "react";
import "./TokensMain.css";
import logo1 from "../images/token/upbit-logo.png";
import logo2 from "../images/token/daybit-logo.png";

import img22 from "../images/token/22.png";
import img23 from "../images/token/23.png";
import img24 from "../images/token/24.png";
import img25 from "../images/token/25.png";
import smile from "../images/token/ahabot_smile_cec6818.png";
import bottombg from "../images/token/bottom-bg.jpg";

const TokensMoney = () => {
  return (
    <div className="TokenLunivers">
      <div className="area1">
        <div>
          <p>
          현재 아하 토큰은 업비트, 데이빗 거래소에 상장되어 있습니다.<br/>
            아하 서비스 홈페이지에서 보관 중인 아하 토큰을 외부 거래소로 출금을 원하실 경우 아래의 내용을 참고 부탁드립니다.
          </p>
          <div>
            <h3>1.거래소 가입 및 인증 진행</h3>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <img src={logo1} alt="upbit"></img>
            <img src={logo2} alt="daybit"></img>
            </div>
            
            <p>
                거래를 희망하는 거래소에 가입 후,<br/>
                보안 인증을 진행해 주세요.<br/>
                거래소마다 가입 방법, 보안 인증 방법이<br/>
                상이하오니 사전에 참고 부탁드립니다.</p>
          </div>
          <div>
          <h3>2.거래소 입금주소 복사</h3>
            <p>
                아하 토큰 거래를 위해서는 거래소에<br/>
                아하 토큰 입금 전용 주소를 생성해야 합니다.<br/>
                거래소마다 방법이 상이하오니,<br/>
                아래 내용을 참고 부탁드립니다.<br/>
            </p>
            <div>
                <img src={logo1} alt="upbit"></img>
            </div>
            <p>
            로그인 - 입출금 - '아하 토큰' 검색 -<br/>
            입금 주소 생성 후 '복사'
            </p>
            <div>
                <img src={logo2} alt="daybit"></img>
            </div>
            <p>
            로그인 - 입출금 - '아하 토큰' 검색 -<br/>
            입금 주소 생성 후 '복사'
            </p>
          </div>
        
        </div>
        <div className="area2">
          <h2>2.아하 거래소 아하토큰 주소로 출금하기</h2>
          <img src={img22} alt="거래소 출금설명1"></img>
          <p>'로그인 - 계정설정 - 토큰관리' 의 '출금하기' 버튼을 눌러주세요.</p>
          <img src={img23} alt="거래소 출금설명2"></img>
          <p>루니버스 드랍스에서 복사한 주소를 ‘출금 주소 입력’ 란에 ‘붙여넣기’ 하고 ‘다음’ 버튼을 눌러주세요.</p>
          <img src={img24} alt="거래소 출금설명3"></img>
          <p>희망하는 ‘출금 수량을 입력’ 하고 ‘다음’ 버튼을 눌러주세요.</p>
          <img src={img25} alt="거래소 출금설명4"></img>
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

export default TokensMoney;
