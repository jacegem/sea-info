import React, { Component } from "react";
import styled from "styled-components";

const DivHeader = styled.div`
  width: 100%;
  background-color: #c9a9c9;
  ${({ height }) => (height ? `height: ${height}px` : null)};
`;

export default class Header extends Component {
  render() {
    const { title, height } = this.props;
    return <DivHeader height={height}>#Header - {title}</DivHeader>;
  }
}
