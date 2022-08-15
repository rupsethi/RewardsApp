// import core dependencies
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import PropTypes from "prop-types";

// import custom dependencies
import Card from "./../UI/Card";
import { assignUniqueID } from "../Utils/appUtils";

// import component stylesheet
import "./CustomerFilter.css";

function CustomerFilter({ rewards, selected, onChangeFilter }) {
  const { customerId } = useParams();

  const onChangeHandler = (event) => onChangeFilter(Number(event.target.value));

  let filterContent = (
    <div className="customer-filter-backnav">
      <NavLink to="/">&lt; Back</NavLink>
    </div>
  );

  if (!customerId) {
    filterContent = (
      <Card className="customer-filter">
        <div className="customer-filter-control">
          <label>Customer Filter:</label>
          <select data-testid="select" value={selected} onChange={onChangeHandler}>
            <option data-testid="select-option" key={assignUniqueID()} value="-1">All</option>
            {rewards.map((reward) => (
              <option data-testid="select-option" key={assignUniqueID()} value={reward.customer}>
                Customer {reward.customer}
              </option>
            ))}
          </select>
        </div>
      </Card>
    );
  }

  // return JSX syntactic sugar for React.createElement
  return filterContent;
}

// Restricting prop types
CustomerFilter.propTypes = {
  rewards: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default CustomerFilter;
