import React, { useState } from "react";
import "./Navabar.scss";
import { GoThreeBars } from "react-icons/go";
import { IoCloseOutline, IoNotificationsOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { HiOutlineInbox } from "react-icons/hi";
import { FiHelpCircle } from "react-icons/fi";
import profilePic from "../assets/Ellipse 704.png";
import Logo from '../Logo/Logo';

function Navbar() {
  const [click, setClick] = useState(false);
  const[notificationCount, setNotificationCount] = useState(25);
  return (
    <>
      <div className="navbar">
        <div className={click ? "hidelogo" : " "}>
          <Logo />
        </div>


        {/* Navbar Menu */}
        <ul
          className={
            click ? "navbar-container navbar-mobile" : "navbar-container"
          }
        >
          <li>
            <a href="/">
              <BsSearch size={20} />
            </a>
            <div className="tagline">Search</div>
          </li>
          <li>
            <a href="/">
              <HiOutlineInbox size={25} />
            </a>
            <div className="tagline">Message</div>
          </li>
          <li>
            <div className="notification">
            <a href="/">
              <IoNotificationsOutline size={25} />
            </a>
            <div className="notificationCount">{notificationCount}</div>
            </div>
            <div className="tagline">Notification</div>
          </li>
          <li>
            <a href="/">
              <FiHelpCircle size={25} />
            </a>
            <div className="tagline">Help</div>
          </li>
          

          {/* Profile Picture */}
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
              <GoThreeBars size={25} />
            </div>
          )}
          {click && (
            <div className="close-icon" onClick={() => setClick(false)}>
              <IoCloseOutline size={25} />
            </div>
          )}
        </div>
      </div>
      <div className="hr"></div>
    </>
  );
}

export default Navbar;
