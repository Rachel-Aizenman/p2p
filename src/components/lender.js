import React, { Component } from 'react';
// import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { inject } from "mobx-react";

@inject('userStore')
class Lender extends Component {

    render() {
        const headArr = ['Username', 'Period (m)', 'Purpose', 'Amount', 'Interest', 'Remaining Amount', 'Status', 'Issuance Date', 'Next Payment' ]
        const userStore = this.props.userStore
        return (
            <Router>
            <div>
                <div class='nav-bar'>
                    <Link to={'/deposite'}>
                    <button>Deposite</button>
                    </Link>
                    <Link to={'/new-loan'}>
                    <button>Add Loan</button>
                    </Link>
                    <Link to={'/withdraws'}>
                    <button>Withdraw</button>
                    </Link>
                    <Link to={'/summary'}>
                    <button>Summary</button>
                    </Link>
                    <div id='info-container'>
                        <div id='protfolio-value' style={{ borderRadius: '50%', border: '10px solid red', height: '150px', width: '150px', display: 'inline-block', margin: '10px' }}>Portfolio Value:  {userStore.user.length}$</div>
                        <div id='available-cash' style={{ borderRadius: '50%', border: '10px solid red', height: '150px', width: '150px', display: 'inline-block', margin: '10px' }}>Available Cash: </div>
                        </div>
                        <Link to={'/market'}>
                        <button id='add-investment' style={{ border: '10px solid green', height: '75px', display: 'inline-block', margin: '10px' }}>Add Investment!</button>
                        </Link>
                  
                    <div class='open-loans' style={{ border: '3px solid black' }}>
                        <h3>OPEN LOANS: </h3>
                        {/* <CustomizedTable head={headArr} data={}/> */}
                        <table>
                            <tr>
                                <th>Username</th>
                                <th>Period (m)</th>
                                <th>Purpose</th>
                                <th>Amount</th>
                                <th>Interest</th>
                                <th>Remaining Amount</th>
                                <th>Status</th>
                                <th>Issuance Date</th>
                                <th>Next Payment</th>

                            </tr>
                            <tr>
                                <td>Shoorbert</td>
                                <td>24</td>
                                <td>Coding Bootcamp</td>
                                <td>5,000</td>
                                <td>9.9%</td>
                                <td>4,300</td>
                                <td>OK</td>
                                <td>15-9-19</td>
                                <td>15-01-20</td>
                            </tr>
                            <tr>
                                <td>bro</td>
                                <td>24</td>
                                <td>Coding Bootcamp</td>
                                <td>5,000</td>
                                <td>9.9%</td>
                                <td>4,300</td>
                                <td>OK</td>
                                <td>15-9-19</td>
                                <td>15-01-20</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            </Router>
        )
    }
}



export default Lender;
