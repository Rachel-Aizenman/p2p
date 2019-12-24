import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import './Deposit.css'

@inject("UserStore")
@observer
class InfoContainer extends Component {
  render() {
    const UserStore = this.props.UserStore;
    return (
      <div >
        <div>
          <p>Portfolio Value: ${UserStore.user.length}</p>
        </div>
        <div>
          <p>Available Cash: ${UserStore.user.length}</p>
        </div>
      </div>
    );
  }
}
export default InfoContainer;
