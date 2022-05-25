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
      <Draggable
        disabled={moveBoolean} // true가 되면 드래그 안됨
        onDrag={(e, data) => trackPos(data)}
      >
        <ImgWrapper>
          {/* <ImgHandler>이미지 손잡이</ImgHandler> */}
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

const ImgHandler = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ff8900;
  color: white;
  width: 10%;
  height: 10%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

/* filter: grayscale(100%); */
// background-color: ${(props) => (props.danger ? '#e74c3c' : '2ecc71')};
