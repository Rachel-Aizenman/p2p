import React, { Component } from "react";
import "./Borrower.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import DynamicTable from "../DynamicTable";
import { inject, observer } from "mobx-react";
import NavBar from "../navBar/NavBar";
import PieChart from '../PieChart'
@inject("UserStore", "InputStore")
@observer
class Borrower extends Component {
  
  render() {
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
    const rows = this.props.UserStore.openLoans;
    let user = this.props.UserStore.user;
    let loansByCategoryByNumber=user.chartsData.loansByCategoryByNumber
    let loansByCategoryByValue=user.chartsData.loansByCategoryByValue
    loansByCategoryByValue.forEach(l=>l.value=parseInt(l.value))
    return (
      <div>
        <NavBar />
        <h2>Borrower</h2>
        <div>
          <span className="header">Hello User</span>{" "}
          <span className="header">Status: OK</span>
        </div>
        <div id="infos">
          <div className="info">
            Amount remained to pay: {Math.round(user.remainingAmount)} $
          </div>
          <div className="info">Mothly payment: {user.monthlyPayment}</div>
          <div className="info">Open loans </div>
          <Link to="/newLoan">
            <button className="circle">New Loan</button>
          </Link>
        </div>
        <DynamicTable head={header} keys={keys} rows={rows} />
        <div>
           {/*loans by purpose by number  */}
          <PieChart data={loansByCategoryByNumber}/>
            {/*loans by purpose by value  */}
          <PieChart data={loansByCategoryByValue}/>

        </div>
        
      </div>
    );
  }
}

export default Borrower;
