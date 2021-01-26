import React from "react";
import "./ClearButton.css";

function ClearButton(props) {
  return <div className="clear-btn">{props.children}</div>;
}

export default ClearButton;
