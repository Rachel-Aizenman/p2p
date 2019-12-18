import { observable, action, computed } from "mobx";
const default_color = "#39D1B4";
export class InputStore {
    @observable name
    @observable id
    @observable account
    @observable deposit
    @observable amount 
    @observable period
    @observable interest
    @observable payment
    @observable color = default_color
    @observable withdrawInput
    @observable purpose
    @action handleInput = (param, value) => {
        this[param] = value
    }
}

export default InputStore;
