import { observable, action, computed } from "mobx";
import axios from "axios";
const dataRoute = "http://localhost:3001/userData";


export class userStore {
  @observable user = [] 
  @observable openLoans = []
  @action getData = async () => {
    let data = await axios.get(dataRoute);
    data = data.data[0];
    this.user = data;
    this.user.openLoans ? this.openLoans = this.user.openLoans : null 
  };
}
