import { observable, action } from "mobx";
import axios from "axios";
const dataRoute = "http://localhost:3001/userData/";
const newLoansRoute = "http://localhost:3001/newLoans";
const adminRoute = "http://localhost:3001/adminData";
export class UserStore {
  @observable user = [];
  @observable validUser;
  @observable openLoans = [];
  @observable newLoans = [];
  @observable adminData = [];
  @observable path;

  @action login = async username => {
    if (username === "Moishe")
      await this.getAdminInfo()
    else
      await this.getData(username)
  }

  @action getData = async username => {
    let data = await axios.get(dataRoute + username);
    data = data.data;
    if (typeof data === "string") {
      alert("Invalid Username!");
    } else {
      this.user = data;
    }
    if (this.user.openLoans) {
      for (let loan of this.user.openLoans) {
        loan.remainingAmount = loan.amount - loan.amountPaid;
        let nextMonth = String(parseInt(loan.dateOfIssuance.charAt(6)) + 1);
        loan.nextPayment = loan.dateOfIssuance.replace(
          loan.dateOfIssuance.charAt(6),
          nextMonth
        );
      }
      this.openLoans = this.user.openLoans;
    }
  };

  @action getNewLoans = async () => {
    let data = await axios.get(newLoansRoute);
    if (data) { this.newLoans = data.data; }
  };
  @action getAdminInfo = async () => {
    let data = await axios.get(adminRoute);
    data = data.data;
    data.loansByCategoryByValue.forEach(l => l.value = parseInt(l.value))
    data.loansByStatusByValue.forEach(l => l.value = parseInt(l.value))
    data.loansByCategoryByNumber.forEach(l => l.value = parseInt(l.value))
    data.loansByStatusByNumber.forEach(l => l.value = parseInt(l.value))
    this.user=data
    this.adminData=[]
    this.adminData.push(data)
  }
    @action setPath() {
      if (this.user.type === "l") {
        this.path = "/giveLoan"
      }
      if (this.user.type === "b") {
        this.path = "/takeLoan";
      }
    }

  }

  export default UserStore;
