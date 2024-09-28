import React from "react";
import styled from "styled-components";
import DashBoard from "../components/MyPage/DashBoard";
import SelectBox from "../components/commmon/SelectBox";
import SearchBarMini from "../components/MyPage/SearchBarMini";
import TemplateCard from "../components/commmon/TemplateCard";
import { dummydata } from "../components/commmon/dummydata/dummydata"; // dummydata 파일을 import합니다.

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
          <SelectBoxWrapper>
            <SelectBox />
            <ApplyButton onClick={() => console.log("적용 버튼 클릭")}>
              적용
            </ApplyButton>
          </SelectBoxWrapper>
          <SearchBarMini />
        </MyTemplateMenuContainer>
        <Line></Line>
        <TemplateGrid>
          {dummydata.map((data, index) => (
            <TemplateCard
              key={index}
              templateName={data.postTitle}
              description={data.postContent}
              templateThumnail={data.postBackgroundImg}
            />
          ))}
        </TemplateGrid>
        <Line></Line>
        <ButtonWrapper>
          <ShareButton>공유</ShareButton>
        </ButtonWrapper>
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
  margin-left: -1em;
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

const SelectBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ApplyButton = styled.button`
  margin-top: 0.625em;
  padding: 0.5em 1.5em;
  width: 5vw;
  background-color: #0a27a6;
  color: white;
  border: none;
  border-radius: 0.5em;
  font-size: 1vw;
  cursor: pointer;

  &:hover {
    background-color: #092091;
  }
`;

const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  margin-top: 2em;
  margin-bottom: 2em;
  width: 100%;
  max-width: 80em;
`;

const Line = styled.hr`
  margin: 0.625em 0;
  border: 1px solid #d0d1d9;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ShareButton = styled.button`
  margin-top: 0.625em;
  padding: 0.5em 1.5em;
  width: 5vw;

  background-color: #0a27a6;
  color: white;
  border: none;
  border-radius: 0.5em;
  font-size: 1vw;

  cursor: pointer;

  &:hover {
    background-color: #092091;
  }
`;
