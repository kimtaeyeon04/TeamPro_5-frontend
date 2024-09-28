import React from "react";
import styled from "styled-components";

import TemplateCard from "../components/commmon/TemplateCard.jsx";
import { dummydata } from "../components/commmon/dummydata/dummydata"; 
import SelectBox from "../components/commmon/SelectBox";
import SearchBarMini from "../components/MyPage/SearchBarMini";

import Logo from "../assets/icons/Logo.png";

const HackathonPage = () => {
    // 데이터가 12개 미만일 경우 빈 카드를 추가하는 배열 생성
    const cards = [...dummydata, ...Array(12 - dummydata.length).fill({})];

    return (
        <>
            {/* 각 페이지별 상단 -> 나중에 쉽게 모든 페이지에 적용할 수 있는 방법으로 수정 */}
            <PageCategoryWrapper>
                <LogoImage src={Logo} alt="로고" />
                <HeaderText>Hackathon</HeaderText>
                <SearchInput type="text" placeholder="검색어를 입력해주세요" />
            </PageCategoryWrapper>

            <MyTemplateMenuWrapper>
                <SelectBox />
                <SearchBarMini />
            </MyTemplateMenuWrapper>
            {/* 12개의 카드를 그리드 형태로 출력 */}
            <TemplateGrid>
                {cards.map((data, index) => (
                    <TemplateCard
                        key={index}
                        templateName={data.postTitle || '빈 제목'}
                        description={data.postContent || '빈 설명'}
                        templateThumnail={data.postBackgroundImg || 'default-image.png'}
                    />
                ))}
            </TemplateGrid>
        </>
    );
};

export default HackathonPage;

//css Wrapper
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
  justify-content: space-between;
  margin-top : 5em;
`;

//css element
const SearchInput = styled.input`
    border-radius : 2em;
    border : 1px solid #D0D1D9;
    height : 3em;
    width : 50%;
    text-indent: 1em; 
    outline:none;
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
    widht : 5em;
    height : 5em;
    margin-bottom : -2em;
`;


//css Text
const HeaderText = styled.p`
    color: #0A27A6; 
    font-size : 2em;
    font-weight : 800;
    font-family: "OTF B";    
`;