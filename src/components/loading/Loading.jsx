import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IconContext } from "react-icons";
import styled from "styled-components";

function Loading() {
  const CenteredDiv = styled.div`
    padding: 2%;
    text-align: center;
  `;
  return (
    <CenteredDiv>
      <IconContext.Provider value={{ color: "rgb(12, 53, 115)", size: "5em" }}>
        <div>
          <AiOutlineLoading3Quarters />
        </div>
      </IconContext.Provider>
    </CenteredDiv>
  );
}

export default Loading;
