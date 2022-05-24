import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const BTN_NAME = ["이동", "회전", "사이즈변경", "Crop", "제출"];

export default function ButtonTools({
  rotateImg,
  sizeChangeImg,
  onDownloadBtn,
}) {
  const activeImg = (e) => {
    console.log(e.target.innerText);
    e.target.innerText === "이동" && rotateImg(); // 이동이 찍히면 true
    e.target.innerText === "회전" && rotateImg();
    e.target.innerText === "사이즈변경" && sizeChangeImg();
    e.target.innerText === "제출" && onDownloadBtn();
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
