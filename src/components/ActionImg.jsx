import React, { useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import Travel from "../assets/Travel.jpg";

export default function ActionImg({ rotate, size, setSubmit, moveBoolean }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <>
      <ImgPosition>
        x: {position.x.toFixed(0)} / y: {position.y.toFixed(0)}
      </ImgPosition>
      <Draggable disabled={moveBoolean} onDrag={(e, data) => trackPos(data)}>
        <ImgWrapper>
          <Img rotate={rotate} size={size} ref={setSubmit} />
        </ImgWrapper>
      </Draggable>
    </>
  );
}

const ImgPosition = styled.div`
  margin: 30px;
`;

const ImgWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img.attrs({
  src: `${Travel}`,
})`
  position: relative;
  display: flex;
  width: 70%;
  height: auto;
  transform: ${(prop) => `rotate(${prop.rotate}deg) scale(${prop.size})`};
  :hover {
    cursor: pointer;
  }
`;
