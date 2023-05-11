import React from 'react'
import './Sidetable.scss'

function Sidetable() {
  return (
    <div className='SideTableContainer'>
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
  )
}

export default Sidetable