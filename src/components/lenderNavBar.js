import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { inject } from "mobx-react"

@inject('userStore')
class navBar extends Component {

    render() {
        return (
            <Router>
            <div class='nav-bar'>
            <Link to={'/deposite'}>
            <button>Deposite</button>
            </Link>
            <Link to={'/new-loan'}>
            <button>Add Loan</button>
            </Link>
            <Link to={'/withdraws'}>
            <button>Withdraw</button>
            </Link>
            <Link to={'/summary'}>
            <button>Summary</button>
            </Link>
            </div>  
            </Router>     
             )
    }
}



export default navBar;
