import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import axios from "axios";

@inject('UserStore', 'InputStore')
@observer
class DepositReport extends Component {
    deposit = () => {
        this.props.UserStore.getData(this.props.InputStore.username)
        let availableMoney = this.props.UserStore.user["available cash"]
        let amount = document.getElementById('amount').value

        let deposit = {
            username: document.getElementById('name').value,
            id: document.getElementById('id').value,
            depositBy: document.getElementById('deposit-by').value ||"Internet",
            amount: Number(amount),
            availableMoney:availableMoney+Number(amount),
            date: document.getElementById('date').value,
            action:'deposit'
        }
        axios.put('http://localhost:3001/transaction', deposit)
    }

    render() {
        return (
            <div class='deposite-report' >
                {/* Name:
                <input id='name' /> <br /> */}
                {/* ID: <input id='id' /> <br /> */}
                {/* Deposit by: <select id='deposit-by' >
                    <option>Internet</option>
                    <option>Credit card</option>
                    <option>Bank transfer</option>
                </select>  <br /> */}
                {/* Amount: <input type="number" id='amount' />$  <br /> */}
                {/* Date: <input type='date' id='date' /> <br />
                <button onClick={this.deposit}>Report Deposit</button> */}
              
<div><form method="post" action="/" id="form" className="validate">
  <div className="form-field">
    <label> Name </label>
    <input id="name" />
  </div>
  <div className="form-field">
    <label>ID</label>
    <input id='id' />
  </div> 
  <div className="form-field">
    <label>Deposit By</label>
  <select id='deposit-by' >
                    <option>Internet</option>
                    <option>Credit card</option>
                    <option>Bank transfer</option>
                </select>  <br />
  </div>
  
  <div className="form-field">
    <label for="email-input">Amount</label>
    <input type="number" id='amount'/>
  </div>

  <div className="form-field">
    <label>Date</label>
    <input type="date" id='date'/>
  </div>
  <div className="form-field">
  <label></label>
    <input className="submit" value="Report Deposit"  onClick={this.deposit}/>             

  </div>
</form>
</div>                
            </div>
        );
    }
}
export default DepositReport;
