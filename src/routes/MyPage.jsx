import React from "react";
import Header from "../components/Header";
import TemplateCard from "../components/TemplateCard";
import styled from "styled-components";
import profileIcon from "../assets/icons/profileIcon.png";

const MyPageContainer = styled.div`
  font-family: "Arial", sans-serif;
  padding: 0;
  margin: 0;
`;

function MyPage({ profileIcon }) {
  return (
    <MyPageContainer>
      <Header profilePicture={profileIcon} />
    </MyPageContainer>
  );
}

export default MyPage;
