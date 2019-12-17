import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react'
import Lender from './components/lender'

import DynamicTable from './components/DynamicTable'
import BorrowerNewLoan from './components/BorrowerNewLoan/BorrowerNewLoan'




@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>PayPi</h1>
          <button>Loan</button>
          <button>Lend</button>
        </header>

        {/* <Lender/> */}
        {/* {<BorrowerNewLoan/>} */}
      </div>
    );
  }
















}




export default App;
