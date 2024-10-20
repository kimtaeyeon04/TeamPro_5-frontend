import React from "react";
import styled from "styled-components";
import DashBoard from "../components/MyPage/DashBoard";
import SelectBox from "../components/commmon/SelectBox";
import SearchBarMini from "../components/MyPage/SearchBarMini";
import TemplateCard from "../components/commmon/TemplateCard";
import StyledButton from "../components/commmon/StyledButton";
import { dummydata } from "../components/commmon/dummydata/dummydata"; // dummydata 파일을 import합니다.
import { Navigate, useNavigate } from "react-router-dom";

function MyPage({ profilePicture, name, nickname }) {
  const navigate = useNavigate();

  return (
    <MyPageContainer className="MyPageContainer">
      <MyContainer>
        <MyTitle>내가 만든 프로젝트</MyTitle>
        <MyProtFolioMenuBarWrapper>
          <SelectBox />
          <SearchBarMini
            onChange={(e) => console.log(e.target.value)}
            onClick={() => onSearchClick}
          />
        </MyProtFolioMenuBarWrapper>

        <Line></Line>

        <TemplateGridWrapper>
          <TemplateGrid>{/* 기능구현으로부터 함수 받아서 구현 */}</TemplateGrid>
        </TemplateGridWrapper>
      </MyContainer>

      <Line></Line>
      <StyledButtonWrapper>
        <StyledButton
          text={"추가"}
          onClick={() => console.log("추가 버튼 클릭")} //navigate 넣으면 된다요
        />
      </StyledButtonWrapper>

      <MyContainer>
        <MyTitle>내가 만든 포트폴리오</MyTitle>
        <MyProtFolioMenuBarWrapper>
          <SelectBox />
          <SearchBarMini
            onChange={(e) => console.log(e.target.value)}
            onClick={() => onSearchClick}
          />
        </MyProtFolioMenuBarWrapper>

        <Line></Line>

        <TemplateGridWrapper>
          <TemplateGrid>{/* 기능구현으로부터 함수 받아서 구현 */}</TemplateGrid>
        </TemplateGridWrapper>
      </MyContainer>

      <Line></Line>
      <StyledButtonWrapper>
        <StyledButton
          text={"추가"}
          onClick={() => console.log("추가 버튼 클릭")} //navigate 넣으면 된다요
        />
      </StyledButtonWrapper>

      <MyContainer className="MyTempalteContainer">
        <MyTitle className="MyTemplateTitle">내가 만든 템플릿</MyTitle>
        <MyTemplateMenuWrapper>
          {/* <SelectBox /> */}
          <SearchBarMini
            onChange={(e) => console.log(e.target.value)}
            onClick={() => onSearchClick}
          />
        </MyTemplateMenuWrapper>
 

        <Line></Line>

        <TemplateGridWrapper>
          <TemplateGrid>
            {/* 기능구현으로부터 필터 기능 탑재된 filterData를 넣기 */}
            {/* {dummydata.map((data, index) => (
            {/* {dummydata.map((data, index) => (
              <TemplateCard
                key={index}
                templateName={data.postTitle}
                description={data.postContent}
                templateThumnail={data.postBackgroundImg}
                templateButton={"보기"}
                templateButton={"보기"}
              />
            ))} */}
            {/* 기능 구현이 어려움으로 일단 이렇게 해둠. */}
          </TemplateGrid>
          <Text>비어있음.</Text>
        </TemplateGridWrapper>

        <Line></Line>

        <StyledButtonWrapper>
          <StyledButton
            text={"추가"}
            onClick={() => console.log("추가 버튼 클릭")} // 내가 만든 템플릿을 추가할 수 있는 버튼..
          />
        </StyledButtonWrapper>
      </MyContainer>
    </MyPageContainer>
  );
}

export default MyPage;

const MyPageContainer = styled.div`
  width: 85%; //수정중...
  margin: 0 auto;
`;

const MyContainer = styled.div`
  margin-top: 10vh;
`;

const MyTitle = styled.div`
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

const MyProtFolioMenuBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MyTemplateMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const TemplateGridWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TemplateGrid = styled.div`
  //display: grid;
  //grid-template-columns: repeat(4, 1fr);
  //place-content: center center;
  //gap: 3vw 1vw;
  margin-top: 2em;
  max-width: 80em;
`;

const Line = styled.hr`
  margin: 1.5vh 0;
  border: 1px solid #d0d1d9;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1vw;
`;
