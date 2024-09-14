import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: absolute;
  width: 1200px;
  height: 86px;
  left: 297px;
  background: #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 521px;
  height: 48px;
`;

const Logo = styled.div`
  font-family: "Inria Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
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
  font-size: 30px;
  line-height: 36px;
  color: #919194;
  text-decoration: none;
  margin-left: 20px;

  &:hover {
    color: #0a27a6;
  }
`;

const Profile = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 1137px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

function Header({ profilePicture }) {
  return (
    <HeaderContainer>
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

export default Header;
