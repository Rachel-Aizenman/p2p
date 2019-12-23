import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { Link, Redirect } from "react-router-dom";

import "./Welcome.css";

@inject("UserStore", "InputStore")
@observer
class Welcome extends Component {

  componentDidMount(){
    const InputStore = this.props.InputStore;
    const UserStore = this.props.UserStore;
    UserStore.user = []
    InputStore.username = null
  }

  handleClick = async () => {
    const InputStore = this.props.InputStore;
    const UserStore = this.props.UserStore;
    const username = InputStore.username;
    await UserStore.getData(username);
    UserStore.path = true;
    UserStore.path = false;
  };
  handleInput = async e => {
    const name = e.target.name;
    const value = e.target.value;
    this.props.InputStore.handleInput(name, value);
  };
  render() {
    let path = this.props.UserStore.path;
    let type = this.props.UserStore.user.type;
    if (path) {
      if (type === "l") return <Redirect to={"/giveLoan"} />;
      if (type === "b") return <Redirect to={"/takeLoan"} />;
    }
    return (
      <div className="body">
        <section className="intro">
          <div className="inner">
            <div className="content">
              <h1>Peer 2 Peer</h1>
              <FontAwesomeIcon icon={faHandshake} />
              <input
                className="input"
                name="username"
                onChange={this.handleInput}
              />
              <div className='container'>
              <div id="login" className="btn" onClick={this.handleClick}>
                Login
              </div>
              <Link to="/signUp">
                <div className="btn">Sign Up</div>
              </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Welcome;
