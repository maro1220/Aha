import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import './MainMenu.css'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import WorkIcon from '@material-ui/icons/Work';
import GradientIcon from '@material-ui/icons/Gradient';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import AppsIcon from '@material-ui/icons/Apps';
import DvrIcon from '@material-ui/icons/Dvr';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';



const MainMenu = () => {
  return (
    <div className="Menu">
        <div>
            <span></span>
            <p>신뢰할 수 있는 다양한 지식을 찾아보세요</p>
        </div>
      <Grid style={{display:'flex',maxWidth:'1020px',width:'90vw',justifyContent:'center',margin:'0 auto',flexWrap:'wrap'}}>
        <Paper className="item" ><LocalHospitalIcon className="itemicon" />의료</Paper>
        <Paper className="item" ><VpnKeyIcon className="itemicon" />법률</Paper>
        <Paper className="item" ><GradientIcon className="itemicon" />세무</Paper>
        <Paper className="item" ><WorkIcon className="itemicon" />인사</Paper>
        <Paper className="item" ><SignalCellularAltIcon className="itemicon" />재무설계</Paper>
        <Paper className="item" ><AddLocationIcon className="itemicon" />보험</Paper>
        <Paper className="item" ><AirplanemodeActiveIcon className="itemicon" />무역</Paper>
        <Paper className="item" ><AppsIcon className="itemicon" />블록체인</Paper>
        <Paper className="item" ><DvrIcon className="itemicon" />프로그래밍</Paper>
        <Paper className="item" ><FavoriteIcon className="itemicon" />심리 상담</Paper>
        <Paper className="item" ><WbIncandescentIcon className="itemicon" />생활상식</Paper>
        <Paper className="item" ><MonetizationOnIcon className="itemicon" />재태크 상식</Paper>
      </Grid>

    </div>
  );
};

export default MainMenu;
