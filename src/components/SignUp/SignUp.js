import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../Welcome/Welcome.css";

@inject("UserStore", "InputStore")
@observer
class SignUp extends Component {
  handleClick = async () => {
    const InputStore = this.props.InputStore;
    const UserStore = this.props.UserStore;
    const username = InputStore.username;
    await UserStore.getData(username);
    UserStore.setPath();
  };
  handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.props.InputStore.handleInput(name, value);
  };
  render() {
    return (
      <div class="body">
        <section class="intro">
          <div class="inner">
            <div class="content">
              <h1>Peer 2 Peer</h1>
              <FontAwesomeIcon icon={faHandshake} />
              <h3>Please Input Valid Username,Password,Type Of Client And Available Money</h3>
              <input
                className="input"
                name="username"
                onChange={this.handleInput}
              />
              <input
                className="input"
                name="password"
                onChange={this.handleInput}
              />
              <input
                className="input"
                name="type"
                onChange={this.handleInput}
              />
              <input
                className="input"
                name="availableMoney"
                onChange={this.handleInput}
              />
              <h3>Are You A Borrower Or A Lender?</h3>
              <div class="btn">Borrower</div>
              <div class="btn">Lender</div>
              <Link to="/home">
                <div class="btn">Create Account</div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default SignUp;
