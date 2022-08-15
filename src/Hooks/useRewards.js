// import core dependencies
import { useState, useEffect, useCallback } from "react";
import Config from "react-global-configuration";
import moment from "moment";

// import custom dependencies
import { assignUniqueID } from "./../components/Utils/appUtils";

function useRewards() {
  const [rewards, setRewards] = useState([]);
  
  const transactionsAPI = Config.get("transactionsAPI");

  const calculateRewards = (orderAmount) => {
    if (orderAmount <= 100) return orderAmount - 50 > 0 ? orderAmount - 50 : 0;
    else return 2 * (orderAmount - 100) + 50;
  };

  const customerObject = function () {
    return {
      customer: this.customer,
      purchases: [],
      rewards: { total: 0 },
    };
  };

  const purchaseObject = function () {
    return {
      key: assignUniqueID(),
      date: this.date,
      amount: this.amount,
    };
  };

  const refineTransactions = (purchases) => {
    const customerRewards = {};

    let { month, rewardAmount, customer } = {};

    purchases.forEach((trnx) => {
      month = moment(trnx.date).format("MMMM");
      rewardAmount = 0;

      if (!customerRewards[trnx.customer])
        customerRewards[trnx.customer] = customerObject.apply(trnx);

      customer = customerRewards[trnx.customer];

      customer.purchases.push(purchaseObject.apply(trnx));

      if (!customer.rewards[month]) customer.rewards[month] = 0;

      rewardAmount = calculateRewards(Math.round(trnx.amount));
      customer.rewards[month] += rewardAmount;
      customer.rewards.total += rewardAmount;
    });

    return customerRewards;
  };

  const fetchTransactions = useCallback(async () => {
    const transactionsData = await fetch(transactionsAPI);
    const transactions = await transactionsData.json();
    // setting rewards state
    setRewards(transactions);
  }, [transactionsAPI]);

  // hook calls only once
  useEffect(() => {
    fetchTransactions().catch(console.error);
  }, [fetchTransactions]);

  return [...Object.values(refineTransactions(rewards))];
}

export { useRewards };
