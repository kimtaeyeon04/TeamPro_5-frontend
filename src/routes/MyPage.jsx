import React from "react";
import Header from "../components/Header";
import TemplateCard from "../components/TemplateCard";
import styles from "./MyPage.module.css";
import profileIcon from "../assets/icons/profileIcon.png";

function MyPage() {
  return (
    <div className={styles.MyPage}>
      <Header profilePicture={profileIcon} />
    </div>
  );
}

export default MyPage;
