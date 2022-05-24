import React, { useState } from "react";
import styled from "styled-components";

import ButtonTools from "./ButtonTools";
import Board from "./Board";
import ActionImg from "../components/ActionImg";

export default function View() {
  const [rotate, setRotate] = useState(0);
  const [size, setSize] = useState(1);

  const rotateImg = () => {
    rotate === 360 ? setRotate(0) : setRotate((prev) => prev + 45);
  };

  const sizeChangeImg = () => {
    size === 100 ? setSize(0) : setSize((prev) => prev * 1.2);
  };

  return (
    <Wrapper>
      <ButtonTools rotateImg={rotateImg} sizeChangeImg={sizeChangeImg} />
      <Board />
      <ActionImg rotate={rotate} size={size} />
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
