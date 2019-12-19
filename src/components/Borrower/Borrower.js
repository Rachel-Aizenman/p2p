import React, { Component } from 'react';
import './Borrower.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import DynamicTable from '../DynamicTable'
import { inject, observer} from 'mobx-react';

@inject('UserStore')
@observer
class Borrower extends Component {
    render() {
        const header = ["Amount", "Interest", "Purpose", "Period (m)", "Amount Paid", "Remaining Amount", "Status"]
        const keys=['amount','interest','purpose','period','amountPaid','remainingAmount','status']
        const rows= this.props.UserStore.openLoans
        let user = this.props.UserStore.user     
        return (
            <div>
                <h2>Borrower</h2>
                <div><span className="header">Hello User</span> <span className="header">Status: OK</span></div>
                <div id="infos">
                    <div className="info">Amount remained to pay: {Math.round(user.remainingAmount)} $</div>
                    <div className="info">Mothly payment: {user.monthlyPayment}</div>
                    <div className="info">Open loans </div>
                    <Link to="/newLoan"><button className="circle">New Loan</button></Link>
                </div>
                <DynamicTable head={header} keys={keys} rows={rows}/>
            </div>
        )
    }
}



export default Borrower;
