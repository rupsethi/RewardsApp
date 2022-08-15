import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import CustomerFilter from "../Customers/CustomerFilter";

const rendorComponent = (mockData) => {
  render(
    <CustomerFilter
      rewards={mockData.rewards}
      selected={mockData.selected}
      onChangeFilter={mockData.onChangeFilter}
    />
  );
};

describe("<CustomerFIlter /> Component:", () => {
  it("Validate 'Customer Filter' should be rendered.", () => {
    rendorComponent({
      rewards: [],
      selected: -1,
      onChangeFilter: () => {},
    });

    // Assertion
    expect(screen.getByText("Customer Filter:")).toBeInTheDocument();
    expect(screen.getByTestId("select")).toBeInTheDocument();
    const customerLabels = screen.getAllByTestId("select-option");
    customerLabels.forEach((l) => expect(l.innerHTML).toBe(`All`));
  });

  it("Validate 'combobox <option />' should render all options based on the mock data.", () => {
    const prepareProps = {
      rewards: [
        {
          customer: 1,
        },
        {
          customer: 2,
        },
        {
          customer: 3,
        },
      ],
      selected: -1,
      onChangeFilter: () => {},
    };

    rendorComponent(prepareProps);

    // Assertion
    const customerLabels = screen.getAllByTestId("select-option");
    const refinedLabels = ["All"];
    prepareProps.rewards.forEach((r) =>
      refinedLabels.push(`Customer ${r.customer}`)
    );
    customerLabels.forEach((l, i) =>
      expect(l.innerHTML).toBe(refinedLabels[i])
    );
  });

  test("Validate 'combobox <option />' can be selected/changed.", () => {
    const prepareProps = {
      rewards: [
        {
          customer: 1,
        },
        {
          customer: 2,
        },
        {
          customer: 3,
        },
      ],
      selected: 3,
      onChangeFilter: () => {},
    };

    rendorComponent(prepareProps);

    expect(screen.getByRole("option", { name: "Customer 3" }).selected).toBe(
      true
    );
  });
});
