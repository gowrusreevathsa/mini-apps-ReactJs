import React, { useState, useEffect } from "react";
import "./Input.css";

function Input(props) {
  const [Hex, setHex] = useState("");
  const [Rgb, setRgb] = useState("");
  const [Hsl, setHsl] = useState("");

  const setBgColor = (val) => {
    if (val.length !== 7) {
      val += "000000";
      val = val.slice(0, 7);
    }
    document.getElementsByTagName("body")[0].style.backgroundColor = val;
  };

  const componentToHex = (val) => {
    let hex = val.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };

  const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };

  const changeColor = (e) => {
    let target = e.target.placeholder;

    if (target === "HEX") {
      setHex(e.target.value);
      setBgColor("#" + e.target.value);
    } else if (target === "RGB") {
      setRgb(e.target.value);
      console.log(rgbToHex(e.target.value));
    } else {
      setHex(e.target.value);
    }
  };

  return (
    <div className="color-input-container">
      <input
        className="color-input"
        value={Hex}
        // onChange={(e) => setHex(e.target.value)}
        onChange={changeColor}
        type="text"
        placeholder="HEX"
      />
      <input
        className="color-input"
        value={Rgb}
        onChange={changeColor}
        // onChange={(e) => setRgb(e.target.value)}
        type="text"
        placeholder="RGB"
      />
      <input
        className="color-input"
        value={Hsl}
        // onChange={(e) => setHsl(e.target.value)}
        onChange={changeColor}
        type="text"
        placeholder="HSL"
      />
    </div>
  );
}

export default Input;
