import { render, screen } from "@testing-library/react";

import Card from "./../UI/Card";

describe("<Card /> Component:", () => {
  it("Validate 'className' and 'childname' are required prop-types.", () => {
    // Preparation
    try {
      render(
        <Card className="test">
          Child content
        </Card>
      );
    } catch (e) {
      throw new TypeError();
    }

    // Assertion
    expect(screen.getByTestId("card-content").innerHTML).toBe("Child content");
  });

  it("Validate 'className' and 'childname' accepts empty values.", (done) => {
    // Preparation
    try {
      render(
        <Card className="">
          <></>
        </Card>
      );
    } catch (e) {
      throw new TypeError();
    }

    // Assertion
    done();
  });
});
