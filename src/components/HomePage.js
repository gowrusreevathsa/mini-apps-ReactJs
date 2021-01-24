import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-container">
      <Link to="/expense-tracker">
        <button class="btn blue">Expense Tracker</button>
      </Link>
    </div>
  );
}

export default HomePage;
