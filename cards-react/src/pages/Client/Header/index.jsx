import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Header/index.css"
const Header = () => {
  return (
    <header>
        <nav>
            <h1>Logo</h1>
            
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/about"}>About</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    <li><NavLink to={"/detail"}>Detail</NavLink></li>
                    <li><NavLink to={"/detail"}>Detail</NavLink></li>
                </ul>
            
            
        </nav>
    </header>
  )
}

export default Header