import React from "react";
import "./Button.css";

function Button(props) {
  const isOperator = (val) => {
    return !isNaN(val) || (val === ".") | (val === "=");
  };

  console.log(`Button ${props.children} created`);
  return (
    <div
      className={`button ${isOperator(props.children) ? null : "operator"}`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
}

export default React.memo(Button);
