import React, { useState } from 'react';
import './TokensMain.css'
import mainimg from '../images/token/title.png'
import {Link} from 'react-router-dom'

const TokensMain = () => {
    const [active,setActive] = useState([
        {
            id:1,
            data:true,
            text:'루니버스 드랍스로 출금',
            link:'/Aha/tokens'
        },
        {   
            id:2,
            data:false,
            text:'거래소로 출금',
            link:'/Aha/tokens/money'
        }
    ])

    const onClick = (id) =>{
        setActive(active.map(active=> active.id === id ?{...active,data:true}:{...active,data:false}))
    }
    return (
        <div className="TokensMain">
            <div className="imgback">
                <img src={mainimg} alt="아하토큰 배너 이미지"></img>
            </div>
            <div className="TokenList">
                <ul>
                    {active.map(active=>
                            <li onClick={()=>onClick(active.id)} key={active.id}>
                                <Link to={active.link} style={active.data ===true ? {color:'black',borderBottom:'3px solid #1fc7c1'}:{color:'gray'}}>
                                    {active.text}
                                    </Link>
                                    </li>
                        )}
                </ul>
            </div>
        </div>
    );
};

export default TokensMain;