import React, { Component } from "react";
// import "./App.css";
import { observer, inject } from "mobx-react";
import { BrowserRouter as Router, Route, Redirect,Link } from "react-router-dom";
import Lender from "./components/Lender/Lender";
import Borrower from "./components/Borrower/Borrower";
import Withdraw from "./components/Withdraw/Withdraw";
import Deposit from "./components/Deposit/Deposit";
import HomeMarket from "./components/Market/HomeMarket";
import BorrowerNewLoan from "./components/BorrowerNewLoan/BorrowerNewLoan";
import Market from "./components/Market/Market";
import Welcome from "./components/Welcome/Welcome";
import SignUp from "./components/SignUp/SignUp";
import About from './components/About/About'


@inject("UserStore", "InputStore")
@observer
class App extends Component {
  componentWillMount() {
    this.props.UserStore.getNewLoans();
  }
  render() {
    return (
      <Router>
        <Route path="/" exact render={() => <Welcome />} />
        <Route path="/home" exact render={() => <HomeMarket />} />
        <Route path="/signUp" exact render={() => <SignUp />} />
        <Route path="/market" exact render={() => <Market />} />
        <Route path="/newLoan" exact render={() => <BorrowerNewLoan />} />
        <Route path="/takeLoan" exact render={() => <Borrower />} />
        <Route path="/giveLoan" exact render={() => <Lender />} />
        <Route path="/deposit" exact render={() => <Deposit />} />
        <Route path="/withdraw" exact render={() => <Withdraw />} />
    <Route path='/about' exact render={() => <About />}/>
      </Router>
    );
  }
}

export default App;
