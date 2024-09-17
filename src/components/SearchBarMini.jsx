import React from "react";
import styled from "styled-components";
import search from "../assets/icons/Header/search.png";

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
  border: 1px solid #c8c8c8;
  box-shadow: 0px 1px 4px rgba(12, 12, 13, 0.1),
    0px 1px 4px rgba(12, 12, 13, 0.05);
  border-radius: 1000px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  float: right;
`;

const SearchInput = styled.input`
  width: 85%;
  font-family: "Inria Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
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
