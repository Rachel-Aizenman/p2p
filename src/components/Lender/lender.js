import React, { Component } from 'react';
import LenderNavBar from './LenderNavBar'
import NavBar from '../navBar/NavBar'
import { observer, inject } from "mobx-react";
import InfoContainer from './LenderInfoContainer';
import DynamicTable from '../DynamicTable'
import TableCell from '@material-ui/core/TableCell';
import PieChart from '../PieChart'
import VerticalBarChart from '../VerticalBarChart'
import "./Lender.css";

@inject('UserStore')
@observer
class Lender extends Component {
  render() {
    const header = ['Username', 'Period (m)', 'Purpose', 'Amount', 'Interest (%)', 'Remaining Amount ($)', 'Status', 'Issuance Date']
    const keys = ['borrowerName', 'period', 'purpose', 'amount', 'interest', 'remainingAmount', 'status', 'dateOfIssuance']
    const rows = this.props.UserStore.openLoans
    const button = <TableCell><button>+</button></TableCell>
    return (
      <div>
        <NavBar />
        <h2>Lender</h2>
        <LenderNavBar />
        <InfoContainer />
        <div id="recharts">
          <PieChart />
          <PieChart />
          <VerticalBarChart />
        </div>

        <div>
          <ul>Closest payments:
            <li>22-12-19</li>
            <li>25-12-19</li>
            <li>30-12-19</li>
          </ul>
        </div>

        <DynamicTable head={header} keys={keys} rows={rows} userID={this.props.UserStore.user.userID} />
      </div>
    )
  }
}



export default Lender;
