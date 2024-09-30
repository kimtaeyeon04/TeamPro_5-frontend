import React from "react";
import styled from "styled-components";
import search from "../../assets/icons/Header/search.png";

const SearchBar = ({ onChange, onClick }) => {
  return (
    <SearchBarContainer>
      <SearchBarWrapper>
        <SearchInput
          onChange={onChange}
          placeholder="제목, 공유자 이름 검색"
          spellCheck="false"
        />
        <SearchIconWrapper>
          <SearchIcon onClick={onClick} src={search} alt="search" />
        </SearchIconWrapper>
      </SearchBarWrapper>
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchBarWrapper = styled.div`
  width: 50%;
  height: 3em;
  border: 0.0625em solid #c8c8c8;
  box-shadow: 0em 0.125em 0.125em rgba(12, 12, 13, 0.1),
    0em 0.25em 0.25em rgba(12, 12, 13, 0.05);
  border-radius: 62.5em;
  display: flex;
  align-items: center;
  padding-left: 1.25em;
  float: right;
`;

const SearchInput = styled.input`
  width: 85%;
  font-family: "Inria Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.1em;
  color: #919194;
  border: none;
  outline: none;
  background: none;

  &::placeholder {
    font-size: 0.8em;
    text-indent: 0.2em;
  }
`;

const SearchIconWrapper = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SearchIcon = styled.img`
  width: 25%;
  border-radius: 50%;
`;
