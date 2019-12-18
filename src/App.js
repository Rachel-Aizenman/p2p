import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Lender from './components/Lender/lender'
import Borrower from './components/Borrower/Borrower'

import Withdraw from './components/Withdraw/withdraw'
import Deposit from './components/Deposit/deposit'
import DynamicTable from './components/DynamicTable'
import BorrowerNewLoan from './components/Borrower/BorrowerNewLoan';

@observer
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>PayPi</h1>
            <Link className="nav-btn" to="/">
              <button>Home</button>
            </Link>
            <Link className="nav-btn" to="/take-loan">
              <button>Loan</button>
            </Link>
            <Link className="nav-btn" to="/give-loan">
              <button>Lend</button>
            </Link>
            <hr />
          
          </header>
          <Route path="/" exact render={()=><DynamicTable/>}/>
          {/* <Route path="/market" exact render={()=><Market/>}/> */}
          <Route path="/newLoan" exact render={()=><BorrowerNewLoan/>}/>
          <Route path="/take-loan" exact render={() => <Borrower />} />
          <Route path="/give-loan" exact render={() => <Lender />} />
          <Route path="/deposit" exact render={() => <Deposit />} />
          <Route path='/withdraw' exact render={() => <Withdraw/>}/>
        </div>
      </Router>
    );
  }
}




export default App;
