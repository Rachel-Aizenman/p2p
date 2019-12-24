import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import NavBar from "../navBar/NavBar";
@inject("UserStore")
@observer
class Admin extends Component {
  async componentWillMount() {
    await this.props.UserStore.getAdminInfo();
    const adminData = this.props.UserStore.adminData;
    console.log(adminData);
  }
  render() {
    const adminData = this.props.UserStore.adminData;
    console.log(adminData);
    return (
      <div>
        <NavBar />
        <div>Number Of Users:{adminData.totalUsers}</div>
        <div>Active Users:</div>
        <div>Active Lenders:</div>
        <div>Active Borrowers:</div>
      </div>
    );
  }
}

export default Admin;
