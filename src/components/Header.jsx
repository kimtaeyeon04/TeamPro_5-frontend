import React from "react";
import styles from "./Header.module.css";
import profileIcon from "../assets/icons/profileIcon.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.menu_box}>
        <div className={styles.logo}>FolioFrame</div>
        <nav className={styles.nav}>
          <a href="#templates">템플릿</a>
          <a href="#hackathon">해커톤</a>
        </nav>
      </div>
      <div className={styles.profile}>
        <img src={profileIcon} alt="profile" className={styles.profile_pic} />
      </div>
    </header>
  );
}

export default Header;
