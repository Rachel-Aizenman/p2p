import React, { Component } from 'react';
import { inject } from "mobx-react";
import { Link } from 'react-router-dom'


@inject('UserStore', 'InputStore')
class Login extends Component {
    handleClick = async () => {
        const InputStore = this.props.InputStore
        const UserStore = this.props.UserStore
        const username = InputStore.username
        await UserStore.getData(username)
        console.log(username)
        UserStore.setPath()
    }
    handleInput = e => {
        const name = e.target.name
        const value = e.target.value
        this.props.InputStore.handleInput(name, value)
    }
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