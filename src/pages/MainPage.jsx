import React from "react";
import styled from "styled-components";


const MainPage = () => {
    return (
        <>
        <MainPageWrapper>
            <VideoWrapper1>
                <Mainvideo  autoPlay loop muted>
                    <source src="/videos/Mainvideo.mp4" type="video/mp4" />
                    비디오를 재생할 수 없습니다. 브라우저가 이 형식을 지원하지 않습니다.
                </Mainvideo>
                <Maintext>FolioFrame</Maintext>
            </VideoWrapper1>

            <VideoWrapper2>
                <Sharevideo autoPlay loop muted>
                        <source src="/videos/Drawvideo.mp4" type="video/mp4" />
                        비디오를 재생할 수 없습니다. 브라우저가 이 형식을 지원하지 않습니다.
                </Sharevideo>
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

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // position: relative;

    position: absolute;
    top: 15em;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`;
//css video
const Mainvideo = styled.video`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width : 66.5em; 
    margin-top : -3em;

    //영상 높이
    height: 25em; 
    object-fit: cover; 
`;

const Sharevideo = styled.video`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width : 40em; 

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
`;