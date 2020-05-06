import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";

import { initialState } from "redux/reducers/notificationReducer";
import { renderWithReduxCustomReducer } from "utils/unitTest";

import Snackbar from "components/SnackBar/index";

afterEach(cleanup);

describe("COMPONENT - Snackbar", () => {
  it("Snackbar - Test snackbar inactive", async (done) => {
    const testMessage = "Lorem";

    const { queryByTestId, queryByText } = renderWithReduxCustomReducer(
      <Snackbar />,
      {
        reducerName: "notification",
        initialState: { ...initialState, message: testMessage, active: false },
      }
    );

    expect(queryByTestId("snackbar")).not.toBeInTheDocument();
    expect(queryByText(testMessage)).toBeNull();

    done();
  });

  it("Snackbar - Test snackbar active with message", async (done) => {
    const testMessage = "Lorem";

    const { getByText, getByTestId } = renderWithReduxCustomReducer(
      <Snackbar />,
      {
        reducerName: "notification",
        initialState: { ...initialState, message: testMessage, active: true },
      }
    );

    expect(getByTestId("snackbar")).toBeInTheDocument();
    expect(getByText(testMessage)).toBeTruthy();

    done();
  });
});
