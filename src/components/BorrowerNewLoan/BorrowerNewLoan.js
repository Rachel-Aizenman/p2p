import React, { Component } from "react";
import "./BorrowerNewLoan.css";
import Slider from "../Slider";
import { observer, inject } from "mobx-react";
const axios = require("axios");

const color = "color";
const purpose = "purpose";
const purposes = [
  "Investment",
  "New car",
  "Studies",
  "Vacation",
  "Mortgage",
  "Wedding",
  "celebration",
  "overhaul",
  "shopping",
  "Debt coverage",
  "Other"
];
const default_color = "#39D1B4";
const selected_color = "#FFD712";

@observer
@inject("UserStore", "InputStore")
class BorrowerNewLoan extends Component {
  handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.props.InputStore.handleInput(name, value);
  };

  handleClick = () => {
    this.props.UserStore.getData();
    const loan = {
      purpose: this.props.InputStore.purpose,
      amount: this.props.InputStore.amount,
      period: this.props.InputStore.period,
      interest: this.props.InputStore.interest,
      monthlyPayment: this.props.InputStore.payment
    };
    const userName = this.props.UserStore.user.username;
    axios.post(`/addLoan/${userName}`, loan);
  };

  changeColor = e => {
    const newColor =
    this.props.InputStore.color == default_color ? selected_color : default_color;
    this.props.InputStore.handleInput(purpose, e.currentTarget.textContent)
    this.props.InputStore.handleInput(color, newColor)
  };

  render() {
    return (
      <div id="new-loan">
        <h1>Borrower - New Loan</h1>
        <div>Select purpose:</div>
        <div id="purposes">
          {purposes.map(p => (
            <div
              name="purpose"
              id={purposes.indexOf(p)}
              className="purpose"
              value={p}
              onClick={this.changeColor.bind(this)}
              style={{ background: this.props.InputStore.color }}
            >
              {p}
            </div>
          ))}
        </div>
        <div id="new-loan" style={{ textAlign: "center" }}>
          <div>
            <Slider
              title={"Amount"}
              max={70000}
              name="amount"
              handleInput={this.props.InputStore.handleInput}
            />
            <Slider
              title={"Period (m)"}
              max={60}
              name="period"
              handleInput={this.props.InputStore.handleInput}
            />
            <Slider
              title={"Interest"}
              max={15}
              name={"interest"}
              handleInput={this.props.InputStore.handleInput}
            />
          </div>
          <div>
            <label>Monthly Payment:</label>
            <input name="payment" onChange={this.handleInputChange} />
          </div>
          <button onClick={this.handleClick} id="submit-new-loan">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default BorrowerNewLoan;
