import { observable, action, computed } from "mobx";
import axios from "axios";
const dataRoute = "http://localhost:3001/userData/Zimmerman";


export class UserStore {
  @observable user = [] 
  @observable openLoans = []
  @action getData = async () => {
    let data = await axios.get(dataRoute);
    data = data.data
    console.log(data)
    this.user = data;
    if(this.user.openLoans){
      for(let loan of this.user.openLoans){
        loan.remainingAmount = loan.amount - loan.amountPaid
        let nextMonth = String(parseInt(loan.dateOfIssuance.charAt(6))+1)
        loan.nextPayment = loan.dateOfIssuance.replace(loan.dateOfIssuance.charAt(6),nextMonth)
      }
      this.openLoans = this.user.openLoans
    }
  };
}

export default UserStore;