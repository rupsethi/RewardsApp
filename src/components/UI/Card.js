// import core dependencies
import React from "react";
import PropTypes from "prop-types";

// import component stylesheet
import "./Card.css";

const Card = ({ className, children }) => {
  const classes = "card " + className;

  // return JSX syntactic sugar for React.createElement
  return <div className={classes} data-testid="card-content">{children}</div>;
};

// Restricting prop types
Card.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Card;
