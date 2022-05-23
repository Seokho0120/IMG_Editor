import React from "react";
import styled from "styled-components";

export default function Button({ text }) {
  return <EditBtnFrom>{text}</EditBtnFrom>;
}

const EditBtnFrom = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 6px 10px 6px 10px;
  margin-right: 20px;
  border: 1px solid #ff8900;
  border-radius: 3px;
  color: #ff7900;
  background-color: #fff;
  font-weight: bold;
`;
