import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IconContext } from "react-icons";
import styled from "styled-components";

const CenteredDiv = styled.div`
  text-align: center;
`;

function Loading() {
  return (
    <CenteredDiv>
      <IconContext.Provider
        value={{ color: "rgb(12, 53, 115)", size: "3em", padding: "5%" }}
      >
        <div>
          <AiOutlineLoading3Quarters style={{ margin: "15%" }} />
        </div>
      </IconContext.Provider>
    </CenteredDiv>
  );
}

export default Loading;
