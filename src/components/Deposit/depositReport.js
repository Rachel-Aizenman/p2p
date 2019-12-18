import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import axios from "axios";

@inject("userStore", "inputStore")
@observer
class DepositReport extends Component {
  handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.props.inputStore.handleInput(name, value);
  };
  deposit = () => {
    const inputs = this.props.inputStore;
    const deposit = {
      name: inputs.name,
      id: inputs.id,
      account: inputs.account,
      deposit: inputs.deposit,
      amount: inputs.amount,
      date: inputs.date
    };
    console.log(deposit);
    axios.post("https://localhost:3001/transaction", deposit);
  };

  render() {
    return (
      <div
        class="deposite-report"
        style={{
          backgroundColor: "grey",
          position: "inline-block",
          width: "300px",
          margin: "30px",
          textAlign: "center",
          padding: "15px"
        }}
      >
        Name:
        <input onClick={this.handleInputChange} name="name" />
        <br />
        ID: <input onClick={this.handleInputChange} name="id" />
        <br />
        Account Number:{" "}
        <input onClick={this.handleInputChange} name="account" />
        <br />
        Deposit by: <input onClick={this.handleInputChange} name="deposit" />
        <br />
        Amount: <input onClick={this.handleInputChange} name="amount" />
        <br />
        Date: <input onClick={this.handleInputChange} type="date" name="date" />
        <br />
        <button onClick={this.deposit}>Report Deposit</button>
      </div>
    );
  }
}
export default DepositReport;
