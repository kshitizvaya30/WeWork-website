import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Home.scss";
import heroImg from "../assets/hero-img.png";
import Tabs from "../companyInfo/Tabs";
import FilledLoader from "../Loader/Loader";
import BasicInfo from "../companyInfo/BasicInfoPage/BasicInfo";
import { BiPlus } from "react-icons/bi";

function Home() {
  const [filled, setFilled] = useState(3);
  return (
    <div className="main-container">
      <div className="intro-container">
        <p>WeWork + Salesforce</p>
        <Button className="btn-primary">Publish/Share</Button>
      </div>

      <div className="imgContainer">
        <div className="main-img">
          <img src={heroImg} alt="hero-img1" />
        </div>
        <div className="content"></div>
        <div className="heading">
          <p>WorkSpace </p>
          <p>Proposal</p>
        </div>
        <div className="DownLeftTab">
          <div className="logo"></div>
          <div className="icon"><BiPlus /> </div>
          <div className="logo"></div>
        </div>
      </div>

      <div className="project-scope-container">
        <p>Project Scope Recap</p>
        <div className="mutual-action-indicator">
          <div className="heading">
            <p>Mutual Action Plan</p>
            <p>{filled}%</p>
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
