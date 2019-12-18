import React, { Component } from 'react';
import './Borrower.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import DynamicTable from '../DynamicTable'
export class Borrower extends Component {
    render() {
        const header = ["Amount", "Interest", "Purpose", "Period (m)", "Amount Paid", "Remaining Amount", "Status"]
        const keys=['amount','interest','purpose','period','amount_paid','remaining_amount','status']
        // const rows=this.props.userStore.openLoans
        let rows = [{
            amount: 5000,
            interest: 9.9,
            purpose: "Coding Bootcamp",
            period: 24,
            amount_paid: 700,
            remaining_amount: 4300,
            status: "OK"
        },
        {
            amount: 3000,
            interest: 5,
            purpose: "Investment",
            period: 12,
            amount_paid: 500,
            remaining_amount: 2500,
            status: "OK"
        }]

        return (
            <div>
                <h1>Borrower</h1>
                <div><span className="header">Hello User</span> <span className="header">Status: OK</span></div>
                <div id="infos">
                    <div className="info">Amount remained to pay: 3000$</div>
                    <div className="info">Mothly payment: 500$</div>
                    <div className="info">Open loans: 3</div>
                    <Router><Link to="/newLoan"><button className="circle">New Loan</button></Link></Router>
                </div>
                <DynamicTable head={header} keys={keys} rows={rows}/>

            </div>
        )
    }
}



export default Borrower;
