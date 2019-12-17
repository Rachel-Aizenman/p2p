import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react'
<<<<<<< HEAD
import Borrower from './components/Borrower/Borrower'
=======
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Lender from './components/lender'
>>>>>>> e4af0907bd0215fb51915e20e25a57987d33fff6

import DynamicTable from './components/DynamicTable'
import BorrowerNewLoan from './components/BorrowerNewLoan/BorrowerNewLoan'

@observer
class App extends Component {
  render() {
<<<<<<< HEAD
  return (
    <div className="App">
    {/* <Lender/> */}
    <Borrower/>
    </div>
  );
}
=======
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
          <Route path="/take-loan" exact render={() => <BorrowerNewLoan />} />
          <Route path="/give-loan" exact render={() => <Lender />} />
        </div>
      </Router>
    );
  }
>>>>>>> e4af0907bd0215fb51915e20e25a57987d33fff6
















}




export default App;
