import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react'
import Lender from './components/Lender/lender'
import Deposite from './components/Deposite/deposite'

// import DynamicTable from './components/DynamicTable'
// import Button from '@material-ui/core/Button';

// import BorrowerNewLoan from './components/BorrowerNewLoan/BorrowerNewLoan'




@observer
class App extends Component {
  render() {
  return (
    <div className="App">
      <Deposite/>
    {/* <Lender/> */}
    {/* <BorrowerNewLoan/> */}
    </div>
  );
}
















}
  
  
  

export default App;
