import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";

import { simpleRender } from "utils/unitTest";

import If from "components/If";

afterEach(cleanup);

describe("COMPONENT - If", () => {
  it("If - Test if render correctly", async (done) => {
    const text = "Test";
    const div = <div>{text}</div>;
    const renderDiv = simpleRender(div);

    const falseCondition = simpleRender(<If condition={false}>{div}</If>);
    const trueCondition = simpleRender(<If condition={true}>{div}</If>);

    expect(trueCondition.container).toContainHTML(
      renderDiv.container.innerHTML
    );
    expect(falseCondition.container).not.toContainHTML(
      renderDiv.container.innerHTML
    );

    done();
  });
});
