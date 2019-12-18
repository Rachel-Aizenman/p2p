import React, { Component } from 'react';
import './BorrowerNewLoan.css'
import Slider from './Slider'
const axios = require('axios')

const purposes = ["Investment", "New car", "Studies", "Vacation", "Mortgage", "Wedding", "celebration", "overhaul", "shopping", "Debt coverage", "Other"]
const default_color = '#39D1B4';
const selected_color = '#FFD712';

class BorrowerNewLoan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            period: 0,
            interest: 0,
            payment: 0,
            purpose: '',
            color: default_color
        };
        this.changeColor = this.changeColor.bind(this);
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
        axios.post(`/addLoan/${userID}`,
        {loan : 
            {
            amount: this.state.amount,
            period: this.state.period,
            interest: this.state.interest,
            monthlyPayment: this.state.payment,
            purpose: this.state.purpose
          }})
          
    }

    changeColor = (e) => {
        const newColor = this.state.color == default_color ? selected_color : default_color;
        this.setState({ color: newColor, purpose: e.currentTarget.textContent})
        
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

                <div>Select purpose:</div>
                <div id="purposes">
                    {purposes.map(p => <div name="  1" id={purposes.indexOf(p)} className="purpose" value={p} onClick={this.changeColor.bind(this)} style={{background: this.state.color}}>{p}</div>)}
                </div>
                <Slider title={"Amount"} max={70000}/>
                <Slider title={"Period (months)"} max={60}/>
                <Slider title={"Interest"} max={15}/>
                <button onClick={this.handleClick} id="submit-new-loan">Submit</button>

            </div>
        );
    }
}

 

export default BorrowerNewLoan;
