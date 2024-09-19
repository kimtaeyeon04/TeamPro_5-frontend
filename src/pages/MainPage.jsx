import React from "react";
import styled from "styled-components";


const MainPage = () => {
    return (
        <>
        <MainPageWrapper>
            <VideoWrapper>
                <Mainvideo  autoPlay loop muted>
                    <source src="/videos/Mainvideo.mp4" type="video/mp4" />
                    비디오를 재생할 수 없습니다. 브라우저가 이 형식을 지원하지 않습니다.
                </Mainvideo>
                <Maintext>FolioFrame</Maintext>
            </VideoWrapper>

            <p>함께 만드는 포토폴리오</p>
            <Sharevideo autoPlay loop muted>
                    <source src="/videos/Sharevideo.mp4" type="video/mp4" />
                    비디오를 재생할 수 없습니다. 브라우저가 이 형식을 지원하지 않습니다.
            </Sharevideo>
        </MainPageWrapper>
        

        </>
    );
};

export default MainPage;

const MainPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const VideoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

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
    width : 30em; 

`;

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

`;