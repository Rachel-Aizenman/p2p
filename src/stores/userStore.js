import { observable, action, computed } from "mobx";
import axios from "axios";
// const dataRoute = "http://localhost:3001/userData";
import data from '../../src/data.json'

export class UserStore {
  @observable user = [] 
  @observable openLoans = []

  @action getData = async () => {
    this.user = {
      "userID":1,
      "username": "Rachel",
      "noOfLoans":3,
      "monthlyPayment":500,
      "total worth": 5000,
      "remaining amount": 6,
      "open loans": 4,
      "available cash": 6000,
      "average return": 7.8,
      "next payment": "15-02-19"

    }
    this.openLoans = [{
      "username":  "shooobert",
      "period": 2400,
      "purpose": "coding bootcamp",
      "amount": 500,
      "interest": 500,
      "remaining amount": 4300,
      "status": "OK",
      "issuance date": "15-09-19",
      "next payment": "15-01-20"
    },
    {
      "username":  "dudi",
      "period": 2400,
      "purpose": "coding bootcamp",
      "amount": 500,
      "interest": 500,
      "remaining amount": 4300,
      "status": "OK",
      "issuance date": "15-09-19",
      "next payment": "15-01-20"
    },
    {
      "username":  "rachel",
      "period": 2400,
      "purpose": "coding bootcamp",
      "amount": 500,
      "interest": 500,
      "remaining amount": 4300,
      "status": "OK",
      "issuance date": "15-09-19",
      "next payment": "15-01-20"
    }
  
  ]
    // let data = await axios.get(dataRoute);
    // data = data.data[0];
    // this.user = data;
    // this.user.openLoans ? this.openLoans = this.user.openLoans : null 
  };
}

export default UserStore;