import React from "react";
import { render, screen, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import { useRewards } from "../../Hooks/useRewards";
import RewardsDashboard from "../Rewards/RewardsDashboard";

const jsonFeed = require("./mockAPIData.json");

// Hooks in to my my component
jest.mock("../../Hooks/useRewards", () => ({
  ...jest.requireActual("../../Hooks/useRewards"),
  useRewards: jest.fn(),
}));

describe("<RewardsDashboard /> Component:", () => {
  it("Validate 'Filter' should render.", () => {
    useRewards.mockImplementation(() => [...jsonFeed]);

    // Preparation
    render(
      <MemoryRouter>
        <RewardsDashboard />
      </MemoryRouter>
    );

    // Assertion
    expect(screen.getByTestId("select")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "All" }).selected).toBe(true);
    expect(screen.getByRole("option", { name: "Customer 1" }).selected).toBe(
      false
    );
    expect(screen.getByRole("option", { name: "Customer 2" }).selected).toBe(
      false
    );
    expect(screen.getByRole("option", { name: "Customer 3" }).selected).toBe(
      false
    );
  });

  it("Validate complete 'Customers' list should render.", () => {
    useRewards.mockImplementation(() => [...jsonFeed]);

    // Preparation
    render(
      <MemoryRouter>
        <RewardsDashboard />
      </MemoryRouter>
    );

    // Assertion
    const customerLabels = screen.getAllByTestId("customer-label");
    customerLabels.forEach((l, i) =>
      expect(l.innerHTML).toBe(`Customer ${jsonFeed[i].customer}`)
    );
  });
});
