import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

function Header({ profilePicture }) {
  return (
    <header className={styles.header}>
      {/* 로고와 메뉴를 포함하는 메뉴박스 */}
      <div className={styles.menu_box}>
        {/* 프로젝트 로고 들어가야함 */}
        <div className={styles.logo}>FolioFrame</div>
        {/* 네비게이션바에 있는 메뉴들 */}
        <nav className={styles.nav}>
          {/* 누르면 페이지 이동할 수 있도록 <a></a> 사용 */}
          <a href="#templates">템플릿</a>
          <a href="#hackathon">해커톤</a>
        </nav>
      </div>

      {/* 프로필 사진, props로 받아서 넣어야 함 */}
      <div className={styles.profile}>
        <img
          src={profilePicture}
          alt="profile"
          className={styles.profile_pic}
        />
      </div>
    </header>
  );
}

// Header의 프롭타입
Header.propTypes = {
  profilePicture: PropTypes.string.isRequired,
};

export default Header;
