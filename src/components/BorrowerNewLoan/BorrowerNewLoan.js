import React, { Component } from "react";
import "./BorrowerNewLoan.css";
import Slider from "../Slider";
import { observer, inject } from "mobx-react";
const postRoute = "http://localhost:3001/addLoan/"
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
@inject("userStore", "inputStore")
class BorrowerNewLoan extends Component {
  handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.props.inputStore.handleInput(name, value);
  };

  handleClick = () => {
    this.props.userStore.getData();
    const loan = {
      userName : this.props.userStore.user.username,
      purpose: this.props.inputStore.purpose,
      amount: this.props.inputStore.amount,
      period: this.props.inputStore.period,
      interest: this.props.inputStore.interest,
      monthlyPayment: this.props.inputStore.payment
    };
    axios.post(postRoute, loan);
  };

  changeColor = e => {
    const newColor =
    this.props.inputStore.color == default_color ? selected_color : default_color;
    this.props.inputStore.handleInput(purpose, e.currentTarget.textContent)
    this.props.inputStore.handleInput(color, newColor)
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
              style={{ background: this.props.inputStore.color }}
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
              handleInput={this.props.inputStore.handleInput}
            />
            <Slider
              title={"Period (m)"}
              max={60}
              name="period"
              handleInput={this.props.inputStore.handleInput}
            />
            <Slider
              title={"Interest"}
              max={15}
              name={"interest"}
              handleInput={this.props.inputStore.handleInput}
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
