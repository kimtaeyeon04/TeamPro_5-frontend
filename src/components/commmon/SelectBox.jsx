import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../../assets/icons/SelectBox/arrow.png";

const categories = ["프론트엔드", "백엔드", "디자인"];
const sortOptions = ["인기순", "추천수", "최신순"];
const filterOptions = [
  "경력",
  "있음",
  "없음",
  "언어",
  "Java",
  "Python",
  "JavaScript",
  "학력",
  "학사",
  "석사",
  "박사",
];

const SelectBox = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleCategoryClick = (option) => {
    selectedCategory === option
      ? setSelectedCategory(null)
      : setSelectedCategory(option);
    setIsCategoryOpen(false);
  };

  const handleSortClick = (option) => {
    selectedSort === option ? setSelectedSort(null) : setSelectedSort(option);
    setIsSortOpen(false);
  };

  const handleFilterClick = (option) => {
    selectedFilter === option
      ? setSelectedFilter(null)
      : setSelectedFilter(option);
    setIsFilterOpen(false);
  };

  return (
    <SelectContainer>
      {/* 카테고리 */}
      <SelectWrapper>
        <SelectButton
          onClick={() => {
            setIsCategoryOpen(!isCategoryOpen);
            setIsSortOpen(false);
            setIsFilterOpen(false);
          }}
        >
          {selectedCategory ? selectedCategory : "카테고리"}
          <ArrowImg src={arrow} alt="arrow" />
        </SelectButton>
        <SelectMenu isOpen={isCategoryOpen}>
          {categories.map((item, index) => (
            <SelectItem
              key={index}
              className={selectedCategory === item ? "highlight" : ""}
              onClick={() => handleCategoryClick(item)}
            >
              {item}
            </SelectItem>
          ))}
        </SelectMenu>
      </SelectWrapper>

      {/* 정렬 */}
      <SelectWrapper>
        <SelectButton
          onClick={() => {
            setIsSortOpen(!isSortOpen);
            setIsCategoryOpen(false);
            setIsFilterOpen(false);
          }}
        >
          {selectedSort ? selectedSort : "정렬"}
          <ArrowImg src={arrow} alt="arrow" />
        </SelectButton>
        <SelectMenu isOpen={isSortOpen}>
          {sortOptions.map((item, index) => (
            <SelectItem
              key={index}
              className={selectedSort === item ? "highlight" : ""}
              onClick={() => handleSortClick(item)}
            >
              {item}
            </SelectItem>
          ))}
        </SelectMenu>
      </SelectWrapper>

      {/* 필터 */}
      <SelectWrapper>
        <SelectButton
          onClick={() => {
            setIsFilterOpen(!isFilterOpen);
            setIsCategoryOpen(false);
            setIsSortOpen(false);
          }}
        >
          {selectedFilter ? selectedFilter : "필터"}
          <ArrowImg src={arrow} alt="arrow" />
        </SelectButton>
        <SelectMenu isOpen={isFilterOpen}>
          {filterOptions.map((item, index) =>
            item === "경력" || item === "언어" || item === "학력" ? (
              <SelectFilterMenu key={index}>{item}</SelectFilterMenu>
            ) : (
              <SelectItem
                key={index}
                className={selectedFilter === item ? "highlight" : ""}
                onClick={() => handleFilterClick(item)}
              >
                {item}
              </SelectItem>
            )
          )}
        </SelectMenu>
      </SelectWrapper>
    </SelectContainer>
  );
};

export default SelectBox;

const SelectContainer = styled.div`
  display: flex;
  margin-top: 10px;
  font-weight: 700;
  width: 50%;
`;

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
  width: 20%;
`;

const SelectButton = styled.button`
  background-color: white;
  border: 2px solid #d0d1d9;
  border-radius: 12px;
  padding: 10px 0px;
  font-size: 14px;
  color: #d0d1d9;
  cursor: pointer;
  text-align: center;
  width: 80%;
  float: left;
`;

const ArrowImg = styled.img`
  width: 15%;
  margin-left: 20px;
`;

const SelectMenu = styled.div`
  position: absolute;
  top: 100%;
  background-color: #15243e80;
  border-radius: 10px;
  width: 150px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 1;
`;

const SelectFilterMenu = styled.div`
  margin: 10px;
  padding: 10px;
  color: white;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d0d1d9;
  border-radius: 10px;
`;

const SelectItem = styled.div`
  margin: 10px;
  padding: 10px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    margin: 10px;
    border: 2px solid #ffffff;
    border-radius: 10px;
  }

  &:last-child {
    border-bottom: none;
  }

  &.highlight {
    border: 1px solid white;
    border-radius: 8px;
    padding: 12px;
    font-weight: bold;
  }
`;
