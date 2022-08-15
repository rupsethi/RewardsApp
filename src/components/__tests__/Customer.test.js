import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { RewardsContext } from "../../Contexts/RewardsContext";
import Customer from "../Customers/Customer";

const rendorComponent = (mockData) => {
  render(
    <RewardsContext.Provider value={mockData}>
      <Customer>
        <div></div>
      </Customer>
    </RewardsContext.Provider>
  );
};

describe("<Customer /> Component:", () => {
  it("Validate 'Customer' rendered should match the mock data.", () => {
    // Preparation
    const prepareProps = {
      reward: {
        customer: 2,
        purchases: [],
        rewards: { total: 278, September: 17, October: 162, November: 99 },
      },
    };

    rendorComponent(prepareProps);

    // Assertion
    const customerLabels = screen.getAllByTestId("customer-label");
    customerLabels.forEach((l, i) =>
      expect(l.innerHTML).toBe(`Customer ${prepareProps.reward.customer}`)
    );
  });

  it("Validate 'Total Points Earned' rendered should matches the mock Data.", () => {
    // Preparation
    const prepareProps = {
      reward: {
        customer: 5,
        purchases: [],
        rewards: { total: 244, September: 17, October: 162, November: 99 },
      },
    };

    rendorComponent(prepareProps);

    // Assertion
    const customerLabels = screen.getAllByTestId("customer-total-rewards");
    customerLabels.forEach((l, i) =>
      expect(l.innerHTML).toBe(`${prepareProps.reward.rewards.total}`)
    );
  });
});
