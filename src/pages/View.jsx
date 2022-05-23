import React, { useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

import ButtonTools from "./ButtonTools";
import Board from "./Board";
import Travel from "../assets/Travel.jpg";

export default function View() {
  return (
    <Wrapper>
      <ButtonTools />
      <Board />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;
