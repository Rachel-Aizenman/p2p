import React, { Component } from 'react';
import './BorrowerNewLoan.css'
import Slider from '../Slider'
import { observer, inject } from "mobx-react";
const axios = require('axios')

@observer
@inject('userStore', 'inputStore')
class BorrowerNewLoan extends Component {

    handleInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.props.inputStore.handleInput(name, value)
    }

    handleClick = () => {
        this.props.userStore.getData()
        const loan = {
            amount: this.props.inputStore.amount,
            period: this.props.inputStore.period,
            interest: this.props.inputStore.interest,
            monthlyPayment: this.props.inputStore.payment
        }
        const userName = this.props.userStore.user.username
        axios.post(`/addLoan/${userName}`, loan)
        console.log(loan)
    }

    render() {
        return (
            <div id="new-loan" style={{textAlign: 'center'}}>
                <div>
                    <Slider title={"Amount"} max={70000} name='amount' handleInput={this.props.inputStore.handleInput}/>
                    <Slider title={"Period (m)"} max={60} name='period' handleInput={this.props.inputStore.handleInput}/>
                    <Slider title={"Interest"} max={15} name={'interest'} handleInput={this.props.inputStore.handleInput}/>
                </div>
                <div>
                    <label>Monthly Payment:</label>
                    <input
                        name="payment"
                        onChange={this.handleInputChange} />
                </div>

                <button onClick={this.handleClick} id="submit-new-loan">Submit</button>

            </div >
        );
    }
}




export default BorrowerNewLoan;
