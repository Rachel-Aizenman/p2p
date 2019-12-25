
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
      <div>
        <NavBar />
        <div id="deposit" >
          <InfoContainer />
          <DepositReport />
          <div className="info">
            Bank: Poalim
          <br />
            Branch: 198
          <br />
            Account Number: 123456
        </div>
        </div>
      </div>
    );
  }

}

export default Deposit;
