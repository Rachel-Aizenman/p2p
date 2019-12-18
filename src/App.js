import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Lender from './components/Lender/Lender'
import Borrower from './components/Borrower/Borrower'
import Withdraw from './components/Withdraw/Withdraw'
import Deposit from './components/Deposit/Deposit'
import HomeMarket from './components/Market/HomeMarket'
import BorrowerNewLoan from './components/BorrowerNewLoan/BorrowerNewLoan';
import Market from './components/Market/Market'

@observer
class App extends Component {
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
          
          <Route path="/" exact render={()=><HomeMarket/>}/>
          <Route path="/market" exact render={()=><Market/>}/>
          <Route path="/newLoan" exact render={()=><BorrowerNewLoan/>}/>
          <Route path="/takeLoan" exact render={() => <Borrower />} />
          <Route path="/giveLoan" exact render={() => <Lender />} />
          <Route path="/deposit" exact render={() => <Deposit />} />
          <Route path='/withdraw' exact render={() => <Withdraw />} />
        </div>
      </Router>
    );
  }
}




export default App;
