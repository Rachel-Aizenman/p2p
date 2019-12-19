import React, { Component } from 'react';
import NavBar from '../Lender/LenderNavBar'
import { observer, inject } from "mobx-react";
import DynamicTable from '../DynamicTable'

@inject('UserStore','InputStore')
@observer
class Market extends Component {

  render() {
    const getData = this.props.UserStore.getData
    const header = ['Username', 'Period (m)', 'Purpose', 'Amount ($)', 'funded (%)', 'Interest (%)', 'Invest']
    const keys = ['borrowerName', 'period', 'purpose', 'amount','percentage','interest']
    const rows = this.props.UserStore.newLoans
    return (
      <div>
        <h3>Browse Loan Requests:</h3>
        <NavBar />
        <DynamicTable head={header} keys={keys} rows={rows} getData={this.getData} name={this.props.UserStore.user.username} market={true} userID={this.props.UserStore.user.userID}/>
      </div>
    )
  }
}



export default Market;
