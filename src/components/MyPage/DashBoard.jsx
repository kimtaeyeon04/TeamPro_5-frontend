import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Navigate, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/Logo.png";
import defaultProfilePicture from "../../assets/icons/profileIcon.svg"; // 기본 이미지

const DashBoard = ({ profilePicture, name, nickname }) => {
  const navigate = useNavigate();

  return (
    <DashboardContainer className="DashBoardContainer">
      <DashboardTitle>대시보드</DashboardTitle>
      <DashboardCard className="DashBoardCard">
        <Profile className="Profile">
          <LogoImg src={Logo} alt="logoImg" className="LogoImg" />
        </Profile>

        <Info className="Info">
          <Name className="Name">이름</Name>
          <UserName className="UserName">{name}</UserName>
          <Nickname className="Nickname">닉네임</Nickname>
          <UserNickname className="UserNickname">{nickname}</UserNickname>
        </Info>
        <Button className="Button">
          <ProfileButton onClick={() => navigate("../ProfileEditPage")}>
            프로필 편집
          </ProfileButton>
        </Button>
      </DashboardCard>
    </DashboardContainer>
  );
};

export default DashBoard;

DashBoard.propTypes = {
  profilePicture: PropTypes.string.isRequired,
};
// 기본 프로필 사진
DashBoard.defaultProps = {
  profilePicture: defaultProfilePicture,
};

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45%;
`;

const DashboardTitle = styled.div`
  width: 45%;
  height: 2.625em;
  top: 11.375em;
  font-family: "Inria Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.875em;
  line-height: 2.25em;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.025em;
  color: #000000;
`;

const DashboardCard = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 12.5em;
  border: 0.0625em solid #d9d9d9;
  box-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);
  border-radius: 0.625em;
  padding: 1.5em;
  margin-top: 0.625em;
`;

const Profile = styled.div`
  width: 100%;
  border-radius: 6.25em;
`;

const LogoImg = styled.img`
  width: 10vw;
  height: 19vh;
  background: #ffffff;
  border-radius: 50%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.625em;
`;

const Name = styled.div`
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3vw;
  margin: 0;
  color: #919194;
`;

const UserName = styled.div`
  height: 1.5625em;
  font-family: "Inria Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2vw;
  line-height: 1.625em;
  //display: flex;
  //align-items: center;
  margin-bottom: 0.625em;
`;

const Nickname = styled.div`
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3vw;
  margin: 0;
  color: #919194;
`;

const UserNickname = styled.div`
  height: 1.5625em;
  font-family: "Inria Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.3vw;
  line-height: 1.5em;
  //display: flex;
  //align-items: center;
`;

const Button = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const ProfileButton = styled.button`
  position: relative;
  width: 80%;
  height: 2.3775em;
  background: #0a27a6;
  border: 0.0625em solid #d0d1d9;
  border-radius: 0.625em;
  color: #ffffff;
  font-family: "Inria Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1vw;
  line-height: 1.125em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
