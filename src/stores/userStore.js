import { observable, action, computed } from "mobx";
import axios from "axios";
const dataRoute = "http://localhost:3001/userData/Zimmerman";


export class UserStore {
  @observable user = [] 
  @observable openLoans = []
  @action getData = async () => {
    let data = await axios.get(dataRoute);
    console.log(data)
    data = data.data
    console.log(data)
    this.user = data;
    if(this.user.openLoans){
      this.openLoans = this.user.openLoans
    }
  };
}

export default UserStore;