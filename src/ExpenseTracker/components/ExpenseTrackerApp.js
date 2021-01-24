import React from "react";
import Header from "./Header";
import "./ExpenseTrackerApp.css";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";

import { GlobalProvider } from "../context/GlobalState";

function ExpenseTrackerApp() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default ExpenseTrackerApp;
