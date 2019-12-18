import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { observer, inject } from "mobx-react";


@inject("userStore")
@observer
class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Link to={"/deposit"}>
          <button>Deposit<hr/></button>
        </Link>

        <Link to={"/market"}>
          <button>Add Loan</button>


        </Link>
        <Link to={"/withdraw"}>
          <button>Withdraw<hr/></button>
        </Link>
      </div>
    );
  }

}

export default NavBar;
