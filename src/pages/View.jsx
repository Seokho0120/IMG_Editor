import React, { useState } from "react";
import styled from "styled-components";

import ButtonTools from "./ButtonTools";
import Board from "./Board";
import ActionImg from "../components/ActionImg";

export default function View() {
  const [rotate, setRotate] = useState(0);

  const rotateImg = () => {
    rotate === 360 ? setRotate(0) : setRotate((prev) => prev + 45);
  };

  return (
    <Wrapper>
      <ButtonTools rotateImg={rotateImg} />
      <Board />
      <ActionImg rotate={rotate} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px;
`;
