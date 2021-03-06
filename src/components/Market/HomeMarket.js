import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import DynamicTable from '../DynamicTable'
import { Link } from 'react-router-dom'
import NavBar from '../navBar/NavBar'

import './Home.css'

@inject('UserStore', 'InputStore')
@observer
class HomeMarket extends Component {
  render() {

    const header = ['Username', 'Period (m)', 'Purpose', 'Amount ($)', 'funded (%)', 'Interest (%)']
    const keys = ['borrowerName', 'period', 'purpose', 'amount', 'percentage', 'interest']
    const rows = this.props.UserStore.newLoans
    return (
      < div >
        <div>
          <NavBar />
        </div>
        <div className="nav-bar">
          <Link className="nav-btn" to="/">
            <button>Home<hr /></button>
          </Link>

          <Link className="nav-btn" to="/takeLoan">
            <button>Loan<hr /></button>
          </Link>
          <Link className="nav-btn" to="/giveLoan">
            <button>Lend<hr /></button>
          </Link>
        </div>
        <div>
          <h3>Currently Available Loan requests</h3>
          <DynamicTable head={header} keys={keys} rows={rows} />
        </div>
      </div >
    )



  }
}



export default HomeMarket;
