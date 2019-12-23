
import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import InfoContainer from "./DepositInfoContainer";
import DepositReport from "./DepositReport";
import NavBar from '../navBar/NavBar'

import './Deposit.css'

@inject("UserStore")
@observer
class Deposit extends Component {
  render() {
    return (
      <div
        id="deposit-container"
      >
        <NavBar/>
        <InfoContainer />

        <DepositReport />

        <div
          className="info">
          Bank: Poalim
          {}
          <br />
          Branch: 198
          <br />
          Account Number: 123456
        </div>
      </div>
    );
  }

}

export default Deposit;
