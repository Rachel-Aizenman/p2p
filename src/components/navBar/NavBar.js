import React, { Component } from 'react';
import { inject } from "mobx-react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import DynamicTable from '../DynamicTable'
import './NavBar.css'


@inject('UserStore')
class NavBar extends Component {
  render() {
    const header = ['Username', 'Period (m)', 'Purpose', 'Amount ($)', 'funded (%)', 'Interest (%)']
    const keys = ['borrowerName', 'period', 'purpose', 'amount', 'percentage', 'interest']
    const rows = this.props.UserStore.newLoans
    return (

      <div class="nav">
      <ul>
        <Link to='/takeLoan'><li><a href="#" class="nav-link">Loan</a></li></Link>

        <Link to='/'><li><a href="#" class="nav-link">Log Out</a></li></Link>

        <Link to='giveLoan'><li><a href="#" class="nav-link">Lend</a></li></Link>

      </ul>
    </div>
      // <div>
      //   <div className="nav-bar">
      //     <Link className="nav-btn" to="/">
      //       <button>Home<hr /></button>
      //     </Link>

      //     <Link className="nav-btn" to="/takeLoan">
      //       <button>Loan<hr /></button>
      //     </Link>
      //     <Link className="nav-btn" to="/giveLoan">
      //       <button>Lend<hr /></button>
      //     </Link>
      //   </div>
      //   <div>
      //     <h3>Currently Available Loan requests</h3>
      //     <DynamicTable head={header} keys={keys} rows={rows} />
      //   </div>
      // </div>
        )
  }
}
export default NavBar;