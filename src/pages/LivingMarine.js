import React, { Component } from "react";
import Header from "components/base/Header";
import styled from "styled-components";

const DivLivingMarine = styled.div`
  min-width: 500px;
`;

const DivFlex = styled.div`
  display: flex;
  ${({ restHeight }) =>
    restHeight ? `height: calc(100vh - ${restHeight}px)` : "height: 100vh"};
`;

const DivFlexItem = styled.div`
  ${({ basis }) => (basis ? `flex-basis: ${basis}px` : null)};
  ${({ grow }) => (grow ? `flex-grow: ${grow}` : null)};
  border: 1px solid gray;
`;

export default class LivingMarine extends Component {
  render() {
    const headerHeight = 30;
    const sideWidth = 300;

    return (
      <DivLivingMarine>
        <Header title={"생활해양예보지수"} height={headerHeight} />
        <DivFlex restHeight={headerHeight}>
          <DivFlexItem basis={sideWidth}>1.생활해양예보지수</DivFlexItem>
          <DivFlexItem grow={1}>2.맵</DivFlexItem>
        </DivFlex>
      </DivLivingMarine>
    );
  }
}
