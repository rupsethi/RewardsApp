// import core dependencies
import React from "react";

// import custom dependencies
import './Config';
import RewardsDashboard from "./components/Rewards/RewardsDashboard";

// import component stylesheet
import './App.css';

function App() {
  // return JSX syntactic sugar for React.createElement
  return (
    <div className="App">
      <RewardsDashboard />
    </div>
  );
}

export default App;
