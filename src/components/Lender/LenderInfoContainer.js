import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import './Lender.css'

@inject("UserStore")
@observer
class InfoContainer extends Component {
  render() {
    const user = this.props.UserStore.user;
    return (
      <div id="info-container" style={{ display: "flex" }}>


        <div className="info">
          Portfolio Value: {user.totalWorth}
        </div>


        <div
          id="available-cash"
          className='info'
        >
          Available Cash: {user.availableCash}
        </div>

        <div
          id="available-cash"
          className='info'
        >
          Annual Return: {user.averageReturn}
        </div>

        <Link to={"/market"}>
          <div class="button__wrapper">
            <div className="add-investment">
              Add Investment!
            </div>
          </div>

        </Link>


      </div>
    );
  }
}

export default InfoContainer;
