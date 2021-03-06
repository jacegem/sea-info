// @flow
import React from "react";
import App from "./components/App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

type Props = {
  store: any
};

const Root = ({ store }: Props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
