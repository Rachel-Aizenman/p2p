import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";

@inject("UserStore")
@observer
class NavBar extends Component {
  render() {
    return (<ul>
      <Link to='/deposit' className="nav-link">Deposit</Link>
      <Link to='/withdraw' className="nav-link">Withdraw</Link>
      <Link to='/market' className="nav-link">Add Loan</Link>
      <Link to='/' className="nav-link">Log Out</Link>
    </ul>)
  }
}

export default NavBar;
