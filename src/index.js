import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import Root from "./Root";
import store from "./store";
import { AppContainer } from "react-hot-loader";
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById("root")
  );

render(Root);

if (module.hot) {
  module.hot.accept("./Root", () => render(Root));
}

registerServiceWorker();
