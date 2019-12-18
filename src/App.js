import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Lender from './components/Lender/Lender'
import Borrower from './components/Borrower/Borrower'
import Withdraw from './components/Withdraw/Withdraw'
import Deposit from './components/Deposit/Deposit'
import HomeMarket from './components/Market/HomeMarket'
import BorrowerNewLoan from './components/BorrowerNewLoan/BorrowerNewLoan';
import Market from './components/Market/Market'
import { inject } from "mobx-react";



@inject('InputStore', 'UserStore')
@observer
@inject('inputStore')
class App extends Component {

  handleInput = e => {
    const name = e.target.name
    const value = e.target.value
    this.props.inputStore.handleInput(name, value)
    

  }
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Link to="/">
              <h1>PayPi</h1>
            </Link>
            <div className="nav-bar">
              <Link className="nav-btn" to="/">
                <button>Home<hr /></button>
              </Link>

              <Link className="nav-btn" to="/takeLoan">
                <button>Loan<hr /></button>
              </Link>
              <Link className="nav-btn" to="/giveloan">
                <button>Lend<hr /></button>
              </Link>
            </div>
          </header>


          <span>username </span><input name="username" id="username-input" onChange={this.handleInput}></input>
          <Link to={this.props.UserStore.path}>
            <button id="log-in-button" onClick={this.handleClick}>Log-in</button>
          </Link>
          <Route path="/" exact render={() => <HomeMarket />} />
          <Route path="/market" exact render={() => <Market />} />
          <Route path="/newLoan" exact render={() => <BorrowerNewLoan />} />
          <Route path="/take-loan" exact render={() => <Borrower />} />
          <Route path="/give-loan" exact render={() => <Lender />} />

          <Route path="/deposit" exact render={() => <Deposit />} />
          <Route path='/withdraw' exact render={() => <Withdraw />} />
        </div>
      </Router>
    );
  }
}




export default App;
