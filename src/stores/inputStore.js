import { observable, action, computed } from "mobx";
const default_color = "#39D1B4";
const selected_color = "#FFD712";
export class InputStore {
    @observable name
    @observable id
    @observable account
    @observable deposit
    @observable amount
    @observable period
    @observable interest
    @observable defaultColor = default_color
    @observable newColor = selected_color
    @observable withdrawInput
    @observable purpose
    @observable username
    @observable password
    @observable type
    @observable availableMoney

    @computed get monthlyPayment() {
        const amount = this.amount
        const period = this.period
        const interest = this.interest

        const interestFactor = 1 + interest / 100
        let monthlyPayment = (amount / period) * interestFactor
        monthlyPayment = Math.round(monthlyPayment)
        return monthlyPayment
    }


    @action handleInput = (param, value) => {
        this[param] = value
    }
}

export default InputStore;
