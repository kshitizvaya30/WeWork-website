import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import './Logo.scss';

function Logo() {
  return (
    <div className='logoContainer'>
          <div className="outerCircle">
            <a href="/">
              <div className="internalCircle"></div>
            </a>
          </div>
          <MdKeyboardArrowRight size={30} color="#657372" />
    </div>
  )
}

export default Logo