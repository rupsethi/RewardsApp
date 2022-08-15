// import core dependencies
import React, { useState } from "react";
import { useParams } from "react-router-dom";

// import custom dependencies
import { useRewards } from "../../Hooks/useRewards";
import { RewardsContext } from "../../Contexts/RewardsContext";
import Card from "../UI/Card";
import Customer from "../Customers/Customer";
import CustomerRewards from "../Customers/CustomerRewards";
import CustomerFilter from "../Customers/CustomerFilter";

// import component stylesheet
import "./RewardsDashboard.css";

const RewardsDashboard = () => {
  const [filteredCustomer, setFilteredCustomer] = useState(-1);

  const rewards = useRewards();

  const onChangeHandler = (filteredCustomer) => {
    setFilteredCustomer(filteredCustomer);
  };

  const { customerId } = useParams();

  let customerContent = <p>No customer found.</p>;

  if (rewards.length > 0) {
    customerContent = rewards
      .filter((r) =>
      customerId
          ? r.customer === Number(customerId)
          : r.customer === filteredCustomer || filteredCustomer === -1
      )
      .map((reward) => (
        <RewardsContext.Provider key={reward.customer} value={{ reward }}>
          <Customer>
            <CustomerRewards />
          </Customer>
        </RewardsContext.Provider>
      ));
  }

  // return JSX syntactic sugar for React.createElement
  return (
    <Card className="reward-dashboard">
      <CustomerFilter
        rewards={rewards}
        selected={filteredCustomer}
        onChangeFilter={onChangeHandler}
      />
      {customerContent}
    </Card>
  );
};

export default RewardsDashboard;
