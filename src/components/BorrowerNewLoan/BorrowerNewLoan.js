import React, { Component } from 'react';
import './BorrowerNewLoan.css'
import Slider from './Slider'
const axios = require('axios')

class BorrowerNewLoan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            period: 0,
            interest: 0,
            payment: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleClick = () => { 
        const userID=this.props.UserStore.user.userID
        axios.post(`/addLoan/${userID}`, {
            "amount": this.state.amount,
            "period": this.state.period,
            "interest": this.state.interest,
            "payment": this.state.payment
          })
    }

    render() {
        return (
            <div id="new-loan">
                <h1>Borrower - New Loan</h1>
                <div id="loan-inputs">
                    <div>
                        <label>Amount:</label>
                        <input
                            name="amount"
                            type="number"
                            value={this.state.amount}
                            onChange={this.handleInputChange} />
                    </div>

                    <div>
                        <label>Period (years):</label>
                        <input
                            name="period"
                            type="number"
                            value={this.state.period}
                            onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <label>Interest:</label>
                        <input
                            name="interest"
                            type="number"
                            value={this.state.interest}
                            onChange={this.handleInputChange} />
                    </div>
                    <div>
                    <label>Monthly Payment:</label>
                    <input
                        name="payment"
                        type="number"
                        value={this.state.payment}
                        onChange={this.handleInputChange} />
                    </div>
                </div>

                <button onClick={this.handleClick} id="submit-new-loan">Submit</button>
                <Slider title={"Amount"} max={70000}/>
                <Slider title={"Period (months)"} max={60}/>
                <Slider title={"Interest"} max={15}/>
            </div>
        );
    }
}




export default BorrowerNewLoan;
