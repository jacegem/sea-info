// @flow
import React, { Component } from "react";
import styled from "styled-components";

const DivHeader = styled.div`
  width: 100%;
  background-color: #c9a9c9;
  ${({ height }) => (height ? `height: ${height}px` : null)};
`;

type Props = {
  title: string,
  height?: number
};
type State = {
  // bar: number
};

export default class Header extends Component<Props, State> {
  render() {
    const { title, height } = this.props;

    return <div>#Header - {title}</div>;
  }
}
