import React, { Component } from 'react';
import NavBar from './lenderNavBar'
import { inject } from "mobx-react";
import InfoContainer from './lenderInfoContainer';
import DynamicTable from '../DynamicTable'

@inject('userStore')
class Lender extends Component {


    render() {

        const headArr = ['Username', 'Period (m)', 'Purpose', 'Amount', 'Interest', 'Remaining Amount', 'Status', 'Issuance Date', 'Next Payment' ]
        this.props.userStore.getData()
        console.log(this.props.userStore.openLoans)
        return (
            <div>
                <NavBar/>
                <InfoContainer/>
                <DynamicTable head={headArr} data={this.props.userStore.openLoans}/>
            </div>
           
        )
    }
}



export default Lender;
