import React from "react";
import styled from "styled-components";

export default function Board() {
  return <BoardFrom />;
}

const BoardFrom = styled.div`
  margin-top: 30px;
  width: 800px;
  height: 400px;
  display: flex;
  background-color: #efefef;
  overflow: hidden;
`;

// overflow: {
//   filter: grayscale(50%);
// }
