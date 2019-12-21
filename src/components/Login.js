import React, { Component } from 'react';
import { inject } from "mobx-react";
import { Link } from 'react-router-dom'


@inject('UserStore', 'InputStore')
class Login extends Component {
    render() {
        return (
            <div>
                <span> username: </span><input name="username" id="username-input" onChange={this.handleInput}></input>
                <Link to={this.props.UserStore.path}>
                    <button id="log-in-button" onClick={this.handleClick}>Log-in</button>
                </Link>
            </div>
        )
    }
}
export default Login;