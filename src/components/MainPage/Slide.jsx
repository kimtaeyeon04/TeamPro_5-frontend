import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";

// Import Swiper styles
import 'swiper/css';
import N1 from "../../assets/icons/Mainpage/N1.svg";
import N2 from "../../assets/icons/Mainpage/N2.svg";
import N3 from "../../assets/icons/Mainpage/N3.svg";

export default () => {
  return (
    <StyledSwiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }} 
    >
        {/* 템플릿 */}
      <SwiperSlide> 
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
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>

    </StyledSwiper>
  );
};

const StyledSwiper = styled(Swiper)`
  width: 100%;    
  height: 300px;  
  
  .swiper-pagination-bullet {
    background-color: #0A27A6;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #0A27A6; 
  }
`;


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
