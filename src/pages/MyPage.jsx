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
  top: 80px;
`;

const MyTemplateTitle = styled.div`
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

const MyTemplateMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Line = styled.hr`
  margin: 10px 0px;
  border: 1px solid #d0d1d9;
`;
