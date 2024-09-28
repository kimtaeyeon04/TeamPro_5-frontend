// TemplatePage.jsx
import React from "react";
import styled from "styled-components";
import SearchBar from "../components/commmon/SearchBar";
import SelectBox from "../components/commmon/SelectBox";
import TemplateCard from "../components/commmon/TemplateCard";
import { dummydata } from "../components/commmon/dummydata/dummydata"; // dummydata 파일을 import합니다.

const TemplatePage = () => {
  return (
    <TemplatePageContainer>
      <SearchBar />
      <SelectBoxWrapper>
        <SelectBox />
        <ApplyButton onClick={() => console.log("적용 버튼 클릭")}>
          적용
        </ApplyButton>
      </SelectBoxWrapper>
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

const ApplyButton = styled.button`
  margin-top: 0.625em;
  padding: 0.5em 1.5em;
  background-color: #0a27a6;
  color: white;
  border: none;
  border-radius: 0.5em;
  font-size: 1em;
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
  width: 100%;
  max-width: 80em;
`;

const Line = styled.hr`
  margin: 0.625em 0;
  border: 1px solid #d0d1d9;
`;
