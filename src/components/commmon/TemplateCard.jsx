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
  width: 282px;
  height: 282px;
  background-color: #ffffff;
  border: 2px solid #d0d1d9;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 265.06px;
  height: 141.68px;
  background-color: #f9f9f9;
  border: 1px solid #d0d1d9;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 53.77px;
  height: 41.29px;
  object-fit: contain;
`;

const TemplateName = styled.h3`
  margin-top: 20px;
  font-family: "Inria Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #000000;
`;

const Description = styled.p`
  margin-top: 10px;
  font-family: "Inria Sans", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #d0d1d9;
  width: 244.13px;
`;

const Button = styled.button`
  margin-top: auto;
  width: 184.37px;
  height: 29.94px;
  background-color: #0a27a6;
  border-radius: 1000px;
  border: none;
  color: #ffffff;
  font-family: "Inria Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #092091; /* Darken the button on hover */
  }g
`;
