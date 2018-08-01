import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LivingMarine from "pages/LivingMarine";
import { injectGlobal } from "styled-components";

injectGlobal`
  body {
    background-color: ghostwhite;
    padding: 0;
    margin: 0;
    font-family: Nanumgothic;
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={LivingMarine} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
