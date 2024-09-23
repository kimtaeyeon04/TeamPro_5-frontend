import React from "react";
import styled from "styled-components";

import { Navigate } from "react-router-dom";
import MainCard from "../components/commmon/MainCard";

// import search from "../assets/icons/Header/search.png";
import Logo from "../assets/icons/Logo.png";
import N1 from "../assets/icons/Mainpage/N1.svg";
import N2 from "../assets/icons/Mainpage/N2.svg";
import N3 from "../assets/icons/Mainpage/N3.svg";
import copyright from "../assets/icons/Mainpage/copyright.png";

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
            
        {/* 템플릿, 해커톤, 채용 */}
        <CardWrapper>
            <PointText4>
                <LogoImage src={Logo} alt="Logo" />
                FolioFrame에는 무엇이 있을까요?
            </PointText4>
            <MainCard />
        </CardWrapper>

        {/* 템플릿 */}
            <N1Image src={N1} alt="Number1"/>
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
        
        {/* 해커톤 */}
            <N2Image src={N2} alt="Number2"/>
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
        
        {/* 채용 */}
            <N3Image src={N3} alt="Number3"/>
            <VideoWrapper2>
                <Drawvideo autoPlay loop muted>
                        <source src="/videos/Drawvideo.mp4" type="video/mp4" />
                        비디오를 재생할 수 없습니다. 브라우저가 이 형식을 지원하지 않습니다.
                </Drawvideo>
                <TextWrapper>
                    <PointText1>함께 만드는 <br></br>포토폴리오</PointText1>
                    {/* <StartButton>지금 시작하기</StartButton> */}
                </TextWrapper>
            </VideoWrapper2>
        </MainPageWrapper>
        
         {/* 마무리 */}
        <ThanksWrapper>
            <PointText4>FolioFrame</PointText4>
            <PointText5>FolioFrame은 팀프로젝트1의 작업물입니다. 우리의 팀명은 "포폴만들조"이며 김태연, 김예은, 조수연, 최현혜가 함께 했습니다.<br></br> 포트폴리오를 만들때 도움을 줄 수 있는 사이트를 만드는 것이 우리의 목표입니다.<br></br>
                지금보다 더 나은 서비스를 제공할 수 있도록 노력하겠습니다!!!
            </PointText5>
            <CopyWrapper>
                {/* 구분선 */}
                <Bar></Bar>
                <CopyrightImage src={copyright} alt="저작권 표시"/>
                {/* 메인 영상 저작권 */}
                <PointText5>평평한 디자인의 모션 그래픽 기하학적 배경_preview</PointText5>
                <PointText5>https://kr.freepik.com/free-video/motion-graphic-flat-design-geometric-background_3294690#fromView=search&page=1&position=7&uuid=995143c1-4b7b-489b-9250-c1fc132a130b</PointText5>
                {/* 공유 영상 저작권 */}
                <PointText5>소셜 미디어 중독자의 모션 그래픽_preview</PointText5>
                <PointText5>https://kr.freepik.com/free-video/motion-graphic-person-addicted-social-media_3294138#fromView=search&page=6&position=36&uuid=2c0106e1-e052-401a-8156-6a189382987a</PointText5>
                {/* 리소그래픽 영상 저작권 */}
                <PointText5>손으로 그린 리소그래프 요소 컬렉션의 모션 그래픽_preview</PointText5>
                <PointText5>https://kr.freepik.com/free-video/motion-graphic-hand-drawn-risograph-element-collection_3295172#fromView=search&page=1&position=8&uuid=2e65e734-07c3-4cfe-84c9-25c84cf5ea0a</PointText5>
                {/* 폰트 저작권 */}
                <PointText5>폰트</PointText5>
                <PointText5>https://copyright.keris.or.kr/wft/fntDwnldView?fntGrpId=GFT202408200000000000003</PointText5>
            </CopyWrapper>
        </ThanksWrapper>
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
    width: 100%; 
`;

const TextWrapper = styled.div`
    // display: flex;
    flex-direction: column;
    position: absolute;
    left: 40em; 
    margin-top : -5em;   
`;

const CardWrapper = styled.div`
    margin-top : 5em;
`;

const ThanksWrapper = styled.div`
    margin : 0 6em;
`;

const CopyWrapper = styled.div`
    // display : flex;
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
    width : 30em;
    margin-left : 10em; 
    height: 25em; 
    object-fit: cover; 
`;

const Drawvideo = styled.video`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width : 20em; 
`;

//css element
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
    margin-top : 5em;
    outline:none;
    &::placeholder {
        text-indent: 1em; 
    }

`;

const LogoImage = styled.img`
    width : 1em;
    margin-top : -0.2em;
    padding-right : 0.5em;
`;

const N1Image = styled.img`
    width : 20em;
    margin-top: 10em;
    padding-right  : 48em;
`;

const N2Image = styled.img`
    width : 20em;
    margin-top: 10em;
    padding-left  : 45em;
`;
const N3Image = styled.img`
    width : 20em;
    margin-top: 10em;
    padding-right  : 48em;
`;

const CopyrightImage = styled.img`
    width : 1em;
    height : 1em;
    margin-top : 1em;
`;

const Bar = styled.div`
    width : 100%;
    border : 1px solid #D0D1D9;
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
const PointText4 = styled.p`
    font-size : 2em;
    font-weight : 800;
    font-family: "OTF B";
    color : #0A27A6;
    display : flex;
`;
const PointText5 = styled.p`
    font-size : 0.8em;
    font-weight : 400;
    color : #000;
    font-family: "OTF R";
    display : flex;
`;
