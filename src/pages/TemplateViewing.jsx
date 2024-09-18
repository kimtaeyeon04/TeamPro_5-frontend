import React from "react";
import styled from "styled-components";
import SearchBar from "../components/commmon/SearchBar";

function TemplateViewing() {
  return (
    <TemplateViewingContainer className="TemplateViewingContainer">
      <SearchBar />
    </TemplateViewingContainer>
  );
}

export default TemplateViewing;

const TemplateViewingContainer = styled.div`
  width: 85%; //수정중...
  min-height: 80vh;
  margin: 0 auto;
`;
