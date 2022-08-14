// import core dependencies
import React from "react";
import PropTypes from "prop-types";

// import custom dependencies
import Card from "./Card";

// import component stylesheet
import "./List.css";

const List = ({ title, reward, text }) => {
  // return JSX syntactic sugar for React.createElement
  return (
    <Card className="description">
      <h2 className="title">{title}</h2>
      <div className={`rewards-${text.toLowerCase()}`}>{text} are...</div>
      <div className="rewards-text">{reward}</div>
    </Card>
  );
};

// Restricting prop types
List.propTypes = {
  title: PropTypes.string.isRequired,
  reward: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default List;
