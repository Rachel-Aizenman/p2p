import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import axios from "axios";

@inject('userStore')
@observer
class depositeReport extends Component {

    deposit = () => {
        this.props.userStore.getData()
        let availableMoney = this.props.userStore.user["available cash"]
        let amount = document.getElementById('amount').value
        
        let deposit = {
            username: document.getElementById('name').value,
            // id: document.getElementById('id').value,
            // account: document.getElementById('account').value,
            // deposit: document.getElementById('deposit').value,
            availableMoney: availableMoney + Number(amount),
            // date: document.getElementById('date').value
        }
        console.log(deposit)
        axios.put('http://localhost:3001/transaction', deposit)
    }
    
    
    render(){
       
        return(
            <div class='deposite-report' style={{backgroundColor: 'grey', position: 'inline-block', width: '300px', margin: '30px', textAlign: 'center', padding: '15px'}}>
                Name: 
                <input id='name'/>
                <br/>
                {/* ID: <input id='id'/> */}
                <br/>
                {/* Account Number: <input id='account'/> */}
                <br/>
                {/* Deposit by: <input id='deposit'/> */}
                <br/>
                Amount: <input type="number" id='amount'/>
                <br/>
                {/* Date: <input type='date' id='date'/> */}
                <br/>
                <button onClick={this.deposit}>Report Deposit</button>
          </div>
    );
  }
}
export default DepositReport;
