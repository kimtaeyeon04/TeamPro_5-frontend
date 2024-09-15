import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return(
        <FooterWrapper>
            <MainText>FolioFrame</MainText>
            {/*<LogoWrapper>*/}
            <rightTextWrapper>
                <Text>팀프로젝트</Text>
            </rightTextWrapper>
               
        </FooterWrapper>
    );
};

export default Footer;

const FooterWrapper = styled.div`
    background-coloer : #D0D1D9;
    width : 100%;
    height: 277px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MainText = styled.div`
    font-size: 1em;
    font-weight: 700;
    text-align: center;
`;

const rightTextWrapper = styled.div`

`;

const Text = styled.div`
    color: #697077;
    font-size: 0.8125em;
    font-weight: 400;
    cursor: pointer;

`;