import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss"

const Header = () => {
  return (
    
    <div className="container">
      
        <h1 className="logo">Logo</h1>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/products"}>Products</NavLink>
            </li>
          </ul>
        </nav>
      
    </div>
 
  )
}

export default Header