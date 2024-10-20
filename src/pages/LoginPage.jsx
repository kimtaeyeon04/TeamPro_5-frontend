import React, {useState} from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";


import Eye from "../assets/icons/Login/Eye.png";
import Eyeoff from "../assets/icons/Login/Eyeoff.png";

import { userInfo } from "../components/commmon/dummydata/userInfo.jsx"; 


const LoginPage = () => {
    const [eyeVisible, setEyeVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [Id, setId] = useState("");
    const [password, setPassword] = useState("");

    
    const navigate = useNavigate();

    // 회원가입 페이지 이동
    // 회원가입 페이지 이동
    const onClickImg = () => {
        navigate("/MemberSelectionPage");
    };

    // 비밀번호 눈
    const toggleEyeVisible = () => {
        setEyeVisible(!eyeVisible);
    };

    const handleLogin = () => {
        const trimmedEmail = email.trim();
        const trimmedId = Id.trim();
        const trimmedPassword = password.trim();

        console.log("입력된 이메일 및 아이디 :", trimmedEmail, trimmedId);
        console.log("입력된 비밀번호 : ", trimmedPassword);
        console.log("더미 데이터:", userInfo);

        const user = userInfo.find(
            (user) => 
                (user.email.toLowerCase() === trimmedEmail.toLowerCase() || user.Id.toString() === trimmedId) &&
                user.password.toString() === trimmedPassword
        );

        if (user) {
            // 로그인 성공 시 accessToken 저장
            localStorage.setItem('accessToken', 'yourAccessTokenHere'); // 실제 accessToken 사용

            navigate("./MainPage");
        } else {
            console.log("로그인 실패 - 입력값이 더미 데이터와 일치하지 않음");
        }
    };

    return (
        <LoginWrapper>
            <MainText onClick={() => navigate("/")}>FolioFrame</MainText>
            <JoinWrapper>
                <IDinput
                    placeholder="이메일 주소 또는 아이디"
                    value={email || Id}
                    onChange={(e) => {
                        if (e.target.value.includes('@')) {
                            setEmail(e.target.value);
                        } else {
                            setId(e.target.value);
                        }
                    }}
                />
                <IDinput
                    placeholder="이메일 주소 또는 아이디"
                    value={email || Id}
                    onChange={(e) => {
                        if (e.target.value.includes('@')) {
                            setEmail(e.target.value);
                        } else {
                            setId(e.target.value);
                        }
                    }}
                />
                <PassWrapper>
                    <PASSinput
                        type={eyeVisible ? "text" : "password"}
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <EyeIcon
                        src={eyeVisible ? Eyeoff : Eye}
                        alt="eye"
                        onClick={toggleEyeVisible}
                    />
                    <PASSinput
                        type={eyeVisible ? "text" : "password"}
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <EyeIcon
                        src={eyeVisible ? Eyeoff : Eye}
                        alt="eye"
                        onClick={toggleEyeVisible}
                    />
                </PassWrapper>
            </JoinWrapper>
            <LoginButton onClick={handleLogin}>로그인</LoginButton>
            <LoginButton onClick={handleLogin}>로그인</LoginButton>
            <MemberWrapper>
                <Text>회원이 아니신가요? |</Text>
                <JoinButton onClick={onClickImg}>회원가입</JoinButton>
            </MemberWrapper>
        </LoginWrapper>
    );
};

export default LoginPage;



//css Wrapper
const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // padding: 90px;

    width : 85%;
    padding: 40px 40px;
    margin: 0 auto; 
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

const PassWrapper = styled.div`
    position: relative;
    display: inline-block;
    width: 200%; 
    margin-bottom: -1.25em;
`;

//css input
const IDinput = styled.input`
    border-radius : 2em;
    border : 1px solid #D0D1D9;
    height : 3em;
    width : 200%;
    text-indent: 1em; 

    &::placeholder {
    text-indent: 1em; 
    }

`;

const PASSinput = styled.input`
    border-radius : 2em;
    border : 1px solid #D0D1D9;
    height : 3em;
    width : 100%;
    text-indent: 1em; 

    &::placeholder {
    text-indent: 1em; 
    }
    &::-ms-reveal {
        display: none;
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

const EyeIcon = styled.img`
    position: absolute;
    right: 1em; 
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width : 1.2em;
    height : 1.2em;
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