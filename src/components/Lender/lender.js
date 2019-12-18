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
    console.log(this.props.userStore.user.userID)

    const header = ['Username', 'Period (m)', 'Purpose', 'Amount', 'Interest (%)', 'Remaining Amount ($)', 'Status', 'Issuance Date', 'Next Payment', 'Give Loan']
    const keys = ['username', 'period', 'purpose', 'amount', 'interest', 'remaining amount', 'status', 'issuance date', 'next payment', 'give loan']
    const rows = [{
      "username":  "shooobert",
      "period": 2400,
      "purpose": "coding bootcamp",
      "amount": 500,
      "interest": 500,
      "remaining amount": 4300,
      "status": "OK",
      "issuance date": "15-09-19",
      "next payment": "15-01-20"
    },
    {
      "username":  "dudi",
      "period": 2400,
      "purpose": "coding bootcamp",
      "amount": 500,
      "interest": 500,
      "remaining amount": 4300,
      "status": "OK",
      "issuance date": "15-09-19",
      "next payment": "15-01-20"
    },
    {
      "username":  "rachel",
      "period": 2400,
      "purpose": "coding bootcamp",
      "amount": 500,
      "interest": 500,
      "remaining amount": 4300,
      "status": "OK",
      "issuance date": "15-09-19",
      "next payment": "15-01-20"
    }
  
  ]

    // const rows = this.props.userStore.openLoans
    const button = <TableCell><button>+</button></TableCell>
    return (
      <div>
        <NavBar />
        <InfoContainer />
        <DynamicTable head={header} keys={keys} rows={rows} userID={this.props.userStore.user.userID}/>
      </div>

    )
  }
}



export default Lender;
