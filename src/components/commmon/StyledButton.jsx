import React from "react";
import styled from "styled-components";

const StyledButton = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default StyledButton;

const Button = styled.button`
  margin-top: 0.625em;
  padding: 0.5em 1.5em;
  width: 5vw;
  background-color: #0a27a6;
  color: white;
  border: none;
  border-radius: 0.5em;
  font-size: 1vw;
  cursor: pointer;

  &:hover {
    background-color: #092091;
  }
`;
