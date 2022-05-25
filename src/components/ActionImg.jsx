import React, { useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import Travel from "../assets/Travel.jpg";

export default function ActionImg({ rotate, size, setSubmit }) {
  // const [crop, setCrop] = useState({ aspect: 16 / 9 });
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

  return (
    <>
      <ImgPosition>
        x: {position.x.toFixed(0)} / y: {position.y.toFixed(0)}
      </ImgPosition>
      <Draggable
        disabled={false} // true가 되면 드래그 안됨
        onDrag={(e, data) => trackPos(data)}
        // onStart={handleStart}
        // onStop={handleEnd}
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

const ImgHandler = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ff8900;
  color: white;
  width: 10%;
  height: 10%;
  :hover {
    cursor: pointer;
  }
`;

const Img = styled.img.attrs({
  src: `${Travel}`,
})`
  position: relative;
  display: flex;
  width: 50%;
  height: auto;
  transform: ${(prop) => `rotate(${prop.rotate}deg) scale(${prop.size})`};

  :hover {
    cursor: pointer;
  }
`;

/* filter: grayscale(100%); */
// background-color: ${(props) => (props.danger ? '#e74c3c' : '2ecc71')};
