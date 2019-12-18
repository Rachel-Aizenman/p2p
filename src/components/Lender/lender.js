import React, { Component } from 'react';
import NavBar from './LenderNavBar'
import { observer, inject } from "mobx-react";
import InfoContainer from './LenderInfoContainer';
import DynamicTable from '../DynamicTable'
import TableCell from '@material-ui/core/TableCell';


@inject('UserStore')
@observer
class Lender extends Component {
  render() {
    const header = ['Username', 'Period (m)', 'Purpose', 'Amount', 'Interest (%)', 'Remaining Amount ($)', 'Status', 'Issuance Date', 'Next Payment', 'Give Loan']
    const keys = ['username', 'period', 'purpose', 'amount', 'interest', 'remainingAmount', 'status', 'dateOfIssuance', 'nextPayment', 'give loan']
    const rows = this.props.UserStore.openLoans
    const button = <TableCell><button>+</button></TableCell>
    return (
      <div>
        <h2>Lender</h2>
        <NavBar />
        <InfoContainer />
        <DynamicTable head={header} keys={keys} rows={rows} userID={this.props.UserStore.user.userID}/>
      </div>
    )
  }
}



export default Lender;
