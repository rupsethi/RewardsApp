// import core dependencies
import React, { useContext } from "react";
import moment from "moment";

// import custom dependencies
import { RewardsContext } from "../../Contexts/RewardsContext";
import Card from "../UI/Card";
import List from "../UI/List";

// import component stylesheet
import "./Transaction.css";

const Transaction = () => {
  const { reward } = useContext(RewardsContext);

  // return JSX syntactic sugar for React.createElement
  return (
    <Card className="transactions">
      <h2 className="transactions-title">All Transactions:</h2>
      {reward.purchases.map((purchase) => (
        <List
          key={purchase.key}
          title={moment(purchase.date).format("DD MMM, YYYY")}
          reward={`$${Math.round(purchase.amount)}`}
          text="Expenditures"
        />
      ))}
    </Card>
  );
};

export default Transaction;
