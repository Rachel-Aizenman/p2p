import React, { Component } from 'react';
import NavBar from './lenderNavBar'
import { inject } from "mobx-react";
import InfoContainer from './lenderInfoContainer';
import DynamicTable from '../DynamicTable'
import TableCell from '@material-ui/core/TableCell';


@inject('userStore')
class Lender extends Component {

  render() {
    this.props.userStore.getData()
    const header = ['Username', 'Period (m)', 'Purpose', 'Amount', 'Interest (%)', 'Remaining Amount ($)', 'Status', 'Issuance Date', 'Next Payment', 'Give Loan']
    const keys = ['username', 'period', 'purpose', 'amount', 'interest', 'remaining amount', 'status', 'issuance date', 'next payment', 'give loan']
    const rows = this.props.userStore.openLoans
    const button = <TableCell><button>+</button></TableCell>
    return (
      <div>
        <NavBar />
        <InfoContainer />
        <DynamicTable head={header} keys={keys} rows={rows} />
      </div>

    )
  }
}



export default Lender;
