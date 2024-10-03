import React, {useState} from "react";
import styled from "styled-components";

const SignUpPage = () => {

    return(
        <LoginWrapper>
            <MainText>FolioFrame</MainText>
            <JoinWrapper>
                <ColumnWrapper1>
                    <NameInput placeholder="이름" type="text"></NameInput>
                    <ColumnWrapper2>
                        <CalendarText>생년월일</CalendarText>
                        <CalendarInput type="date"></CalendarInput>
                    </ColumnWrapper2>
                </ColumnWrapper1>
                
                <TelInput placeholder="전화번호" type="tel" ></TelInput>
                <CertificInput placeholder="회사인증" type="email" ></CertificInput>
                <CheckBoxWrapper>
                    <CheckBoxInput type="checkbox" id="Join" />
                    <label for="Join">가입 기본약관</label>
                </CheckBoxWrapper>
            </JoinWrapper>
            <LoginButton>시작하기</LoginButton>
            <MemberWrapper>
                <Text>이미 회원이신가요? |</Text>
                <JoinButton>로그인</JoinButton>
            </MemberWrapper>
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
    padding: 90px;
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

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left : -12em;
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

const CertificInput = styled.input`
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

const CheckBoxInput = styled.input`
    border: 1px solid #D0D1D9;
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
