import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const BTN_NAME = ["이동", "회전", "사이즈변경", "Crop", "제출"];

export default function ButtonTools({
  rotateImg,
  sizeChangeImg,
  DownloadImg,
  activeMove,
  activeCrop,
  cropImageNow,
}) {
  const activeImg = (e) => {
    console.log(e.target.innerText);
    e.target.innerText === "이동" && activeMove();
    e.target.innerText === "회전" && rotateImg();
    e.target.innerText === "사이즈변경" && sizeChangeImg();
    e.target.innerText === "Crop" && activeCrop();
    e.target.innerText === "제출" && DownloadImg();
  };

  return (
    <ButtonWrapper>
      {BTN_NAME.map((btnName, idx) => {
        return (
          <Button key={btnName + idx} text={btnName} onClick={activeImg} />
        );
      })}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
`;
