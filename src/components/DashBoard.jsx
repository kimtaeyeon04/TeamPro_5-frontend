import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import defaultProfilePicture from "../assets/icons/Header/profileIcon.png"; // 기본 이미지

const DashBoard = ({ profilePicture, name, nickname }) => {
  return (
    <DashboardContainer className="DashBoardContainer">
      <DashboardTitle>대시보드</DashboardTitle>
      <DashboardCard className="DashBoardCard">
        <Profile className="Profile">
          <ProfilePic
            src={profilePicture}
            alt="profilePic"
            className="ProfilePic"
          />
        </Profile>

        <Info className="Info">
          <Name className="Name">이름</Name>
          <UserName className="UserName">{name}</UserName>
          <Nickname className="Nickname">닉네임</Nickname>
          <UserNickname className="UserNickname">{nickname}</UserNickname>
        </Info>
        <Button className="Button">
          <ProfileButton>프로필 편집</ProfileButton>
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
  height: 42px;
  top: 182px;
  font-family: "Inria Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.4px;
  color: #000000;
`;

const DashboardCard = styled.div`
  position: relative;
  height: 200px;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 20px;
  margin-top: 10px;
`;

const Profile = styled.div`
  display: inline-block;
  width: 32%;
  border-radius: 100px;
`;

const ProfilePic = styled.img`
  height: 125px;
  background: #ffffff;
  border-radius: 50%;
`;

const Info = styled.div`
  position: relative;
  display: inline-block;
  width: 33%;
  bottom: 20px;
  margin-left: 10px;
`;

const Name = styled.p`
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 700;
  margin: 0;
  color: #919194;
`;

const UserName = styled.div`
  height: 25px;
  font-family: "Inria Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 26px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Nickname = styled.p`
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 700;
  margin: 0;
  color: #919194;
`;

const UserNickname = styled.div`
  height: 25px;
  font-family: "Inria Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  position: relative;
  width: 35%;
  float: right;
  top: 32px;
`;

const ProfileButton = styled.button`
  position: relative;
  width: 80%;
  height: 38.04px;
  float: right;
  background: #0a27a6;
  border: 1px solid #d0d1d9;
  border-radius: 10px;
  color: #ffffff;
  font-family: "Inria Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
