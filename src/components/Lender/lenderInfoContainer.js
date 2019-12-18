import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { observer, inject } from "mobx-react";

@inject("UserStore")
@observer
class InfoContainer extends Component {
  render() {
    const user = this.props.UserStore.user;
    return (
        <div id="info-container" style={{ display: "flex" }}>
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
            <div className="info-data">
              <div>Portfolio Value:</div> <div>{user.totalWorth}</div>
            </div>
          </div>
          <div
            id="available-cash"
            style={{
              borderRadius: "50%",
              border: "10px solid red",
              height: "150px",
              width: "150px",
              display: "inline-block",
              margin: "10px"
            }}
          >
            Available Cash: {user.availableCash}
          </div>
          <div
            id="available-cash"
            style={{
              borderRadius: "50%",
              border: "10px solid red",
              height: "150px",
              width: "150px",
              display: "inline-block",
              margin: "10px"
            }}
          >
            Annual Return: {user.averageReturn}
          </div>
          <br />
          <Link to={"/market"}>
            <button
              id="add-investment"
              style={{
                border: "10px solid green",
                height: "75px",
                display: "inline-block",
                margin: "10px"
              }}
            >
              Add Investment!
            </button>
          </Link>
      </div>
    );
  }
}

export default InfoContainer;
