import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <div className="color-input-container">
      <input className="color-input" type="text" placeholder="HEX" />
      <input className="color-input" type="text" placeholder="RGB" />
      <input className="color-input" type="text" placeholder="HSL" />
    </div>
  );
}

export default Input;
