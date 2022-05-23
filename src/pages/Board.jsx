import React, { useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import Travel from "../assets/Travel.jpg";

export default function Board() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <BoardFrom>
      <Draggable onDrag={(e, data) => trackPos(data)}>
        <ImgWrapper>
          <ImgHandler>이미지 손잡이</ImgHandler>
          <Img src={Travel} />
          <ImgPosition>
            x: {position.x.toFixed(0)} / y: {position.y.toFixed(0)}
          </ImgPosition>
        </ImgWrapper>
      </Draggable>
    </BoardFrom>
  );
}

const BoardFrom = styled.div`
  margin-top: 50px;
  width: 1000px;
  height: 600px;
  display: flex;
  background-color: #efefef;
`;

const ImgWrapper = styled.div``;

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

const Img = styled.img`
  width: 50%;
  /* filter: grayscale(100%); */
  :hover {
    cursor: pointer;
  }
`;

const ImgPosition = styled.div`
  display: flex;
  justify-content: center;
  width: 12%;
  background-color: #ff8900;
  color: white;
  font-weight: bold;
`;
