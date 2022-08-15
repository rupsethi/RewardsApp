import React from "react";
import { render, screen, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import moment from "moment";

import { RewardsContext } from "../../Contexts/RewardsContext";
import Transaction from "../Transactions/Transaction";
import { assignUniqueID } from "../Utils/appUtils";

const rendorComponent = (mockData) => {
  render(
    <MemoryRouter>
      <RewardsContext.Provider value={mockData}>
        <Transaction />
      </RewardsContext.Provider>
    </MemoryRouter>
  );
};

describe("<Transactions /> Component:", () => {
  it("Validate Transactions should render 'All Transactions'.", () => {
    // Preparation
    rendorComponent({
      reward: {
        customer: 1,
        purchases: [
          {
            key: assignUniqueID(),
            date: "2021-09-12",
            amount: 67.0,
          },
          {
            key: assignUniqueID(),
            date: "2021-10-12",
            amount: 156.1,
          },
          {
            key: assignUniqueID(),
            date: "2021-11-12",
            amount: 124.5,
          },
        ],
        rewards: { total: 278, September: 17, October: 162, November: 99 },
      },
    });

    // Assertion
    expect(
      screen.getByText("All Transactions", { exact: false })
    ).toBeInTheDocument();
  });

  it("Validate Transactions should render 'Expenditures are...'.", () => {
    // Preparation
    rendorComponent({
      reward: {
        customer: 1,
        purchases: [
          {
            key: assignUniqueID(),
            date: "2021-09-12",
            amount: 67.0,
          },
          {
            key: assignUniqueID(),
            date: "2021-10-12",
            amount: 156.1,
          },
          {
            key: assignUniqueID(),
            date: "2021-11-12",
            amount: 124.5,
          },
        ],
        rewards: { total: 278, September: 17, October: 162, November: 99 },
      },
    });

    // Assertion
    expect(screen.getAllByText("Expenditures are...")).toBeTruthy();
  });

  it("Validate 'Transaction Dates' rendered should matches the mock data.", () => {
    // Preparation
    const prepareProps = {
      reward: {
        customer: 7,
        purchases: [
          {
            key: assignUniqueID(),
            date: "2021-09-12",
            amount: 67.0,
          },
          {
            key: assignUniqueID(),
            date: "2021-10-24",
            amount: 156.1,
          },
          {
            key: assignUniqueID(),
            date: "2021-11-01",
            amount: 124.5,
          },
        ],
        rewards: { total: 278, September: 17, October: 162, November: 99 },
      },
    };

    rendorComponent(prepareProps);

    // Assertions
    prepareProps.reward.purchases.forEach((r) =>
      expect(
        screen.getByText(`${moment(r.date).format("DD MMM, YYYY")}`)
      ).toBeInTheDocument()
    );
  });

  it("Validate 'Transaction Amount' rendered should matches the mock data.", () => {
    // Preparation
    const prepareProps = {
      reward: {
        customer: 7,
        purchases: [
          {
            key: assignUniqueID(),
            date: "2021-09-12",
            amount: 67.0,
          },
          {
            key: assignUniqueID(),
            date: "2021-10-24",
            amount: 156.1,
          },
          {
            key: assignUniqueID(),
            date: "2021-11-01",
            amount: 124.7,
          },
        ],
        rewards: { total: 278, September: 17, October: 162, November: 99 },
      },
    };

    rendorComponent(prepareProps);

    // Assertions
    prepareProps.reward.purchases.forEach((r) =>
      expect(screen.getByText(`$${Math.round(r.amount)}`)).toBeInTheDocument()
    );
  });
});
