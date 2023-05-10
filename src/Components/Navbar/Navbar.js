import React, { useState } from "react";
import "./Navabar.scss";
import Logo from "../assets/logoipsum-224.svg";
import { GoThreeBars } from "react-icons/go";
import { IoCloseOutline, IoNotificationsOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { HiOutlineInbox } from "react-icons/hi";
import { FiHelpCircle } from "react-icons/fi";
import profilePic from "../assets/profilePic.jpg";

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <>
      <nav className="navbar">
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </div>

        

            <ul className={click ? "navbar-container navbar-mobile" : "navbar-container"}>
              <li>
                <a href="/">
                  <BsSearch size={25} />
                </a>
                <div className="tagline">Search</div>
              </li>
              <li>
                <a href="/">
                  <HiOutlineInbox size={30} />
                </a>
                <div className="tagline">Message</div>
              </li>
              <li>
                <a href="/">
                  <IoNotificationsOutline size={30} />
                </a>
                <div className="tagline">Notification</div>
              </li>
              <li>
                <a href="/">
                  <FiHelpCircle size={30} />
                </a>
                <div className="tagline">Help</div>
              </li>

              <li className="profilePic">
                <a href="/">
                  <div className="profile-img">
                    <img src={profilePic} alt="" />
                  </div>
                </a>
                <div className="tagline">
                  <div className="name"> Jane Smith</div>
                  <div className="post">Sales Executive</div>
                </div>
              </li>
            </ul>
      
          <div className="navbar-container-mobile">
            {!click && (
              <div className="menu-icon" onClick={() => setClick(true)}>
                <GoThreeBars size={30} />
              </div>
            )}
            {click && (
              <div className="close-icon" onClick={() => setClick(false)}>
                <IoCloseOutline size={30} />
              </div>
            )}
          </div>
      </nav>
      <div className="hr"></div>
    </>
  );
}

export default Navbar;
