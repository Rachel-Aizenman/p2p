import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import NavBar from "../navBar/NavBar";
import  PieChart  from "../PieChart";
@inject("UserStore")
@observer
class Admin extends Component {
  render() {
    let adminData = this.props.UserStore.adminData;
    console.log(adminData)
    return (
      <div>
        {/* <NavBar /> */}
        {adminData.map(d=> <div>
        <div>Number Of Users:{d.totalUsers.num}</div>
        <div>Active Lenders: {d.activeLenders.num}</div>
        <div>Active Borrowers: {d.activeBorrowers.num}</div>
        <div>Number of Open Loans:{d.openLoans}</div>
        <div>Total Amount of Open Loans: {d.totalLoanAmount}</div>
        <div>Total Commision for Company: {d.totalCommission}</div>
        <PieChart data={d.loansByCategoryByNumber}/> 
        <PieChart data={d.loansByCategoryByValue}/> 
        <PieChart data={d.loansByStatusByNumber}/>
        <PieChart data={d.loansByStatusByValue}/>
        </div>
        )}
      </div>
    );
  }
}

export default Admin;
