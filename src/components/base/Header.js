// @flow
import React, { Component } from "react";
import styled from "styled-components";

const DivHeader = styled.div`
  height: 100%;
  color: white;
  display: flex;
  align-items: center; /* align vertical */
  padding-left: 10px;
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

    return <DivHeader>#Header - {title}</DivHeader>;
  }
}
