import React, { Component } from 'react';
import NavBar from '../Lender/LenderNavBar'
import { observer, inject } from "mobx-react";
import DynamicTable from '../DynamicTable'

@inject('userStore')
@observer
class Market extends Component {

  render() {
    this.props.userStore.getData()
    const header = ['Username', 'Period (m)', 'Purpose', 'Amount ($)', 'funded (%)', 'Interest (%)', 'Invest']
    const keys = ['username', 'period', 'purpose', 'amount', 'funded', 'interest', ]
    const rows = this.props.userStore.openLoans
    return (
      <div>
        <h3>Browse Loan Requests:</h3>
        <NavBar />
        <DynamicTable head={header} keys={keys} rows={rows} market={true}/>
      </div>
    )
  }
}



export default Market;
