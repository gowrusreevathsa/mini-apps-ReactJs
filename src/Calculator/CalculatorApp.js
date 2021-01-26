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

  handleButtonClick = (val) => {
    if (val === 0) {
      return this.addZeroToInput(val);
    } else if (val === ".") {
      return this.addDecimalToInput(val);
    } else if (val === "+") {
      return this.add();
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

  add = () => {
    this.setState((prevState) => ({
      previousNumber: prevState.input,
      input: "",
      operator: "plus",
    }));
  };

  evaluate = () => {
    switch (this.state.operator) {
      case "plus":
        this.setState((prev) => ({
          currentNumber: prev.input,
          input: parseFloat(prev.previousNumber) + parseFloat(prev.input),
        }));
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
            // if (item === 0) {
            //   return <Button handleClick={this.addZeroToInput}>{item}</Button>;
            // } else if (item === ".") {
            //   return (
            //     <Button handleClick={this.addDecimalToInput}>{item}</Button>
            //   );
            // } else {
            //   return <Button handleClick={this.addToInput}>{item}</Button>;
            // }
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
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorApp;
