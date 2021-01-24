import React from "react";
import Header from "./Header";
import "./ExpenseTrackerApp.css";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";

function ExpenseTrackerApp() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
      </div>
    </div>
  );
}

export default ExpenseTrackerApp;
