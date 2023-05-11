import React, { useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import "./BasicInfo.scss";
import { VscEyeClosed } from "react-icons/vsc";
import { RiDeleteBinLine } from "react-icons/ri";
import mainImage from "../../assets/mainImage.png";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { VscFilePdf } from "react-icons/vsc";
import { HiDownload } from "react-icons/hi";
import { BsZoomIn, BsZoomOut, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";
import Sidetable from "./SIdeTable/Sidetable";

function BasicInfo() {
  const [pdfPage, setpdfPages] = useState(1);

  const totalPage = 15;
  return (
    <div className="infoContainer">
      <div className="leftContainer">
        <Sidetable />
      </div>

      {/* Right Container */}
      <div className="rightContainer">
        <div className="header">
          <div className="heading1">Company Profile</div>

          {/* Icon Block  */}
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


          {/* Three Dots Menu  */}
          <div className="dropdownMenu">
            <BsThreeDotsVertical />
          </div>
        </div>

        {/* Main Image Section */}
        <div className="mainImage">
          <img src={mainImage} alt="mainImage" />
          <div className="imageIcons">
            <div className="icon">
              <VscFilePdf size={20} />
            </div>
            <div>
              {pdfPage}/{totalPage}
            </div>
            <div className="icon">
              <HiDownload size={25} />
            </div>
            <div className="icon">
              <BsZoomIn size={20} />
            </div>
            <div className="icon">
              <BsZoomOut size={20} />
            </div>
            <div className="icon">
              <CiShare1 size={25} />
            </div>
          </div>


          {/* Center Container */}
          <div className="centerContainer">
            <div className="heading">wework</div>
            <div className="subHeading">For All the ways you work, we're here</div>
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
