import React from "react";
import Header from "./Header";
import "./ExpenseTrackerApp.css";
import Balance from "./Balance";

function ExpenseTrackerApp() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
      </div>
    </div>
  );
}

export default ExpenseTrackerApp;
