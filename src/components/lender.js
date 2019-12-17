import React, { Component } from 'react';
import NavBar from './lenderNavBar'
import { inject } from "mobx-react";
import InfoContainer from './lenderInfoContainer';
import mockData from '../data.json'

@inject('userStore')
class Lender extends Component {
    constructor(){
        super()
        this.state = {
            data: []
        }
    }
    getData = () => {
    mockData.forEach(m => 
        this.state.data.push(m))
    }

    render() {
        const headArr = ['Username', 'Period (m)', 'Purpose', 'Amount', 'Interest', 'Remaining Amount', 'Status', 'Issuance Date', 'Next Payment' ]
        this.getData()
        return (
            <div>

                <div class='nav-bar'>
                    <button>Deposite</button>
                    <button>Add Loan</button>
                    <button>Withdraw</button>
                    <button>Summary</button>
                    <div id='info-container'>
                    <div id='protfolio-value' style={{borderRadius: '50%', border: '10px solid red', height: '150px', width: '150px', display: 'inline-block', margin: '10px'}}>Portfolio Value: </div>
                    <div id='available-cash' style={{borderRadius: '50%', border: '10px solid red', height: '150px', width: '150px', display: 'inline-block', margin: '10px'}}>Available Cash: </div>
                    <div id='add-investment' style={{borderRadius: '50%', border: '10px solid red', height: '150px', width: '150px', display: 'inline-block', margin: '10px'}}>Add Investment!</div>
                    </div>
                    <div class='open-loans' style={{ border: '3px solid black'}}> 
                    <h3>OPEN LOANS: </h3>
                    {/* <CustomizedTable head={'head'} data={'data'}/> */}
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

                <NavBar/>
                <InfoContainer/>
                {/* <DynamicTable head={headArr} data={}/> */}
            </div>
           
        )
    }
}



export default Lender;
