import React, { Component } from "react";
import "./BorrowerNewLoan.css";
import Slider from "../Slider";
import { BrowserRouter as Router, Route, Redirect,Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
const axios = require("axios");
const newLoanRoute = "http://localhost:3001/addLoan/"

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

@inject("UserStore", "InputStore")
@observer
class BorrowerNewLoan extends Component {

  componentDidMount(){
    const handleInput=this.props.InputStore.handleInput
   handleInput("purpose","a")
   handleInput("amount",10) 
   handleInput("period",10) 
   handleInput("interest",10) 
  }
  
  
  
  
  handleInputChange = e => {
    const InputStore = this.props.InputStore;
    const value = e.target.value;
    const name = e.target.name;
    InputStore.handleInput(name, value);
  };

  handleClick = async () => {
    const InputStore = this.props.InputStore;
    const UserStore = this.props.UserStore;
    const loan = {
      userName : InputStore.username,
      purpose: InputStore.purpose,
      amount: InputStore.amount,
      period: InputStore.period,
      interest: InputStore.interest,
      monthlyPayment: InputStore.monthlyPayment
    };
    console.log(loan)
    await axios.post(newLoanRoute, loan);
    await UserStore.getData(InputStore.username);
    await UserStore.getNewLoans(); 
  };

  handlePurpose = e => {
    const InputStore = this.props.InputStore;
    InputStore.handleInput(purpose, e.currentTarget.textContent)
  };

  render() {
    return (
      <div id="new-loan">
        <h1>Borrower - New Loan</h1>
        <div>Select purpose:</div>
        <div id="purposes">
          {purposes.map(p => (
            <button
              name="purpose"
              id={purposes.indexOf(p)}
              className="purpose"
              value={p}
              onClick={this.handlePurpose}
            >
              {p}
            </button>
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
            <span>{this.props.InputStore.monthlyPayment}</span>
          </div>
          <Link to = "/takeLoan">
          <button className='' onClick={this.handleClick} id="submit-new-loan">
            Submit
          </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BorrowerNewLoan;
