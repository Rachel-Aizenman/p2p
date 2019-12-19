import React, { Component } from "react";
import { observer,inject } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./Welcome.css";

@inject("UserStore", "InputStore")
@observer
class Welcome extends Component {
  componentDidMount(){
    this.props.UserStore.getData(this.props.InputStore.username)
  }
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
              <input
                className="input"
                name="username"
                onChange={this.handleInput}
              />
              <Link to="/home">
                <div class="btn" onClick={this.handleClick}>
                  Login
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Welcome;

