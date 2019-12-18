import React, { Component } from 'react';
import NavBar from '../Lender/LenderNavBar'
import { observer, inject } from "mobx-react";
import DynamicTable from '../DynamicTable'

@inject('UserStore')
@observer
class Market extends Component {
  render() {
    const header = ['Username', 'Period (m)', 'Purpose', 'Amount ($)', 'funded (%)', 'Interest (%)', 'Invest']
    const keys = ['username', 'period', 'purpose', 'amount', 'funded', 'interest', ]
    // const rows = this.props.UserStore.openLoans
   const rows=[{
      "id": "5df8ddf394e5d85a35ac7830",
      "username":  "shooobert",
      "period": 24,
      "purpose": "coding bootcamp",
      "amount": 452,
      "interest": 5,
      "funded": 82,
      "remaining amount": 4300,
      "status": "OK",
      "issuance date": "15-09-19",
      "next payment": "15-01-20",
    },
    {
      "id": "5df8ddf3adcfbef10a8ec967",
      "username":  "dudi",
      "period": 24,
      "purpose": "coding bootcamp",
      "amount": 1345,
      "interest": 6,
      "funded": 70,
      "remaining amount": 4300,
      "status": "OK",
      "issuance date": "15-09-19",
      "next payment": "15-01-20"
    },
    {
      "id": "5df8ddf3gart6ergdfgsreww23",
      "username":  "rachel",
      "period": 12,
      "purpose": "coding bootcamp",
      "amount": 934,
      "interest": 5,
      "funded": 90,
      "remaining amount": 4300,
      "status": "OK",
      "issuance date": "15-09-19",
      "next payment": "15-01-20",
    }
  ]



    return (
      <div>
        <h3>Browse Loan Requests:</h3>
        <NavBar />
        <DynamicTable head={header} keys={keys} rows={rows} market={true} userID={this.props.UserStore.user.userID}/>
      </div>
    )
  }
}



export default Market;
