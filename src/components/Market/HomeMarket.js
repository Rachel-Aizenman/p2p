import React, { Component } from 'react';
import LenderNavBar from '../Lender/LenderNavBar'
import { observer, inject } from "mobx-react";
import DynamicTable from '../DynamicTable'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from '../navBar/NavBar'

import './Home.css'

@inject('UserStore')
@observer
class HomeMarket extends Component {
  render() {
   
    return (
      <div>
         <NavBar/>
      </div>

    )
  }
}



export default HomeMarket;
