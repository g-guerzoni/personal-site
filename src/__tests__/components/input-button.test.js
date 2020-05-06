import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent } from "@testing-library/react";

import { simpleRender } from "utils/unitTest";

import Button from "components/inputs/Button/index";
import Loading from "components/Loading";

afterEach(cleanup);

describe("COMPONENT - Input Button", () => {
  it("Input Button - Test button text", async (done) => {
    const btnText = "Click";
    const { getByRole } = simpleRender(
      <Button onClick={() => {}}>{btnText}</Button>
    );

    expect(getByRole("button").firstChild).toHaveTextContent(btnText);

    done();
  });

  it("Input Button - Test button click", async (done) => {
    const onClick = jest.fn();
    const { getByRole } = simpleRender(
      <Button onClick={onClick}>Click</Button>
    );

    fireEvent.click(getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);

    done();
  });

  it("Input Button - Test button loading animation", async (done) => {
    const btnText = "Click";
    const { container } = simpleRender(<Loading />);
    const { getByRole } = simpleRender(
      <Button loading onClick={() => {}}>
        {btnText}
      </Button>
    );

    expect(getByRole("button").firstChild).not.toHaveTextContent(btnText);
    expect(getByRole("button").firstChild).toContainHTML(container.innerHTML);

    done();
  });
});
