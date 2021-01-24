import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ExpenseTrackerApp from "./ExpenseTracker/components/ExpenseTrackerApp";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/expense-tracker" exact component={ExpenseTrackerApp} />
      </Switch>
    </Router>
  );
}

export default App;
