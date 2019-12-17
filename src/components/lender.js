import React, { Component } from 'react';
import NavBar from './lenderNavBar'
import { inject } from "mobx-react";
import InfoContainer from './lenderInfoContainer';
import mockData from '../data.json'

@inject('userStore')
class Lender extends Component {
    constructor(){
        super()
        this.state = {
            data: []
        }
    }
    getData = () => {
    mockData.forEach(m => 
        this.state.data.push(m))
    }

    render() {
        const headArr = ['Username', 'Period (m)', 'Purpose', 'Amount', 'Interest', 'Remaining Amount', 'Status', 'Issuance Date', 'Next Payment' ]
        this.getData()
        return (
            <div>
                <NavBar/>
                <InfoContainer/>
                {/* <DynamicTable head={headArr} data={this.state.data}/> */}
                
            </div>
           
        )
    }
}



export default Lender;
