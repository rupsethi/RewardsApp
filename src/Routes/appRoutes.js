// import core dependencies
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// import custom dependencies
import App from '../App';
import Transaction from "../components/Transactions/Transaction";

const appRoutes = () => {
  // return JSX syntactic sugar for React.createElement
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default appRoutes;
