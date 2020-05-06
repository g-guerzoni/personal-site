import React from "react";
import { Provider } from "react-redux";
import Store from "redux/store";

import Routes from "./Routes";

const App = () => (
  <Provider store={Store}>
    <Routes />
  </Provider>
);

export default App;
