import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <header>
        <ul className='menu'>
            <li className='menu_item'><link to="/home">Home</link> </li>
            <li className='menu_item'><Link to="/about">About</Link></li>
            <li className='menu_item'><Link to="/search">States</Link></li>
        </ul>
      </header>
    </div>
  )
}

export default NavBar
