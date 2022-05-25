import React, { useState } from "react";
import styled from "styled-components";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import ReactCrop from "react-image-crop";
import ButtonTools from "./ButtonTools";
import "react-image-crop/dist/ReactCrop.css";
import ActionImg from "../components/ActionImg";

export default function Board() {
  const [crop, setCrop] = useState({ aspect: 16 / 9 });
  const [moveBoolean, setMoveBoolean] = useState(true);
  const [rotate, setRotate] = useState(0);
  const [size, setSize] = useState(1);
  const [cropBoolean, setCropBoolean] = useState(true);
  const [submit, setSubmit] = useState();

  const activeMove = () => {
    moveBoolean === true ? setMoveBoolean(false) : setMoveBoolean(true);
  };

  const rotateImg = () => {
    rotate === 360 ? setRotate(0) : setRotate((prev) => prev + 45);
  };

  const sizeChangeImg = () => {
    size === 10 ? setSize(0) : setSize((prev) => prev * 1.2);
  };

  const activeCrop = () => {
    cropBoolean === true ? setCropBoolean(false) : setCropBoolean(true);
  };

  const DownloadImg = () =>
    domtoimage.toBlob(submit).then((blob) => {
      saveAs(blob, "Travel.jpg");
    });

  return (
    <ReactCrop
      disabled={cropBoolean}
      crop={crop}
      onChange={(newCrop) => setCrop(newCrop)}
      // onDragEnd={DownloadImg}
    >
      <Wrapper>
        <TopGray>
          <ButtonTools
            rotateImg={rotateImg}
            sizeChangeImg={sizeChangeImg}
            DownloadImg={DownloadImg}
            activeMove={activeMove}
            activeCrop={activeCrop}
          />
        </TopGray>
        <MidGray>
          <Left />
          <Mid>
            <ActionImg
              rotate={rotate}
              size={size}
              setSubmit={setSubmit}
              moveBoolean={moveBoolean}
            />
          </Mid>
          <Right />
        </MidGray>
        <BottomGray />
      </Wrapper>
    </ReactCrop>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

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
