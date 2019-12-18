import React, { Component } from 'react';
import NavBar from '../Lender/lenderNavBar'
import { inject } from "mobx-react";
import DynamicTable from '../DynamicTable'

@inject('userStore')
class HomeMarket extends Component {

  render() {
    this.props.userStore.getData()
    const header = ['Username', 'Period (m)', 'Purpose', 'Amount ($)', 'funded (%)', 'Interest (%)']
    const keys = ['username', 'period', 'purpose', 'amount', 'funded', 'interest', ]
    const rows = this.props.userStore.openLoans
    return (
      <div>
        <h3>Currently Available Loan requests</h3>
        <DynamicTable head={header} keys={keys} rows={rows} />
      </div>
    )
  }
}



export default HomeMarket;
