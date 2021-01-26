import React from "react";
import "./Button.css";

function Button(props) {
  const isOperator = (val) => {
    return !isNaN(val) || (val === ".") | (val === "=");
  };

  return (
    <div className={`button ${isOperator(props.children) ? null : "operator"}`}>
      {props.children}
    </div>
  );
}

export default Button;
