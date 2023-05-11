import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Home.scss";
import heroImg from "../assets/hero-img.png";
import Tabs from "../companyInfo/Tabs";
import FilledLoader from "../Loader/Loader";
import BasicInfo from "../companyInfo/BasicInfoPage/BasicInfo";
import { BiPlus } from "react-icons/bi";
import salesforce from '../assets/salesforce.svg';
import wework from '../assets/wework 1.svg'

function Home() {
  const [filled, setFilled] = useState(3);
  return (
    <div className="mainContainer">
      <div className="introContainer">
        <div className="heading">WeWork + Salesforce</div>
        <Button className="btn-primary">Publish/Share</Button>
      </div>

      <div className="subContainer">
        <div className="imgContainer">
          <div className="main-img">
            <img src={heroImg} alt="hero-img1" />
          </div>
          <div className="content"></div>
          <div className="heading">
            <p>WorkSpace </p>
            <p>Proposal</p>
          </div>
        </div>

        <div className="DownLeftTab">
          <div className="logo">
            <img src={wework} alt="wework logo"/>
          </div>
          <div className="icon">
            <BiPlus />
          </div>
          <div className="logo">
            <img src={salesforce} alt="salesforce logo" />
          </div>
        </div>
      </div>

      <div className="project-scope-container">
        <div className="heading"> Project Scope Recap</div>
        <div className="mutual-action-indicator">
          <div className="heading">
            <div className="subHeading">Mutual Action Plan</div>
            <div className="percentFilled">{filled}%</div>
          </div>
          <div className="indicator">
            <FilledLoader filledPercentage={filled} />
          </div>
        </div>
      </div>
      <Tabs />
      <BasicInfo />
    </div>
  );
}

export default Home;
