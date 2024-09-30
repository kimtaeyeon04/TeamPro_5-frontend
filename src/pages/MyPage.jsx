import React from "react";
import styled from "styled-components";
import DashBoard from "../components/MyPage/DashBoard";
import SelectBox from "../components/commmon/SelectBox";
import SearchBarMini from "../components/MyPage/SearchBarMini";
import TemplateCard from "../components/commmon/TemplateCard";
import StyledButton from "../components/commmon/StyledButton";
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
            <StyledButtonWrapper>
              <StyledButton
                text={"적용"}
                onClick={() => console.log("적용 버튼클릭")}
              />
            </StyledButtonWrapper>
          </SelectBoxWrapper>
          <SearchBarMini
            onChange={(e) => console.log(e.target.value)}
            onClick={() => console.log("검색 버튼 클릭")}
          />
        </MyTemplateMenuContainer>

        <Line></Line>

        <TemplateGridWrapper>
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
        </TemplateGridWrapper>

        <Line></Line>

        <ButtonWrapper>
          <StyledButton
            text={"공유"}
            onClick={() => console.log("공유 버튼 클릭")}
          />
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
  //position: relative;
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

const StyledButtonWrapper = styled.div`
  display: inline-block;
  width: 5vw;
`;

const TemplateGridWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-content: center center;
  gap: 3vw 1vw;
  margin-top: 2em;
  max-width: 80em;
`;

const Line = styled.hr`
  margin: 0.625em 0;
  border: 1px solid #d0d1d9;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 5vw;
`;
