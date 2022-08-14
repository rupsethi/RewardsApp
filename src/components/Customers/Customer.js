// import core dependencies
import React, { useContext } from "react";
import PropTypes from "prop-types";

// import custom dependencies
import { RewardsContext } from "../../Contexts/RewardsContext";
import Card from "./../UI/Card";

// import component stylesheet
import "./Customer.css";

const Customer = ({ children }) => {
  const { reward } = useContext(RewardsContext);
  
  // return JSX syntactic sugar for React.createElement
  return (
    <li className="customer-list-item">
      <Card className="customer">
        <div className="customer-description">
          <h2 className="customer-title" data-testid="customer-label">Customer {reward.customer}</h2>
          <div className="customer-points-text" >Total Points Earned:</div>
          <div className="customer-points" data-testid="customer-total-rewards">{reward.rewards.total}</div>
        </div>
        {children}
      </Card>
    </li>
  );
};

// Restricting prop types
Customer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Customer;
