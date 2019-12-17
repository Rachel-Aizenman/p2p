import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react'
import Borrower from './components/Borrower/Borrower'


@observer
class App extends Component {
  render() {
  return (
    <div className="App">
    {/* <Lender/> */}
    <Borrower/>
    </div>
  );
}
















}
  
  
  

export default App;
