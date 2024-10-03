import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import defaultProfilePicture from "../../assets/icons/Header/profileIcon.png"; // 기본 이미지
import StyledButton from "./StyledButton";
import { Navigate, useNavigate } from "react-router-dom";
import HackathonPage from "../../pages/HackathonPage";

function Header({}) {
  const navigate = useNavigate();

  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );

  // useEffect로 컴포넌트가 처음 렌더링될 때 accessToken 업데이트
  useEffect(() => {
    const handleStorageChange = () => {
      setAccessToken(localStorage.getItem("accessToken"));
    };

    window.addEventListener("storage", handleStorageChange);

    // 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("Id");
    setAccessToken(null); // 로그아웃 시 상태 초기화
    navigate("./");
  };

  // const onProfileClick = () => {
  //   navigate("./MyPage");
  // };

  return (
    <HeaderContainer className="HeaderContainer">
      {/* 로고와 메뉴를 포함하는 메뉴박스 */}
      <MenuBox>
        {/* 프로젝트 로고 들어가야함 */}
        <Logo onClick={() => navigate("./")}>FolioFrame</Logo>
        {/* 네비게이션바에 있는 메뉴들 */}
        <TextWrapper>
          <Text onClick={() => navigate("../TemplatePage")}>템플릿</Text>
          <Text onClick={() => navigate("../HackathonPage")}>해커톤</Text>
        </TextWrapper>

        {/* <Nav>
          <NavLink href="#templates">템플릿</NavLink>
          <NavLink href="#hackathon">해커톤</NavLink>
        </Nav> */}
      </MenuBox>

      {/* 로그인 여부에 따라 프로필 이미지 또는 로그인/로그아웃 버튼 렌더링 */}
      <Profile>
        {accessToken ? (
          <>
          <ProfileWrapper>
            <ProfilePic
                onClick={() => navigate("../MyPage")}
                src={defaultProfilePicture}
                alt="profile"
              />
              <LoginButton onClick={handleLogout}>로그아웃</LoginButton>
          </ProfileWrapper>
           
          </>
        ) : (
          <StyledButton
            text="로그인"
            onClick={() => navigate("../LoginPage")}
          />
        )}
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

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em; 
  margin-left: -5em; 
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
  cursor: pointer;
`;

const TextWrapper = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 200px;
`;

const Text = styled.a`
  font-family: "Inria Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 36px;
  color: #919194;
  text-decoration: none;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    color: #0a27a6;
  }
`;

const Profile = styled.div`
  width: 6vw;
  border-radius: 50%;
  display: flex;
  align-items: center;

`;

const ProfilePic = styled.img`
  width: 25%;
  height: 25%;
  border-radius: 50%;
  cursor: pointer;
`;

const LoginButton = styled.button`
  // padding: 0.625em 0em;
  // width: 80%;
  height : 2em;
  width : 10em;
  background-color: #0a27a6;
  color: white;
  border: none;
  border-radius: 0.75em;
  font-size: 1vw;
  cursor: pointer;
  text-align: center;
  float: left;

  &:hover {
    background-color: #092091;
  }
`;
