import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import NavBar from "../navBar/NavBar";
import PieChart from "../PieChart";
import "./Admin.css";
@inject("UserStore")
@observer
class Admin extends Component {

  async componentWillMount() {
    await this.props.UserStore.getAdminInfo();
  }
  render() {
    let adminData = this.props.UserStore.adminData;
    return (
      <div>
        <NavBar />
        {adminData.map(d => (
          <div id="admin">
            <h1>Admin Info</h1>
            <h2>Number Of Users:{d.totalUsers.num}</h2>
            <h2>Active Lenders: {d.activeLenders.num}</h2>
            <h2>Active Borrowers: {d.activeBorrowers.num}</h2>
            <h2>Number of Open Loans:{d.openLoans}</h2>
            <h2>Total Amount of Open Loans: {d.totalLoanAmount}</h2>
            <h2>Total Commision for Company: {d.totalCommission}</h2>
            <div id="charts">
              <div className="chart">
                <h1>Loans By Category By Number </h1>
                <PieChart data={d.loansByCategoryByNumber} />
              </div>
              <div className="chart">
                <h1>Loans By Status By Number </h1>
                <PieChart data={d.loansByStatusByNumber} />
              </div>
              <div className="chart">
                <h1>Loans By Category By Value</h1>
                <PieChart data={d.loansByCategoryByValue} />
              </div>
              <div className="chart">
                <h1>Loans By Status By Value</h1>
                <PieChart data={d.loansByStatusByValue} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Admin;
