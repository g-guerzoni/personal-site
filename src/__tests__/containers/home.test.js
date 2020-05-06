import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { cleanup, fireEvent, waitFor } from "@testing-library/react";

import { renderWithReduxAllReducers } from "utils/unitTest";

import Home from "containers/Home/index";

afterEach(cleanup);

describe("CONTAINER - Home", () => {
  it("Home - Test error message field empty", async (done) => {
    const { getByTestId } = renderWithReduxAllReducers(<Home />);

    fireEvent.click(getByTestId("home-btn-subscribe"));

    await waitFor(() =>
      expect(getByTestId("home-error-message")).toBeInTheDocument()
    );

    done();
  });

  it("Home - Test error message invalid email filled", async (done) => {
    const { getByTestId } = renderWithReduxAllReducers(<Home />);

    await userEvent.type(getByTestId("home-input-email"), "fake@email");

    fireEvent.click(getByTestId("home-btn-subscribe"));

    await waitFor(() =>
      expect(getByTestId("home-error-message")).toBeInTheDocument()
    );

    done();
  });

  it("Home - Test valid email filled", async (done) => {
    const { queryByTestId, getByTestId } = renderWithReduxAllReducers(<Home />);

    await userEvent.type(getByTestId("home-input-email"), "test@gmail.com");

    fireEvent.click(getByTestId("home-btn-subscribe"));

    await waitFor(() =>
      expect(queryByTestId("home-error-message")).not.toBeInTheDocument()
    );

    done();
  });
});
