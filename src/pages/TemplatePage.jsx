// TemplatePage.jsx
import React from "react";
import styled from "styled-components";
import SearchBar from "../components/commmon/SearchBar";
import SelectBox from "../components/commmon/SelectBox";
import TemplateCard from "../components/commmon/TemplateCard";
import StyledButton from "../components/commmon/StyledButton";
import { dummydata } from "../components/commmon/dummydata/dummydata"; // dummydata 파일을 import합니다.

const TemplatePage = () => {
  return (
    <TemplatePageContainer>
      <SearchBar />
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
