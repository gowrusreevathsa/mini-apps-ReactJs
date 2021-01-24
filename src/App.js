import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ExpenseTrackerApp from "./components/ExpenseTracker/ExpenseTrackerApp";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/expense-tracker" exact component={ExpenseTrackerApp} />
      </Switch>
    </Router>
  );
}

export default App;
