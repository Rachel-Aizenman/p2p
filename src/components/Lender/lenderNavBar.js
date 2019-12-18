
import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { inject } from "mobx-react";


@inject("userStore")
class navBar extends Component {

  render() {
    return (
      <div className="nav-bar">
        <Link to={"/deposit"}>
          <button>Deposit</button>
        </Link>
        <Link to={"/newLoan"}>
          <button>Add Loan</button>
        </Link>
        <Link to={"/withdraw"}>
          <button>Withdraw</button>
        </Link>
      </div>
    );
  }

}

export default navBar;
