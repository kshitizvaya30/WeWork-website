import React, { useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import "./BasicInfo.scss";
import { VscEyeClosed } from "react-icons/vsc";
import { RiDeleteBinLine } from "react-icons/ri";
import mainImage from "../../assets/mainImage.png";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { VscFilePdf } from "react-icons/vsc";
import { HiDownload } from "react-icons/hi";
import { BsZoomIn, BsZoomOut } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";

function BasicInfo() {
  const [pdfPage, setpdfPages] = useState(1);

  const totalPage = 15;
  return (
    <div className="infoContainer">
      <div className="leftContainer">
        <ul>
          <div className="heading">
            <a href="/">Overview</a>
          </div>
          <li>
            <a href="/">Welcome</a>
          </li>
          <li>
            <a href="/">Product Capabilities</a>
          </li>
          <li>
            <a href="/">Customer Success Stories</a>
          </li>
          <li>
            <a href="/">File Sharing</a>
          </li>
          <li>
            <a href="/">Our Deck</a>
          </li>
        </ul>
      </div>
      <div className="rightContainer">
        <div className="header">
          <div className="heading1">Company Profile</div>
          <div className="iconBlock">
            <div className="icon">
              <BsArrowDown size={20} />
            </div>
            <div className="icon">
              <VscEyeClosed size={20} />
            </div>
            <div className="icon">
              <RiDeleteBinLine size={20} />
            </div>
          </div>
        </div>
        <div className="mainImage">
          <img src={mainImage} alt="mainImage" />
          <div className="imageIcons">
            <div className="icon">
              <VscFilePdf size={20}/>
              {pdfPage} /{totalPage}
            </div>
            <div className="icon">
              <HiDownload size={25}/>
            </div>
            <div className="icon">
              <BsZoomIn size={20}/>
            </div>
            <div className="icon">
              <BsZoomOut size={20}/>
            </div>
            <div className="icon">
              <CiShare1 size={25}/>
            </div>
          </div>
          <div className="centerContainer">
            <p className="heading">wework</p>
            <p className="subHeading">For All the ways you work, we're here</p>
          </div>
        </div>
        <div className="lastIcons">
          <div className="messageIcon">
            {/* <p>10</p> */}
            <BiMessageRoundedDetail size={20} />
          </div>
          <div className="shareIcon">
            <AiOutlineShareAlt size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
