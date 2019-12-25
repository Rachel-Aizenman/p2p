import React, { Component } from "react";
import NavBar from "../navBar/NavBar";
import { observer, inject } from "mobx-react";
import InfoContainer from "./LenderInfoContainer";
import DynamicTable from "../DynamicTable";
import TableCell from "@material-ui/core/TableCell";
import PieChart from "../PieChart";
import VerticalBarChart from "../VerticalBarChart";
import "./Lender.css";

@inject("UserStore")
@observer
class Lender extends Component {
  render() {
    const header = [
      "Username",
      "Period (m)",
      "Purpose",
      "Amount",
      "Interest (%)",
      "Remaining Amount ($)",
      "Status",
      "Issuance Date"
    ];
    const keys = [
      "borrowerName",
      "period",
      "purpose",
      "amount",
      "interest",
      "remainingAmount",
      "status",
      "dateOfIssuance"
    ];
    const rows = this.props.UserStore.openLoans;
    const button = (
      <TableCell>
        <button>+</button>
      </TableCell>
    );
    let user = this.props.UserStore.user;
    let loansByCategoryByNumber = user.chartsData.loansByCategoryByNumber;
    let loansByCategoryByValue = user.chartsData.loansByCategoryByValue;
    let loansByMonthByNumber = user.chartsData.loansByMonthByNumber;
    let loansByMonthByValue = user.chartsData.loansByMonthByValue;
    loansByCategoryByValue.forEach(l => (l.value = parseInt(l.value)));
    return (
      <div className="body">
        <NavBar />
        {/* <h2>Lender</h2> */}
        <InfoContainer />
        <div id="recharts">
          <div className="chart">
            <h1>Loans By Category By Number </h1>
            <PieChart data={loansByCategoryByNumber} />
          </div>
          <div className="chart">
            <h1>Loans By Category By Value </h1>
            <PieChart data={loansByCategoryByValue} />
          </div>
          <div className="chart">
            <h1>Loans By Month By Number </h1>
            <VerticalBarChart data={loansByMonthByNumber} />
          </div>
          <div className="chart">
            <h1>Loans By Month By Value </h1>
            <VerticalBarChart data={loansByMonthByValue} />
          </div>
        </div>

        <div id="payments">
        <ul id="head">
            Next payments
            {user.nextPayments.map(p => (
              <li id="body">
                {p.paymentDate} {p.username} {p.amount}
              </li>
            ))}
          </ul>
        </div>

        <DynamicTable
          head={header}
          keys={keys}
          rows={rows}
          userID={this.props.UserStore.user.userID}
        />
      </div>
    );
  }
}

export default Lender;
