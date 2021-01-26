import React, { useState, Component } from "react";
import Button from "./components/Button";
import "./CalculatorApp.css";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

class CalculatorApp extends Component {
  constructor(props) {
    super(props);

    this.buttonsArr = [
      [7, 8, 9, "/"],
      [4, 5, 6, "*"],
      [1, 2, 3, "+"],
      [".", 0, "=", "-"],
    ];

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: "",
    };
  }

  addToInput = (val) => {
    this.setState({
      input: this.state.input + val,
    });
  };

  addZeroToInput = (val) => {
    if (this.state.input !== "") {
      this.setState({
        input: this.state.input + val,
      });
    }
  };

  render() {
    let buttons = this.buttonsArr.map((row) => {
      return (
        <div className="row">
          {row.map((item) => {
            if (item === 0) {
              return <Button handleClick={this.addZeroToInput}>{item}</Button>;
            } else {
              return <Button handleClick={this.addToInput}>{item}</Button>;
            }
          })}
        </div>
      );
    });

    return (
      <div className-="app">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          {buttons}
          <div className="row">
            <ClearButton>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorApp;
