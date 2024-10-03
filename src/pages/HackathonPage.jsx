import React from "react";
import styled from "styled-components";

import TemplateCard from "../components/commmon/TemplateCard.jsx";
import { dummydata } from "../components/commmon/dummydata/dummydata";
import SelectBox from "../components/commmon/SelectBox.jsx";
import SearchBar from "../components/commmon/SearchBar";
import StyledButton from "../components/commmon/StyledButton";

import Logo from "../assets/icons/Logo.png";

const HackathonPage = () => {
  //   // 데이터가 12개 미만일 경우 빈 카드를 추가하는 배열 생성
  //   const cards = [...dummydata, ...Array(12 - dummydata.length).fill({})];

  return (
    <>
      {/* 각 페이지별 상단 -> 나중에 쉽게 모든 페이지에 적용할 수 있는 방법으로 수정 */}
      <PageCategoryWrapper>
        <LogoImage src={Logo} alt="로고" />
        <HeaderText>Hackathon</HeaderText>
        {/* <SearchInput type="text" placeholder="검색어를 입력해주세요" /> */}
      </PageCategoryWrapper>
      <SearchBar
        onChange={(e) => console.log(e.target.value)}
        onClick={() => console.log("검색 버튼 클릭")}
      />

      <MainWrapper>
        <MyTemplateMenuWrapper>
          <SelectBox />
          <StyledButton
            text={"적용"}
            onClick={() => console.log("적용버튼 클릭")}
          />
        </MyTemplateMenuWrapper>
        <Line></Line>

        {/* 12개의 카드를 그리드 형태로 출력 */}
        <TemplateGrid>
          {dummydata.map((data, index) => (
            <TemplateCard
              key={index}
              templateName={data.postTitle || "빈 제목"}
              description={data.postContent || "빈 설명"}
              templateThumnail={data.postBackgroundImg || "default-image.png"}
            />
          ))}
        </TemplateGrid>
      </MainWrapper>
    </>
  );
};

export default HackathonPage;

//css Wrapper

const MainWrapper = styled.div`
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

const MyTemplateMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10vh;
`;

//css element
const SearchInput = styled.input`
  border-radius: 2em;
  border: 1px solid #d0d1d9;
  height: 3em;
  width: 50%;
  text-indent: 1em;
  outline: none;
  &::placeholder {
    text-indent: 1em;
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

const LogoImage = styled.img`
  widht: 5em;
  height: 5em;
  margin-bottom: -2em;
`;

const Line = styled.hr`
  margin: 0.625em 0;
  border: 1px solid #d0d1d9;
`;
//css Text
const HeaderText = styled.p`
  color: #0a27a6;
  font-size: 2em;
  font-weight: 800;
  font-family: "OTF B";
`;
