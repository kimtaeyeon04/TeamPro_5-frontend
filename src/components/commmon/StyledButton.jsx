import React from "react";
import styled from "styled-components";

const StyledButton = ({ text, onClick }) => {
  return (
    <StyledButtonWrapper>
      <Button onClick={onClick}>{text}</Button>
    </StyledButtonWrapper>
  );
};

export default StyledButton;

const StyledButtonWrapper = styled.div`
  display: inline-block;
  text-align: center;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.625em 0em;
  width: 80%;

  background-color: #0a27a6;
  color: white;
  border: none;
  border-radius: 0.75em;
  font-size: 1vw;
  cursor: pointer;
  text-align: center;

  width: 80%;
  float: left;

  &:hover {
    background-color: #092091;
  }
`;
