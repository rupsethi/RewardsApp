// import core dependencies
import React from "react";

// import custom dependencies
import { RewardsContext } from "../../Contexts/RewardsContext";
import Card from "../UI/Card";
import Customer from "../Customers/Customer";
import CustomerRewards from "../Customers/CustomerRewards";

// import component stylesheet
import "./RewardsDashboard.css";

const RewardsDashboard = () => {
  const rewards = [
    {
      customer: 1,
      purchases: [
        { tid: "11", date: "2022-07-01", amount: 38.87 },
        { tid: "12", date: "2022-06-09", amount: 116.5 },
      ],
      rewards: { total: 84, July: 0, June: 84 },
    },
    {
      customer: 2,
      purchases: [
        { tid: "21", date: "2022-08-06", amount: 67.29 },
      ],
      rewards: { total: 17, August: 17 },
    },
  ];

  let customerContent = <p>No customers found.</p>;

  if (rewards.length > 0) {
    customerContent = rewards.map((reward) => (
      <RewardsContext.Provider key={reward.customer} value={{ reward }}>
        <Customer>
          <CustomerRewards />
        </Customer>
      </RewardsContext.Provider>
    ));
  }

  // return JSX syntactic sugar for React.createElement
  return <Card className="reward-dashboard">{customerContent}</Card>;
};

export default RewardsDashboard;
