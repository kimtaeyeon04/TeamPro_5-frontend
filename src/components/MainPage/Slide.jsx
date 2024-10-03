import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import N1 from "../../assets/icons/Mainpage/N1.svg";
import N2 from "../../assets/icons/Mainpage/N2.svg";
import N3 from "../../assets/icons/Mainpage/N3.svg";
import N4 from "../../assets/icons/Mainpage/N4.svg";
import job from "../../assets/images/Mainpage/JOB.jpg";
import hackathon from "../../assets/images/Mainpage/hackathon.jpg";


export default () => {
    const [swiperIndex, setSwiperIndex] = useState(0); // -> 페이지네이션용
    // const [swiper, setSwiper] = useState<SwiperClass>(); // -> 슬라이드용

    // const handlePrev = () => {
    //     swiper?.slidePrev()
    // }
    // const handleNext = () => {
    //   swiper?.slideNext()
    // }

  return (
    <StyledSwiper
      spaceBetween={50}
      modules={[Navigation, Pagination, A11y, Autoplay]}
      loop={true} // 슬아이드 반복 
      speed={400} // 슬라이드 속도
      autoplay={{ delay: 3000, disableOnInteraction: false }} //자동 슬라이드 (delay: 속도, disableInlnteraction: 만지면 기능 끄기)
      onActiveIndexChange={(e)=>setSwiperIndex(e.realIndex)} //index 변경 감지 
    //   onSwiper={(e) => {setSwiper(e)}}
      slidesPerView={1}
    //   navigation // < > 표시하고 싶다면 주석 X
      pagination={{ clickable: true }}
    >
        {/* 슬라이드 1 */}
        <SwiperSlide> 
                <N1Image src={N1} alt="Number1"/>
                <VideoWrapper1>
                    <Sharevideo autoPlay loop muted>
                            <source src="/videos/Sharevideo2.mp4" type="video/mp4" />
                            비디오를 재생할 수 없습니다. 브라우저가 이 형식을 지원하지 않습니다.
                    </Sharevideo>
                    <TextWrapper>
                        <PointText2>내가 만든 <br></br>포토폴리오를<br></br>공유해보세요</PointText2>
                        <PointText3>자신이 만든 포토폴리오를 공유해서 다른 사람들과 소통해보세요!</PointText3>
                        <PointText3>가장 인기있는 포토폴리오를 만들어 볼까요?</PointText3>
                    </TextWrapper>
                </VideoWrapper1>
        </SwiperSlide> 

        {/* 슬라이드 2 */}
        <SwiperSlide>
                <N2Image src={N2} alt="Number2"/>
                <VideoWrapper2>
                    <HackathonImage src={hackathon} alt="해커톤"/>
                <TextWrapper>
                    <HackathonText>함께 <br></br>프로젝트해볼까요?</HackathonText>
                </TextWrapper>
            </VideoWrapper2>
        </SwiperSlide>


        {/* 슬라이드 3 */}
        <SwiperSlide>
                <N3Image src={N3} alt="Number2"/>
                <VideoWrapper3>
                    <JOBImage src={job} alt="채용"/>
                <TextWrapper>
                    <JobText>채용자에게 <br></br>내 포트폴리오를 <br></br>보여줄 수 있어요</JobText>
                </TextWrapper>
            </VideoWrapper3>
        </SwiperSlide>

        {/* 슬라이드 4 */}
        <SwiperSlide>
                <N4Image src={N4} alt="Number4"/>
                <VideoWrapper4>
                    <Drawvideo autoPlay loop muted>
                            <source src="/videos/Drawvideo.mp4" type="video/mp4" />
                            비디오를 재생할 수 없습니다. 브라우저가 이 형식을 지원하지 않습니다.
                    </Drawvideo>
                    <TextWrapper2>
                        <PointText1>함께 만드는 <br></br>포토폴리오</PointText1>
                        <StartButton>지금 시작하기</StartButton>
                    </TextWrapper2>
                </VideoWrapper4>
        </SwiperSlide>
    </StyledSwiper>
  );
};

const StyledSwiper = styled(Swiper)`
  width: 80%;    
  height: 40em;  
  
  .swiper-pagination-bullet {
    background-color: #0A27A6;
  }

//   .swiper-button-next,
//   .swiper-button-prev {
//     color: #0A27A6; 
//   }

  padding : 0 40px;
`;

//css VideoWrapper 
const VideoWrapper1 = styled.div`
    display: flex;
    align-items: center; 
    justify-content: space-between; 
    width: 100%; 
`; 
const VideoWrapper2 = styled.div`
    display: flex;
    align-items: center; 
    justify-content: space-between; 
    width: 100%; 
`;
const VideoWrapper3 = styled.div`
    display: flex;
    align-items: center; 
    justify-content: space-between; 
    width: 100%; 
`;
const VideoWrapper4 = styled.div`
    display: flex;
    margin-top : 18m;
    width : 100%;
    margin-left : 3em;
`;

const TextWrapper = styled.div`
    // display: flex;
    flex-direction: column;
    position: absolute;
    left: 40em; 
    margin-top : -5em;   
`;
const TextWrapper2 = styled.div`
    // display: flex;
    flex-direction: column;
    position: absolute;
    left : 20em;
    margin-top : 0em;   
`;

// css video
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
    width : 60em; 
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
    width : 50%;
    margin-left : 5em;
    // margin-top : -5em;

`;

const N1Image = styled.img`
    width : 20em;
    margin-top: 10em;
    padding-right  : 48em;
`;

const N2Image = styled.img`
    width : 20em;
    margin-top: 10em;
    padding-right  : 48em;
`;
const N3Image = styled.img`
    width : 20em;
    margin-top: 10em;
    padding-right  : 48em;
`;
const N4Image = styled.img`
    width : 20em;
    margin-top: 10em;
    padding-right  : 48em;
`;
const JOBImage = styled.img`
    width : 40em;
    margin-top: 0em;
    padding-right  : 50em;
`;
const HackathonImage = styled.img`
    width : 38em;
    margin-top: 0em;
    padding-right  : 50em;
`;

//css text
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

const JobText = styled.p`
    font-size : 3.2em;
    font-weight : 900;
    font-family: "OTF B";
    color : #6633cc;
    margin-bottom : 0.2em;
`;

const HackathonText = styled.p`
    font-size : 3.2em;
    font-weight : 900;
    font-family: "OTF B";
    color : #6633cc;
    margin-bottom : 0.2em;
    margin-left : -1em;
`;
