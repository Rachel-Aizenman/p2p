import React, { Component } from "react";
import "./BorrowerNewLoan.css";
import Slider from "../Slider";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import NavBar from "../navBar/NavBar";

const axios = require("axios");
const newLoanRoute = "http://localhost:3001/addLoan/"
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

@inject("UserStore", "InputStore")
@observer
class BorrowerNewLoan extends Component {

  componentDidMount() {
    const handleInput = this.props.InputStore.handleInput
    handleInput("purpose", "Other")
    handleInput("amount", 10)
    handleInput("period", 10)
    handleInput("interest", 10)
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
      userName: InputStore.username,
      purpose: InputStore.purpose,
      amount: InputStore.amount,
      period: InputStore.period,
      interest: InputStore.interest,
      monthlyPayment: InputStore.monthlyPayment
    };
    await axios.post(newLoanRoute, loan);
    await UserStore.getData(InputStore.username);
    await UserStore.getNewLoans();
  };

  handlePurpose = e => {
    const InputStore = this.props.InputStore;
    InputStore.handleInput(purpose, e.currentTarget.textContent)
  };

  render() {
    const InputStore=this.props.InputStore
    return (
      <div>
        <NavBar />
        <div id="new-loan">
          <h1>Borrower - New Loan</h1>
          <h2>Select purpose:</h2>
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
          <div id="new-loan">
            
              <div id='slider-container'>
                <Slider
                  title={"Amount"}
                  max={70000}
                  name="amount"
                  handleInput={InputStore.handleInput}
                />
                <Slider
                  title={"Period (m)"}
                  max={60}
                  name="period"
                  handleInput={InputStore.handleInput}
                />
                <Slider
                  title={"Interest"}
                  max={15}
                  name={"interest"}
                  handleInput={InputStore.handleInput}
                />
              </div>
        
              <div id="monthly" >Monthly Payment: {InputStore.monthlyPayment}</div>
            <Link to="/takeLoan">
              <button
                className='btn'
                id="submit-new-loan"
                onClick={this.handleClick}>
                Submit
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BorrowerNewLoan;
