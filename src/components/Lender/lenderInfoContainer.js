import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { inject } from "mobx-react";

@inject("userStore")
class infoContainer extends Component {
  render() {
    const user = this.props.userStore.user;

    return (
      <div id="info-container" style={{}}>
        <div id="dashboard-item">
            <div>Portfolio Value: {user["total worth"]}</div>
          </div>
        <div id="dashboard-item" >
          Available Cash: {user["available cash"]}
        </div>
        <div id="dashboard-item">
          Annual Return: {user["average return"]}
        </div>
        <br />
        <Link to={"/market"}>
          <button
            id="add-investment">
            Add Investment
            </button>
        </Link>
      </div>
    );
  }
}

export default infoContainer;
