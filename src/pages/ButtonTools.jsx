import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const BTN_NAME = ["이동", "회전", "사이즈변경", "Crop", "제출"];

export default function ButtonTools() {
  return (
    <ButtonWrapper>
      {BTN_NAME.map((btnItem, idx) => {
        return <Button key={btnItem + idx} text={btnItem} />;
      })}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
`;
