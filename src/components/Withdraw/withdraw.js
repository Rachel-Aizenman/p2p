
import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import Slider from '../Slider'
import axios from 'axios';
import NavBar from '../navBar/NavBar'
import moment from 'moment'
import './Withdraw.css'


@inject('UserStore', 'InputStore')
@observer
class Withdraw extends Component {
  withdraw = () => {
    const username = this.props.UserStore.user.username;
    const withdrawal = {
      username,
      amount: -this.props.InputStore.withdrawInput,
      date:moment().format('YYYY-MM-DD'),
      action:'withdraw'
    };
    axios.put("https://localhost:3001/transaction", withdrawal);
  };
  render() {
    this.props.UserStore.getData()
    return (
      <div>
        <NavBar />
        <div id='available-cash'>
          Portfolio Value:${this.props.UserStore.user.totalWorth}
        </div>

        <div id='available-cash'>
          Available Cash: ${this.props.UserStore.user.availableCash}
        </div>
        <div id='slider'>
          
          <Slider name='withdrawInput' handleInput={this.props.InputStore.handleInput} />
        </div>
        <button className='btn'onClick={this.withdraw}>Withdraw</button>


      </div>
    )
  }
}
export default Withdraw;
