import React, { Component } from 'react';
import NavBar from '../Lender/LenderNavBar'
import { observer, inject } from "mobx-react";
import DynamicTable from '../DynamicTable'

@inject('UserStore')
@observer
class HomeMarket extends Component {

  render() {
    this.props.UserStore.getData()
    const header = ['Username', 'Period (m)', 'Purpose', 'Amount ($)', 'funded (%)', 'Interest (%)']
    const keys = ['username', 'period', 'purpose', 'amount', 'funded', 'interest', ]
    const rows = this.props.UserStore.openLoans
    return (
      <div>
        <h3>Currently Available Loan requests</h3>
        <DynamicTable head={header} keys={keys} rows={rows} />
      </div>
    )
  }
}



export default HomeMarket;
