import React, { useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import Travel from "../assets/Travel.jpg";

export default function ActionImg({ rotate }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [Filter, setOpacity] = useState(false);

  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const handleStart = () => {
    setOpacity(true);
  };

  const handleEnd = () => {
    setOpacity(false);
  };

  // filter: grayscale(50%);
  // const handleStart = () => {
  //   setOpacity(true);
  // };

  // const handleEnd = () => {
  //   setOpacity(false);
  // };
  return (
    <>
      <ImgPosition>
        x: {position.x.toFixed(0)} / y: {position.y.toFixed(0)}
      </ImgPosition>
      <Draggable
        onDrag={(e, data) => trackPos(data)}
        onStart={handleStart}
        onStop={handleEnd}
      >
        <ImgWrapper
          style={{ filter: Filter ? "grayscale(50%)" : "grayscale(0%)" }}
        >
          <ImgHandler>이미지 손잡이</ImgHandler>
          <Img degSize={rotate} />
        </ImgWrapper>
      </Draggable>
    </>
  );
}

const ImgPosition = styled.div`
  margin-top: 30px;
`;

const ImgWrapper = styled.div`
  position: absolute;
`;
// 만약 ImgWrapper와 boardForm의 밖으로 나간다면 opacity가 바뀜
// ImgWrapper ? ImgWrapper안에 있으면 true : ImgWrapper밖에 있으면 False

const ImgHandler = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ff8900;
  color: white;
  width: 10%;
  :hover {
    cursor: pointer;
  }
`;

const Img = styled.img.attrs({
  src: `${Travel}`,
})`
  position: relative;
  width: 30%;
  height: auto;
  transform: ${(prop) => `rotate(${prop.degSize}deg)`};
  :hover {
    cursor: pointer;
  }
  /* transform: rotate(45deg); */
  /* filter: grayscale(100%); */
`;
