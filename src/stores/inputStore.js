import { observable, action, computed } from "mobx";

export class InputStore {
    @observable amount
    @observable period
    @observable interest
     @observable withdrawInput
    @action handleInput = (param, value) => {
        this[param] = value
    }
}

export default InputStore;
