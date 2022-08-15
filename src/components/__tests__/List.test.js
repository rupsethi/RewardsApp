import { render, screen } from "@testing-library/react";
import List from "../UI/List";

describe("<List /> Component:", () => {
  it("Validate 'title','reward' and 'text' are required prop-types'.", () => {
    // Props are JSON objects so but default it assigns null is value is empty
    try {
      render(<List title="July" reward="$102" text="spent" />);
    } catch (e) {
      throw new TypeError();
    }

    // Assertions
    expect(screen.getByText("July")).toBeInTheDocument();
    expect(screen.getByText("$102")).toBeInTheDocument();
    expect(screen.getByText("spent", { exact: false })).toBeInTheDocument();
  });

  it("Validate 'title','reward' and 'text' accepts empty values.", (done) => {
    // Props are JSON objects so but default it assigns null is value is empty
    try {
      render(<List title="" reward="" text="" />);
    } catch (e) {
      throw new TypeError();
    }

    // Assertion
    done();
  });
});
