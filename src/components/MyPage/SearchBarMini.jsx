import React from "react";
import styled from "styled-components";
import search from "../../assets/icons/Header/search.png";

const SearchBarMini = () => {
  return (
    <SearchBarContainer>
      <SearchBarWrapper>
        <SearchInput placeholder="제목, 공유자 이름 검색" spellCheck="false" />
        <SearchIconWrapper>
          {/* onClick넣으면 됨. */}
          <SearchIcon src={search} alt="search" />
        </SearchIconWrapper>
      </SearchBarWrapper>
    </SearchBarContainer>
  );
};

export default SearchBarMini;

const SearchBarContainer = styled.div`
  margin-top: 10px;
  width: 50%;
`;
const SearchBarWrapper = styled.div`
  width: 50%;
  height: 2.5em; 
  border: 0.0625em solid #c8c8c8; 
  box-shadow: 0em 0.0625em 0.25em rgba(12, 12, 13, 0.1),
  0em 0.0625em 0.25em rgba(12, 12, 13, 0.05); 
  border-radius: 62.5em;
  display: flex;
  align-items: center;
  padding-left: 0.625em; 
  float: right;
`;

const SearchInput = styled.input`
  width: 85%;
  font-family: "Inria Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.8125em; 
  line-height: 1em; 
  color: #919194;
  border: none;
  outline: none;
  background: none;
`;

const SearchIconWrapper = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchIcon = styled.img`
  width: 50%;
  border-radius: 50%;
`;
