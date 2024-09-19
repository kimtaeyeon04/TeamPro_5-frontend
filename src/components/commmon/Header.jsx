import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import defaultProfilePicture from "../../assets/icons/Header/profileIcon.png"; // 기본 이미지
function Header({ profilePicture }) {
  return (
    <HeaderContainer className="HeaderContainer">
      {/* 로고와 메뉴를 포함하는 메뉴박스 */}
      <MenuBox>
        {/* 프로젝트 로고 들어가야함 */}
        <Logo>FolioFrame</Logo>
        {/* 네비게이션바에 있는 메뉴들 */}
        <Nav>
          <NavLink href="#templates">템플릿</NavLink>
          <NavLink href="#hackathon">해커톤</NavLink>
        </Nav>
      </MenuBox>

      {/* 프로필 사진, props로 받아서 넣어야 함 */}
      <Profile>
        <ProfilePic src={profilePicture} alt="profile" />
      </Profile>
    </HeaderContainer>
  );
}

Header.propTypes = {
  profilePicture: PropTypes.string.isRequired,
};
// 기본 프로필 사진
Header.defaultProps = {
  profilePicture: defaultProfilePicture,
};

export default Header;

const HeaderContainer = styled.header`
  width: 85%; //수정 중..
  height: 5em;
  background: #ffffff;
  display: flex;
  align-items: center;
  margin: 0 auto; /* 가운데 정렬 */
  position: relative;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.1);
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
`;

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 70%;
  height: 5em;
`;

const Logo = styled.div`
  font-family: "Inria Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.2em;
  line-height: 43px;
  color: #0a27a6;
  position: absolute;
  left: 0;
  top: calc(50% - 48px / 2);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 200px;
`;

const NavLink = styled.a`
  font-family: "Inria Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 36px;
  color: #919194;
  text-decoration: none;
  margin-left: 20px;

  &:hover {
    color: #0a27a6;
  }
`;

const Profile = styled.div`
  width: 2.6%;
  border-radius: 50%;
  display: flex;
  align-items: center;
`;

const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
