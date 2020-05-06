import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import store from "redux/store";
import reducers from "redux/reducers";

export const simpleRender = (component) => {
  return render(component);
};

export const renderWithReduxAllReducers = (component) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

export const renderWithReduxCustomReducer = (
  component,
  { reducerName, initialState } = {}
) => {
  if (!reducers[reducerName]) throw Error("Invalid reducer name");
  const customStore = createStore(reducers[reducerName], {
    [reducerName]: { ...initialState },
  });

  return {
    ...render(<Provider store={customStore}>{component}</Provider>),
    customStore,
  };
};
