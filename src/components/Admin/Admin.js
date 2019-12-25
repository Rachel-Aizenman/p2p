import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import NavBar from "../navBar/NavBar";
import  PieChart  from "../PieChart";
@inject("UserStore")
@observer
class Admin extends Component {
  // async componentWillMount() {
  //   await this.props.UserStore.getAdminInfo();
  //   const adminData = this.props.UserStore.user;
  //   console.log(adminData);
  // }
  render() {
    const adminData = this.props.UserStore.user;
    adminData.loansByCategoryByValue.forEach(l => l.value = parseInt(l.value))
    adminData.loansByStatusByValue.forEach(l => l.value = parseInt(l.value))

    return (
      <div>

        {/* <NavBar /> */}
        <div>Number Of Users:{adminData.totalUsers.num}</div>
        <div>Active Lenders: {adminData.activeLenders.num}</div>
        <div>Active Borrowers: {adminData.activeBorrowers.num}</div>
        <div>Number of Open Loans:{adminData.openLoans}</div>
        <div>Total Amount of Open Loans: {adminData.totalLoanAmount}</div>
        <div>Total Commision for Company: {adminData.totalCommission}</div>
        <PieChart data={adminData.loansByCategoryByNumber}/> 
        <PieChart data={adminData.loansByCategoryByValue}/> 
        <PieChart data={adminData.loansByStatusByNumber}/>
        <PieChart data={adminData.loansByStatusByValue}/>
      </div>
    );
  }
}

export default Admin;
