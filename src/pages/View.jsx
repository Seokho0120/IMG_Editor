import React, { useState } from "react";
import styled from "styled-components";
import Board from "./Board";

export default function View() {
  return (
    <Wrapper>
      <Board />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
