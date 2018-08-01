import React, { Component } from "react";
import Header from "components/base/Header";
import styled from "styled-components";

const DivLivingMarine = styled.div`
  min-width: 500px;
`;

export default class LivingMarine extends Component {
  render() {
    return (
      <DivLivingMarine>
        <Header />
        생활해양예보지수
      </DivLivingMarine>
    );
  }
}
