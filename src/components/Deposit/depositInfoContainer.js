import React, { Component } from "react";
import { observer, inject } from "mobx-react";
@inject("UserStore")
@observer
class InfoContainer extends Component {
  render() {
    const UserStore = this.props.UserStore;
    return (
      <div>
        <div
          id="protfolio-value"
          style={{
            borderRadius: "50%",
            border: "10px solid red",
            height: "150px",
            width: "150px",
            display: "inline-block",
            margin: "10px"
          }}
        >
          <p>Portfolio Value: ${UserStore.user.length}</p>
        </div>
        <div
          id="protfolio-value"
          style={{
            borderRadius: "50%",
            border: "10px solid red",
            height: "150px",
            width: "150px",
            display: "inline-block",
            margin: "10px",
            position: "relative"
          }}
        >
          <p>Available Cash: ${UserStore.user.length}</p>
        </div>
      </div>
    );
  }
}
export default InfoContainer;
