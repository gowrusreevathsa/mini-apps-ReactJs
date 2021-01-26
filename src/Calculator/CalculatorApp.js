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

    this.operatorArr = ["+", "-", "*", "/"];

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: "",
    };
  }

  handleButtonClick = (val) => {
    if (val === 0) {
      return this.addZeroToInput(val);
    } else if (val === ".") {
      return this.addDecimalToInput(val);
    } else if (this.operatorArr.indexOf(val) != -1) {
      return this.addOperator(val);
    } else if (val === "=") {
      return this.evaluate();
    } else {
      return this.addToInput(val);
    }
  };

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

  addDecimalToInput = (val) => {
    if (this.state.input === "") {
      this.setState({
        input: 0 + val,
      });
    } else if (this.state.input.indexOf(".") === -1) {
      this.setState({
        input: this.state.input + val,
      });
    }
  };

  addOperator = (val) => {
    if (this.state.operator !== "") {
      this.setState((prevState) => ({
        operator: val,
      }));
    } else {
      this.setState((prevState) => ({
        previousNumber: prevState.input,
        input: "",
        operator: val,
      }));
    }
  };

  evaluate = () => {
    switch (this.state.operator) {
      case "+":
        this.setState((prev) => ({
          currentNumber: prev.input,
          input: parseFloat(prev.previousNumber) + parseFloat(prev.input),
          operator: "",
        }));
        break;
      case "-":
        this.setState((prev) => ({
          currentNumber: prev.input,
          input: parseFloat(prev.previousNumber) - parseFloat(prev.input),
          operator: "",
        }));
        break;
      case "*":
        this.setState((prev) => ({
          currentNumber: prev.input,
          input: parseFloat(prev.previousNumber) * parseFloat(prev.input),
          operator: "",
        }));
        break;
      case "/":
        this.setState((prev) => ({
          currentNumber: prev.input,
          input: parseFloat(prev.previousNumber) / parseFloat(prev.input),
          operator: "",
        }));
        break;
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  render() {
    let buttons = this.buttonsArr.map((row) => {
      return (
        <div className="row">
          {row.map((item) => {
            return <Button handleClick={this.handleButtonClick}>{item}</Button>;
          })}
        </div>
      );
    });

    return (
      <div className="app-container">
        <h1>Simple Calculator</h1>
        <div className="app">
          <div className="calc-wrapper">
            <div className="row">
              <Input>{this.state.input}</Input>
            </div>
            {buttons}
            <div className="row">
              <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorApp;
