import React, { useState } from "react";
import styled from "styled-components";

import searchImg from "../../assets/icons/Header/search.png";
import { ImCancelCircle } from "react-icons/im";

const SearchBarMini = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue); // 입력 값을 상태에 저장
  };

  const handleSearchClick = () => {
    console.log(inputValue);
    //search(inputValue);
  };

  const handleCancelClick = () => {
    setInputValue("");
    console.log("검색어 초기화");
    //search(inputValue);
  };

  return (
    <SearchBarContainer>
      <SearchBarWrapper>
        <SearchInput
          value={inputValue} // 입력 필드가 상태와 동기화
          onChange={handleInputChange}
          placeholder="제목, 공유자 이름 검색"
          spellCheck="false"
        />

        <IconWrapper>
          {inputValue && (
            <CancelIconWrapper onClick={handleCancelClick}>
              <ImCancelCircle />
            </CancelIconWrapper>
          )}
          <SearchIcon
            onClick={handleSearchClick}
            src={searchImg}
            alt="search"
          />
        </IconWrapper>
      </SearchBarWrapper>
    </SearchBarContainer>
  );
};

export default SearchBarMini;

const SearchBarContainer = styled.div`
  margin-top: 0.8vh;
  width: 30vw;
`;
const SearchBarWrapper = styled.div`
  width: 25vw;
  height: 2.5em;

  border: 0.0625em solid #c8c8c8;
  box-shadow: 0em 0.0625em 0.25em rgba(12, 12, 13, 0.1),
    0em 0.0625em 0.25em rgba(12, 12, 13, 0.05);
  border-radius: 62.5em;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 0.625em;
`;

const SearchInput = styled.input`
  width: 85%;
  font-family: "Inria Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
  line-height: 1em;
  color: #919194;
  border: none;
  outline: none;
  background: none;
`;

const IconWrapper = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CancelIconWrapper = styled.div`
  width: 1.9vw;
  color: #d0d1d9;

  cursor: pointer;
`;

const SearchIcon = styled.img`
  width: 1.9vw;
  border-radius: 50%;

  cursor: pointer;
`;
