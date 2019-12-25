import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import './Deposit.css'

@inject("UserStore")
@observer
class InfoContainer extends Component {
  render() {
    const UserStore = this.props.UserStore;
    console.log(UserStore)
    return (
      <div >
        <div className ="value">
          Portfolio Value: ${UserStore.user.totalWorth}
        </div>
        <div className ="value">
          Available Cash: ${UserStore.user.availableCash}
        </div>
      </div>
    );
  }
}
export default InfoContainer;
