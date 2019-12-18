import { observable, action, computed } from "mobx";

export class InputStore {
    @observable amount 
    @observable period
    @observable interest
    @observable payment
    @observable withdrawInput
    @observable uesrname
    @action handleInput = (param, value) => {
        console.log(value)
        this[param] = value
    }
}

export default InputStore;
