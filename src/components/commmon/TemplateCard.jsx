import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// 템플릿 카드 1개
//templateName, description, templateThumnail을 props로!
const TemplateCard = ({ templateName, description, templateThumnail }) => {
  return (
    <Card>
      <ImageContainer>
        <Image src={imageSrc} alt="Template" />
      </ImageContainer>
      <TemplateName>{templateName}</TemplateName>
      <Description>{description}</Description>
      <Button>보기</Button>
    </Card>
  );
};

// TemplateCard의 프롭타입
TemplateCard.propTypes = {
  templateName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  templateThumnail: PropTypes.string.isRequired,
};

export default TemplateCard;

const Card = styled.div`
  position: relative;
  width: 17.625em; 
  height: 17.625em; 
  background-color: #ffffff;
  border: 0.125em solid #d0d1d9; 
  border-radius: 0.3125em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em; 
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 16.56em;
  height: 8.855em;
  background-color: #f9f9f9;
  border: 0.0625em solid #d0d1d9;
  border-radius: 0.625em; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 3.36em;
  height: 2.58em; 
  object-fit: contain;
`;

const TemplateName = styled.h3`
  margin-top: 1.25em; 
  font-family: "Inria Sans", sans-serif;
  font-weight: 700;
  font-size: 1em; 
  line-height: 1.1875em; 
  text-align: center;
  color: #000000;
`;

const Description = styled.p`
  margin-top: 0.625em; 
  font-family: "Inria Sans", sans-serif;
  font-weight: 300;
  font-size: 0.875em; 
  line-height: 1.0625em; 
  text-align: center;
  color: #d0d1d9;
  width: 15.257em; 
`;

const Button = styled.button`
  margin-top: auto;
  width: 11.523em; 
  height: 1.871em; 
  background-color: #0a27a6;
  border-radius: 62.5em; 
  border: none;
  color: #ffffff;
  font-family: "Inria Sans", sans-serif;
  font-weight: 700;
  font-size: 1em; 
  line-height: 1.1875em; 
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #092091; 
  }
`;
