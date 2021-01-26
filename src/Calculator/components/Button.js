import React from "react";
import "./Button.css";

const isOperator = (val) => {
  return !isNaN(val) || (val === ".") | (val === "=");
};

function Button(props) {
  return <div className="button">{props.children}</div>;
}

export default Button;
