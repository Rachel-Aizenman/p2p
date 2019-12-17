import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react'
import Lender from './components/lender'
import DynamicTable from './components/DynamicTable'
import Button from '@material-ui/core/Button';

@observer
class App extends Component {
  render() {
  return (
    <div className="App">
    <Lender/>
    </div>
  );
}
















}
  
  
  

export default App;
