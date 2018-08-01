import React, { Component } from "react";
import styled from "styled-components";

const DivHeader = styled.div`
  width: 100%;
  height: 50px;
  background-color: #c9a9c9;
`;

export default class Header extends Component {
  render() {
    return <DivHeader>This is Header</DivHeader>;
  }
}
