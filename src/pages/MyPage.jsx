import React from "react";
import styled from "styled-components";
import DashBoard from "../components/DashBoard";
import SelectButton from "../components/commmon/SelectBox";

function MyPage({ profilePicture, name, nickname }) {
  return (
    <MyPageContainer className="MyPageContainer">
      <div>
        <DashBoard
          profilePicture={profilePicture}
          name={name}
          nickname={nickname}
        />
      </div>

      <MyTemplateContainer className="MyTempalteContainer">
        <MyTemplateTitle className="MyTemplateTitle">내 템플릿</MyTemplateTitle>
        <div>
          <SelectButton />
        </div>
      </MyTemplateContainer>
    </MyPageContainer>
  );
}

export default MyPage;

const MyPageContainer = styled.div`
  width: 85%; //수정중...
  min-height: 80vh;
  margin: 0 auto;
`;

const MyTemplateContainer = styled.div`
  position: relative;
  top: 80px;
`;

const MyTemplateTitle = styled.div`
  height: 42px;
  top: 182px;
  font-family: "Inria Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.4px;
  color: #000000;
`;
