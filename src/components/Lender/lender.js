import React, { Component } from 'react';
import NavBar from './LenderNavBar'
import { observer, inject } from "mobx-react";
import InfoContainer from './LenderInfoContainer';
import DynamicTable from '../DynamicTable'
import TableCell from '@material-ui/core/TableCell';


@inject('userStore')
@observer
class Lender extends Component {
  async componentWillMount(){
    await this.props.userStore.getData()
  }
  render() {
    const header = ['Username', 'Period (m)', 'Purpose', 'Amount', 'Interest (%)', 'Remaining Amount ($)', 'Status', 'Issuance Date', 'Next Payment', 'Give Loan']
    const keys = ['username', 'period', 'purpose', 'amount', 'interest', 'remaining amount', 'status', 'issuance date', 'next payment', 'give loan']
    const rows = this.props.userStore.openLoans
    const button = <TableCell><button>+</button></TableCell>
    return (
      <div>
        <h2>Lender</h2>
        <NavBar />
        <InfoContainer />
        <DynamicTable head={header} keys={keys} rows={rows} userID={this.props.userStore.user.userID}/>
      </div>
    )
  }
}



export default Lender;
