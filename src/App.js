import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Lender from './components/Lender/lender'
import DynamicTable from './components/DynamicTable'
import Borrower from './components/Borrower/Borrower'


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
          <Route path="/take-loan" exact render={() => <Borrower />} />
          <Route path="/give-loan" exact render={() => <Lender />} />
        </div>
      </Router>
    );
  }
}




export default App;
