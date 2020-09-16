import React from 'react';
import ahalogo from '../images/main/aha_logo_449d047.png';
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import {BrowserRouter as Router,Link,Route, useHistory} from 'react-router-dom'

const Footer = () => {

    return (
   
        <div className="footer">
            <div>
                <div>
                    <img src={ahalogo}></img>
                    <div className="ahainfo">
                        <ul>
                            <li><Link to="/Aha/about" style={{color:' rgb(170,170,170)',textDecoration:'none'}}>아하 소개</Link> </li>
                            <li><Link  to="/Aha" style={{color:' rgb(170,170,170)',textDecoration:'none'}}>FAQ</Link> </li>
                            <li><Link to="/Aha" style={{color:' rgb(170,170,170)',textDecoration:'none'}}>이용약관</Link> </li>
                            <li><Link to="/Aha" style={{color:' rgb(170,170,170)',textDecoration:'none'}}>개인정보처리방침</Link> </li>
                            <li><Link to="/Aha" style={{color:' rgb(170,170,170)',textDecoration:'none'}}>광고문의</Link> </li>

                        </ul>
                        <small>
                            이메일: hello@a-ha.io 대표자명: 서한울 상호명: 더코퍼레이션 주식회사 사업자등록번호: 144-81-25784
                        </small>
                        <small>&copy;  2020 Aha. All rights reserved.</small>
                    </div>
                    <div className="footericon">
                      <Link to="/Aha">  <FacebookIcon/></Link>
                      <Link  to="/Aha">  <TwitterIcon/></Link>
                    </div>
                </div>
            </div>  
        </div>
      
      
    );
};

export default Footer;