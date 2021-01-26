import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-container">
      <Link to="/expense-tracker">
        <button class="btn yellow">Expense Tracker</button>
      </Link>
      <Link to="/calculator">
        <button class="btn blue">Calculator</button>
      </Link>
    </div>
  );
}

export default HomePage;
