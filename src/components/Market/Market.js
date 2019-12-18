import React, { Component } from 'react';
import NavBar from '../Lender/lenderNavBar'
import { inject } from "mobx-react";
import DynamicTable from '../DynamicTable'

const openLoans = [{
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
@inject('userStore')
class Market extends Component {

    render() {
        this.props.userStore.getData()
        const header = ['Username', 'Period (m)', 'Purpose', 'Amount', 'Interest (%)', 'Remaining Amount ($)', 'Status', 'Issuance Date', 'Next Payment' ]
        const keys=['username','period','purpose','amount','interest','remaining amount','status','issuance date','next payment']
        const rows=this.props.userStore.openLoans
        return (
            <div>
              <h3>Browse Loan Requests:</h3>
                <NavBar/>
                <DynamicTable head={header} keys={keys} rows={rows}/>
            </div>
           
        )
    }
}



export default Market;
