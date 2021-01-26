import React, { useState, Component } from "react";
import Button from "./components/Button";
import "./CalculatorApp.css";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

class CalculatorApp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  addToInput = (val) => {};

  render() {
    return (
      <div className-="app">
        <div className="calc-wrapper">
          <div className="row">
            <Input />
          </div>
          <div className="row">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>/</Button>
          </div>
          <div className="row">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>*</Button>
          </div>
          <div className="row">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
          </div>
          <div className="row">
            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button>
            <Button>-</Button>
          </div>
          <div className="row">
            <ClearButton>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorApp;
