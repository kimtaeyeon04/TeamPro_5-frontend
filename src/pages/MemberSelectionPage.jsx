import React from "react";
import styled from "styled-components";

import Business from "../assets/images/MemberSelectionPage/Business.png";
import General from "../assets/images/MemberSelectionPage/General.png";

const MemberSelectionPage = () => {
    return (
        <MainWrapper>
            {/* 일반회원 */}
            <MemberButton image={General} altText="일반회원" title="일반회원" />
            {/* 기업회원 */}
            <MemberButton image={Business} altText="기업회원" title="기업회원" />
        </MainWrapper>
    );
};

const MemberButton = ({ image, altText, title }) => (
    <Button>
        <ImageWrapper>
            <Image src={image} alt={altText} />
            <TextOverlay>
                <Title>{title}</Title>
                <ExplainText>
                    설명설명설명설명설명설명설명설명
                    설명설명설명설명설명설명설명설명
                    설명설명설명설명설명설명설명설명
                    설명설명설명설명설명설명설명설명
                    설명설명설명설명설명설명설명설명
                    설명설명설명설명설명설명설명설명
                    설명설명설명설명설
                </ExplainText>
            </TextOverlay>
        </ImageWrapper>
    </Button>
);

export default MemberSelectionPage;

// CSS Wrapper
const MainWrapper = styled.div`
    display: flex;
    gap: 2em;
    align-items: center;
    justify-content: center;
    padding: 9em 15em;
    background-color: #15243E;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

// CSS Buttons
const Button = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1em;
    background-color: #15243E;
    border: none;
    cursor: pointer;
    width: 30em; 
    height: 27em;
    border: 2px solid #fff; 
`;

// CSS Images
const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 1em;
`;

// CSS Text
const TextOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
`;

const Title = styled.p`
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 0.5em;
    border: 0.2em solid #fff; 
    border-radius: 0.5em;
    padding: 0.5em 2em;
`;

const ExplainText = styled.p`
    font-size: 1em;
    color: white;
    margin-bottom: 0.5em;
    padding: 2em;
`;
