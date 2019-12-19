import { observable, action, computed } from "mobx";
import axios from "axios";
const dataRoute = "http://localhost:3001/userData/Zimmerman";
const newLoansRoute = "http://localhost:3001/newLoans";

export class UserStore {
  @observable user = [];
  @observable openLoans = [];
  @observable newLoans = [];
  @observable path;
  @action getData = async () => {
    let data = await axios.get(dataRoute);
    data = data.data;
    this.user = data;
    if (this.user.openLoans) {
      for (let loan of this.user.openLoans) {
        loan.remainingAmount = loan.amount - loan.amountPaid;
        let nextMonth = String(parseInt(loan.dateOfIssuance.charAt(6)) + 1);
        loan.nextPayment = loan.dateOfIssuance.replace(
          loan.dateOfIssuance.charAt(6),
          nextMonth
        );
      }
      this.openLoans = this.user.openLoans
    }
  };
  @action getNewLoans = async () => {
    let data = await axios.get(newLoansRoute);
    if (data) {
      data = data.data;
      this.newLoans = data;
    }
  };
  @action setPath() {
    if (this.user.type === "b") this.path = "/giveLoan";
    else this.path = "/takeLoan";
  }

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

  //   console.log(this.user)
}

export default UserStore;
