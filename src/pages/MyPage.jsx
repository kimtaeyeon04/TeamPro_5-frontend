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

      <MyPortFolioContainer>
        <MyPortFolioTiltle>내가 만든 포트폴리오</MyPortFolioTiltle>
        <MyProtFolioMenuBarWrapper>
          <SearchBarMini
            onChange={(e) => console.log(e.target.value)}
            onClick={() => onSearchClick}
          />
        </MyProtFolioMenuBarWrapper>

        <Line></Line>

        <TemplateGridWrapper>
          <TemplateGrid>{/* 기능구현으로부터 함수 받아서 구현 */}</TemplateGrid>
        </TemplateGridWrapper>
      </MyPortFolioContainer>

      <MyTemplateContainer className="MyTempalteContainer">
        <MyTemplateTitle className="MyTemplateTitle">
          내가 만든 템플릿
        </MyTemplateTitle>
        <MyTemplateMenuWrapper>
          <SelectBox />
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
              <TemplateCard
                key={index}
                templateName={data.postTitle}
                description={data.postContent}
                templateThumnail={data.postBackgroundImg}
                templateButton={"보기"}
              />
            ))} */}
            비어있음. {/* 기능 구현이 어려움으로 일단 이렇게 해둠. */}
          </TemplateGrid>
        </TemplateGridWrapper>

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
  margin-left: -1em;
`;

const MyPortFolioContainer = styled.div`
  margin-top: 10vh;
`;

const MyPortFolioTiltle = styled.div`
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
  justify-content: flex-end;
`;

const MyTemplateContainer = styled.div`
  margin-top: 10vh;
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

const MyTemplateMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Line = styled.hr`
  margin: 0.625em 0; 
  border: 1px solid #d0d1d9;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
