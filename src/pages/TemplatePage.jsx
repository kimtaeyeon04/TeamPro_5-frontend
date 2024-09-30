// TemplatePage.jsx
import React from "react";
import styled from "styled-components";
import SearchBar from "../components/commmon/SearchBar";
import SelectBox from "../components/commmon/SelectBox";
import TemplateCard from "../components/commmon/TemplateCard";
import StyledButton from "../components/commmon/StyledButton";
import { dummydata } from "../components/commmon/dummydata/dummydata"; // dummydata 파일을 import합니다.

import Logo from "../assets/icons/Logo.png";

const TemplatePage = () => {
  return (
    <TemplatePageContainer>
      {/* 각 페이지별 상단 -> 나중에 쉽게 모든 페이지에 적용할 수 있는 방법으로 수정 */}
      <PageCategoryWrapper>
        <LogoImage src={Logo} alt="로고" />
        <HeaderText>Template</HeaderText>
      </PageCategoryWrapper>
      <SearchBar
        onChange={(e) => console.log(e.target.value)}
        onClick={() => console.log("검색 버튼 클릭")}
      />

      <SelectBoxWrapper>
        <SelectBox />
        <StyledButton
          text={"적용"}
          onClick={() => console.log("적용버튼 클릭")}
        />
      </SelectBoxWrapper>
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
    </TemplatePageContainer>
  );
};

export default TemplatePage;

const TemplatePageContainer = styled.div`
  width: 85%; //수정중...
  margin: 0 auto;
`;

const PageCategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const LogoImage = styled.img`
  widht: 5em;
  height: 5em;
  margin-bottom: -2em;
`;

const HeaderText = styled.p`
  color: #0a27a6;
  font-size: 2em;
  font-weight: 800;
  font-family: "OTF B";
`;

const SelectBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10vh;
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
