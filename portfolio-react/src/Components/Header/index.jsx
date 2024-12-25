import React from "react";
import styles from './Header.module.scss';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>My Portfolio</div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button className={styles.connectBtn}>Connect With Me</button>
    </header>
  )
}

export default Header