import React, {useState} from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import Consent from "../components/Consent/Consent.jsx";
import Eye from "../assets/icons/Login/Eye.png";
import Eyeoff from "../assets/icons/Login/Eyeoff.png";


const SignUpPage = () => {
    const navigate = useNavigate();
    const [eyeVisible, setEyeVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const toggleEyeVisible = () => {
        setEyeVisible(!eyeVisible);
    };

    const handleCheckBoxClick = () => {
        setIsModalOpen(true); // 체크박스 클릭 시 팝업 열기
    };

    return (
        <LoginWrapper>
            <MainText onClick={() => navigate("/")}>FolioFrame</MainText>
            <JoinWrapper>
                <ColumnWrapper1>
                    <NameInput placeholder="이름" type="text"></NameInput>
                    <ColumnWrapper2>
                        <CalendarText>생년월일</CalendarText>
                        <CalendarInput type="date"></CalendarInput>
                    </ColumnWrapper2>
                </ColumnWrapper1>
                <IdInput placeholder="아이디 및 이메일" type="text"></IdInput>
                <PassWrapper>
                    <PassInput
                        type={eyeVisible ? "text" : "password"}
                        placeholder="비밀번호"
                    />
                    <EyeIcon
                        src={eyeVisible ? Eyeoff : Eye}
                        alt="eye"
                        onClick={toggleEyeVisible}
                    />
                </PassWrapper>
                <TelInput placeholder="전화번호" type="tel"></TelInput>
                
            </JoinWrapper>
            <LoginButton>시작하기</LoginButton>
            <MemberWrapper>
                <Text>이미 회원이신가요? |</Text>
                <JoinButton onClick={() => navigate("../LoginPage")}>로그인</JoinButton>
            </MemberWrapper>

            {/* 팝업창 */}
            {isModalOpen && (
                <ModalOverlay>
                    <ModalContent>
                       <Consent/>
                    </ModalContent>
                </ModalOverlay>
            )}
        </LoginWrapper>
    );
};

export default SignUpPage;

//css Wrapper
const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
`;

const JoinWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap : 1em;
`;

const MemberWrapper = styled.div`
    display: flex;
    gap : 1em;
    margin-top : -2em;
`;

const ColumnWrapper1 = styled.div`
    display : flex;
    gap : 1em;
`;

const ColumnWrapper2 = styled.div`
    display : flex;
    gap : 0.5em;
`;


const PassWrapper = styled.div`
    position: relative;
    width: 100%;
   
`;

//css input
const NameInput = styled.input`
    border-radius : 2em;
    border : 1px solid #D0D1D9;
    height : 3em;
    width : 40%;
    text-indent: 1em; 
    outline : none;
    &::placeholder {
        text-indent: 1em; 
        color : #D0D1D9;
    }

`;

const TelInput = styled.input`
    border-radius : 2em;
    border : 1px solid #D0D1D9;
    height : 3em;
    width : 100%;
    text-indent: 1em; 
    outline : none;
    &::placeholder {
    text-indent: 1em; 
    color : #D0D1D9;
    }

`;

const CalendarInput = styled.input`
    border: none;
    outline: none;
    height: 2em;
    padding: 0.5em;
    font-size: 1em;
    color: #D0D1D9;
    border: 1px solid #D0D1D9;
    border-radius: 4px;
    margin-right : -2em;
`;
const PassInput = styled.input`
    border-radius : 2em;
    border : 1px solid #D0D1D9;
    height : 3em;
    width : 90%;  
    text-indent: 1em; 
    padding-right: 2.5em; 
    outline : none;
    &::placeholder {
        text-indent: 1em; 
        color : #D0D1D9;
    }

`;
const IdInput = styled.input`
    border-radius : 2em;
    border : 1px solid #D0D1D9;
    height : 3em;
    width : 100%;
    text-indent: 1em; 
    outline : none;
    &::placeholder {
    text-indent: 1em;
    color : #D0D1D9;
    }

`;

//css button
const LoginButton = styled.button`
    color : #fff;
    font-size : 1em;
    font-weight : 800;

    border-radius : 2em;
    border : none;
    background-color : #0A27A6;
    height : 3em;
    width : 20%;

    margin : 2em 0;
`;

const JoinButton = styled.button`
    color : #D0D1D9;
    font-size: 1em;
    font-weight: 500;
    border : none;
    background-color : transparent;
`;


//css text
const MainText = styled.p`
    color : #0A27A6;
    font-size: 3em;
    font-weight: 700;
    font-family: "OTF B";
    cursor : pointer;
`;

const Text = styled.p`
    color : #D0D1D9;
    font-size: 1em;
    font-weight: 500;
`;

const CalendarText =  styled.p`
    color : #D0D1D9;
    font-size: .8em;
    font-weight: 500;
    margin-top : 1em;
`;


const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: white;
    padding: 2em;
    border-radius: 8px;
    text-align: center;
    width: 80%;
    max-width: 500px;
`;


const EyeIcon = styled.img`
    position: absolute;
    right: 1em; 
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width : 1.2em;
    height : 1.2em;
`;