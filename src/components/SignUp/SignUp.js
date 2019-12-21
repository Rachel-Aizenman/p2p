import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../Welcome/Welcome.css";
const axios = require("axios");
const newUserRoute = "http://localhost:3001/newUser/"
const type = "type";

@inject("UserStore", "InputStore")
@observer
class SignUp extends Component {
  handleClick = async e => {
    const InputStore = this.props.InputStore;
    InputStore.handleInput(type, e.target.name);
  };

  handleInput = e => {
    const InputStore = this.props.InputStore;
    const name = e.target.name;
    const value = e.target.value;
    InputStore.handleInput(name, value);
  };
  createNewUser = async () => {
    const InputStore = this.props.InputStore;
    const UserStore = this.props.UserStore;
    const user = {
      userName : InputStore.username,
      password: InputStore.password,
      availableMoney: InputStore.availableMoney,
      type: InputStore.type
    };
    await axios.post(newUserRoute, user);
    await UserStore.getData(InputStore.username);
    await UserStore.getNewLoans();
  };

  render() {
    return (
      <div class="body">
        <section class="intro">
          <div class="inner">
            <div class="content">
              <h1>Peer 2 Peer</h1>
              <FontAwesomeIcon icon={faHandshake} />
              <h4>
                Please Input Valid Username,Password,Available Money And Type Of
                Client{" "}
              </h4>
              <p>Username</p>
              <input
                className="input"
                name="username"
                onChange={this.handleInput}
              />
              <p>Password</p>
              <input
                className="input"
                name="password"
                onChange={this.handleInput}
              />
              <p>Available Money</p>
              <input
                className="input"
                name="availableMoney"
                onChange={this.handleInput}
              />
              <h3>Are You A Borrower Or A Lender?</h3>
              <div>
                <button name="b" onClick={this.handleClick} class="btn">
                  Borrower
                </button>
                <button name="l" onClick={this.handleClick} class="btn">
                  Lender
                </button>
              </div>
              <Link to="/">
                <div onClick = {this.createNewUser} class="btn">Create Account</div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default SignUp;
