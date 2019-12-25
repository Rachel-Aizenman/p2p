import React, { Component } from "react";
import "./Borrower.css";
import DynamicTable from "../DynamicTable";
import { inject, observer } from "mobx-react";
import NavBar from "../navBar/NavBar";
import PieChart from '../PieChart'

import './Borrower.css'
@inject("UserStore", "InputStore")
@observer
class Borrower extends Component {
  componentWillMount() {
    const rows = this.props.UserStore.openLoans;
    let user = this.props.UserStore.user;
    let loansByCategoryByNumber = user.chartsData.loansByCategoryByNumber
    let loansByCategoryByValue = user.chartsData.loansByCategoryByValue
    loansByCategoryByValue.forEach(l => l.value = parseInt(l.value))
  }

  render() {
    let user = this.props.UserStore.user;
    const rows = this.props.UserStore.openLoans;
    let loansByCategoryByNumber = user.chartsData.loansByCategoryByNumber
    let loansByCategoryByValue = user.chartsData.loansByCategoryByValue
    const header = [
      "Amount",
      "Interest",
      "Purpose",
      "Period (m)",
      "Amount Paid",
      "Remaining Amount",
      "Status"
    ];
    const keys = [
      "amount",
      "interest",
      "purpose",
      "period",
      "amountPaid",
      "remainingAmount",
      "status"
    ];
    return (
      <div>
        <NavBar />
        <div id="status-container">
          <span className="header">Hello {user.username}</span>{" "}
          <span className="header">Status: OK</span>
        </div>

        <div>
          <div id="charts-container">
            <PieChart data={loansByCategoryByNumber} />
            <div id="infos">
              <div className="info" id="amount-remained">
                Amount remained to pay: {Math.round(user.remainingAmount)} $
            </div>
              <div className="info">Monthly payment: {user.monthlyPayment}</div>
              <div className="info">Open loans </div>

            </div>
            <PieChart data={loansByCategoryByValue} />
          </div>
          <DynamicTable head={header} keys={keys} rows={rows} />
        </div>
      </div>
    );
  }
}

export default Borrower;
