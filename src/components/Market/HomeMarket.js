import React, { Component } from 'react';
import NavBar from '../Lender/LenderNavBar'
import { observer, inject } from "mobx-react";
import DynamicTable from '../DynamicTable'

@inject('UserStore')
@observer
class HomeMarket extends Component {
  render() {
    const header = ['Username', 'Period (m)', 'Purpose', 'Amount ($)', 'funded (%)', 'Interest (%)']
    const keys = ['borrowerName', 'period', 'purpose', 'amount','percentage','interest']
    const rows = this.props.UserStore.newLoans
    return (
      <div>
        <h3>Currently Available Loan requests</h3>
        <DynamicTable head={header} keys={keys} rows={rows} />
      </div>
    )
  }
}



export default HomeMarket;
