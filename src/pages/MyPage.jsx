import React from "react";
import styled from "styled-components";
import DashBoard from "../components/DashBoard";

function MyPage({ profilePicture, name, nickname }) {
  return <MyPageContainer className="MyPageContainer"></MyPageContainer>;
}

export default MyPage;

const MyPageContainer = styled.div`
  width: 85%; //수정중...
  min-height: 50vh;
  margin: 0 auto;
`;
