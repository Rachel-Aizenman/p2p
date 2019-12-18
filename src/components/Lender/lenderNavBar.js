
import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { inject } from "mobx-react";


@inject("userStore")
class navBar extends Component {

  render() {
    return (
      <div className="nav-bar">
        <Link to={"/deposit"}>
          <button>Deposit<hr/></button>
        </Link>
        <Link to={"/Market"}>
          <button>Add Loan<hr/></button>
        </Link>
        <Link to={"/withdraw"}>
          <button>Withdraw<hr/></button>
        </Link>
      </div>
    );
  }

}

export default navBar;
