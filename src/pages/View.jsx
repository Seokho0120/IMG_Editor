import React from "react";
import ButtonTools from "./ButtonTools";
import Board from "./Board";
import styled from "styled-components";

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
