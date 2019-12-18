import { observable, action, computed } from "mobx";
import axios from "axios";
// const dataRoute = "http://localhost:3001/userData";
import data from '../../src/data.json'

export class UserStore {
  @observable user = [] 
  @observable openLoans = []

  @action getData = async (user) => {
  //   this.user = {
  //     "userID":1,
  //     "username": "Rachel",
  //     "noOfLoans":3,
  //     "monthlyPayment":500,
  //     "total worth": 5000,
  //     "remaining amount": 6,
  //     "open loans": 4,
  //     "available cash": 6000,
  //     "average return": 7.8,
  //     "next payment": "15-02-19"
  //   }

  //   this.openLoans = [{
  //     "id": "5df8ddf394e5d85a35ac7830",
  //     "username":  "shooobert",
  //     "period": 24,
  //     "purpose": "coding bootcamp",
  //     "amount": 452,
  //     "interest": 5,
  //     "funded": 82,
  //     "remaining amount": 4300,
  //     "status": "OK",
  //     "issuance date": "15-09-19",
  //     "next payment": "15-01-20",
  //   },
  //   {
  //     "id": "5df8ddf3adcfbef10a8ec967",
  //     "username":  "dudi",
  //     "period": 24,
  //     "purpose": "coding bootcamp",
  //     "amount": 1345,
  //     "interest": 6,
  //     "funded": 70,
  //     "remaining amount": 4300,
  //     "status": "OK",
  //     "issuance date": "15-09-19",
  //     "next payment": "15-01-20"
  //   },
  //   {
  //     "id": "5df8ddf3gart6ergdfgsreww23",
  //     "username":  "rachel",
  //     "period": 12,
  //     "purpose": "coding bootcamp",
  //     "amount": 934,
  //     "interest": 5,
  //     "funded": 90,
  //     "remaining amount": 4300,
  //     "status": "OK",
  //     "issuance date": "15-09-19",
  //     "next payment": "15-01-20",
  //   }
  // ]

    let data = await axios.get(`https://localhost:3001/userData/${user}`);    
    this.user = data;
  };
}

export default UserStore;