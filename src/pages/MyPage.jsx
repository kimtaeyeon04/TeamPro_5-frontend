import React from "react";
import styled from "styled-components";
import DashBoard from "../components/MyPage/DashBoard";
import SelectBox from "../components/commmon/SelectBox";
import SearchBarMini from "../components/MyPage/SearchBarMini";

function MyPage({ profilePicture, name, nickname }) {
  return (
    <MyPageContainer className="MyPageContainer">
      <DashBoardContainer>
        <DashBoard
          profilePicture={profilePicture}
          name={name}
          nickname={nickname}
        />
      </DashBoardContainer>

      <MyTemplateContainer className="MyTempalteContainer">
        <MyTemplateTitle className="MyTemplateTitle">내 템플릿</MyTemplateTitle>
        <MyTemplateMenuContainer>
          <SelectBox />
          <SearchBarMini />
        </MyTemplateMenuContainer>
        <Line></Line>
      </MyTemplateContainer>
    </MyPageContainer>
  );
}

export default MyPage;

const MyPageContainer = styled.div`
  width: 85%; //수정중...
  margin: 0 auto;
`;

const DashBoardContainer = styled.div`
  margin-left : -1em; 
`;

const MyTemplateContainer = styled.div`
  position: relative;
  top: 5em;
`;

const MyTemplateTitle = styled.div`
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

const MyTemplateMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Line = styled.hr`
  margin: 0.625em 0; 
  border: 1px solid #d0d1d9;
`;
