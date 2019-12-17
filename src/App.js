import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react'
import Lender from './components/lender'
import BorrowerNewLoan from './components/BorrowerNewLoan/BorrowerNewLoan'



@observer
class App extends Component {
  render() {
  return (
    <div className="App">
    {/* <Lender/> */}
    <BorrowerNewLoan/>
    </div>
  );
}
















}
  
  
  

export default App;
