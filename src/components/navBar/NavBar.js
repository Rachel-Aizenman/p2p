import React, { Component } from 'react';
import { inject } from "mobx-react";
import LenderNavBar from '../Lender/LenderNavBar'
import BorrowerNavBar from '../Borrower/BorrowerNavBar'
import './NavBar.css'


@inject('UserStore')
class NavBar extends Component {
  render() {
    const type = this.props.UserStore.user.type
    return (
      <div className="nav">
        {type === "l" ? <LenderNavBar /> : <BorrowerNavBar />}
      </div>
    )
  }
}
export default NavBar;