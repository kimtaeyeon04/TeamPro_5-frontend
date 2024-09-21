import React from "react";
import styled from "styled-components";

import { Navigate } from "react-router-dom";
import MainCard from "../components/commmon/MainCard";
import search from "../assets/icons/Header/search.png";


const MainPage = () => {
    
    return (
        <>
        {/* 메인 비디오  */}
        <MainPageWrapper>
            <VideoWrapper1>
                <Mainvideo  autoPlay loop muted>
                    <source src="/videos/Mainvideo.mp4" type="video/mp4" />
                    비디오를 재생할 수 없습니다. 브라우저가 이 형식을 지원하지 않습니다.
                </Mainvideo>
                <Maintext>FolioFrame</Maintext>
            </VideoWrapper1>

            <SearchInput type="text" placeholder="검색어를 입력해주세요"></SearchInput>
            {/* <SearchIcon src={search} alt="search" /> */}
  
        {/* 공유 비디오 */}
            <VideoWrapper3>
                <Sharevideo autoPlay loop muted>
                        <source src="/videos/Sharevideo2.mp4" type="video/mp4" />
                        비디오를 재생할 수 없습니다. 브라우저가 이 형식을 지원하지 않습니다.
                </Sharevideo>
                <TextWrapper>
                    <PointText2>내가 만든 <br></br>포토폴리오를<br></br>공유해보세요</PointText2>
                    <PointText3>자신이 만든 포토폴리오를 공유해서 다른 사람들과 소통해보세요!</PointText3>
                    <PointText3>가장 인기있는 포토폴리오를 만들어 볼까요?</PointText3>
                </TextWrapper>
            </VideoWrapper3>
        {/* 템플릿, 해커톤, 채용 */}
            <MainCard/>

            <VideoWrapper2>
                <Drawvideo autoPlay loop muted>
                        <source src="/videos/Drawvideo.mp4" type="video/mp4" />
                        비디오를 재생할 수 없습니다. 브라우저가 이 형식을 지원하지 않습니다.
                </Drawvideo>
                <TextWrapper>
                    <PointText1>함께 만드는 <br></br>포토폴리오</PointText1>
                    <StartButton>지금 시작하기</StartButton>
                </TextWrapper>
            </VideoWrapper2>

        </MainPageWrapper>
        

        </>
    );
};

export default MainPage;

//css wrapper
const MainPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const VideoWrapper1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const VideoWrapper2 = styled.div`
    display: flex;
    margin-top : 10em;
`;

const VideoWrapper3 = styled.div`
    display: flex;
    align-items: center; 
    justify-content: space-between; 
    margin-top: 10em;
    width: 100%; 
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 40em; 
    margin-top : -5em;   
`;

//css video
const Mainvideo = styled.video`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width : 68.5em; 
    margin-top : -3em;

    //영상 높이
    height: 25em; 
    object-fit: cover; 
`;

const Sharevideo = styled.video`
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    width : 30em;
    height : auto;
    margin-left : 10em; 
`;

const Drawvideo = styled.video`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width : 20em; 
`;

const StartButton = styled.button`
    color : #fff;
    font-size : 1em;
    font-weight : 800;

    border-radius : 2em;
    border : none;
    background-color : #0A27A6;
    height : 3em;
    width : 20%;

    margin-top : -3em;

`;

const SearchInput = styled.input`
    border-radius : 2em;
    border : 1px solid #D0D1D9;
    height : 3em;
    width : 50%;
    text-indent: 1em; 
    margin-top : 2em;
    outline:none;
    &::placeholder {
    text-indent: 1em; 
    }

`;

//css text
const Maintext = styled.p`
    position: absolute;
    top: -1.5em;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    
    color: white; 
    font-size : 5em;
    font-weight : 800;
    font-family: "OTF B";
`;

const PointText1 = styled.p`
    font-size : 5em;
    font-weight : 800;
    font-family: "OTF B";
    color : #0A27A6;
`;

const PointText2 = styled.p`
    font-size : 4em;
    font-weight : 900;
    font-family: "OTF B";
    color : #6633cc;
    margin-bottom : 0.2em;
`;

const PointText3 = styled.p`
    font-size : 1em;
    font-weight : 600;
    font-family: "OTF R";
    color : #000;
    margin-bottom : -1em;
`;

const SearchIcon = styled.img`
  width: 40%;
  border-radius: 50%;
`;
