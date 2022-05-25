import React, { useState } from "react";
import styled from "styled-components";
import ActionImg from "../components/ActionImg";
import ButtonTools from "./ButtonTools";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

export default function Board() {
  const [rotate, setRotate] = useState(0);
  const [size, setSize] = useState(1);
  const [submit, setSubmit] = useState();

  const rotateImg = () => {
    rotate === 360 ? setRotate(0) : setRotate((prev) => prev + 45);
  };

  const sizeChangeImg = () => {
    size === 10 ? setSize(0) : setSize((prev) => prev * 1.2);
  };

  const onDownloadBtn = () =>
    domtoimage.toBlob(submit).then((blob) => {
      saveAs(blob, "Travel.jpg");
    });

  return (
    <>
      <TopGray>
        <ButtonTools
          rotateImg={rotateImg}
          sizeChangeImg={sizeChangeImg}
          onDownloadBtn={onDownloadBtn}
        />
      </TopGray>
      <MidGray>
        <Left />
        <Mid>
          <ActionImg rotate={rotate} size={size} setSubmit={setSubmit} />
        </Mid>
        <Right />
      </MidGray>
      <BottomGray />
    </>
  );
}

const TopGray = styled.div`
  width: 100%;
  flex: 1;
  z-index: 100;
  backdrop-filter: grayscale(100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MidGray = styled.ul`
  width: 100%;
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const Left = styled.div`
  flex: 1;
  height: 100%;
  backdrop-filter: grayscale(100%);
  z-index: 100;
  list-style: none;
`;

const Mid = styled.div`
  flex: 1.5;
  height: 100%;
  background: #efefef;
  position: relative;
  list-style: none;
`;

const Right = styled.div`
  flex: 1;
  height: 100%;
  backdrop-filter: grayscale(100%);
  z-index: 100;
  list-style: none;
`;

const BottomGray = styled.div`
  width: 100%;
  flex: 1;
  z-index: 100;
  backdrop-filter: grayscale(100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const BoardFrom = styled.div`
//   margin-top: 30px;
//   width: 800px;
//   height: 400px;
//   display: flex;
//   background-color: #efefef;
//   overflow: hidden;
// `;
