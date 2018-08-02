// @flow
import React, { Component } from "react";
import Header from "components/base/Header";
import styled from "styled-components";
import DaumMap from "components/map/DaumMap";

const DivLivingMarine = styled.div`min-width: 500px;`;

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

type Props = {};
type State = {};

export default class LivingMarine extends Component<Props, State> {
  render() {
    const headerHeight = 30;
    const sideWidth = 300;
    const restHeight = headerHeight;

    return (
      <DivLivingMarine>
        <Header title={"생활해양예보지수"} height={headerHeight} />
        <DivFlex restHeight={restHeight}>
          <DivFlexItem basis={sideWidth}>
            <div>검색바</div>
            <div>선택 콤보</div>
            <div>결과 리스트</div>
          </DivFlexItem>
          <DivFlexItem grow={1}>
            <DaumMap restHeight={headerHeight} />
          </DivFlexItem>
        </DivFlex>
      </DivLivingMarine>
    );
  }
}
