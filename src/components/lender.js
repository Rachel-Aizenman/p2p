import React, { Component } from 'react';
// import { render } from 'react-dom';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './lenderNavBar'
import { inject } from "mobx-react";
import InfoContainer from './lenderInfoContainer';

@inject('userStore')
class Lender extends Component {

    render() {
        const headArr = ['Username', 'Period (m)', 'Purpose', 'Amount', 'Interest', 'Remaining Amount', 'Status', 'Issuance Date', 'Next Payment' ]
        return (
            <div>
                <NavBar/>
                <InfoContainer/>
                {/* <DynamicTable head={headArr} data={}/> */}
            </div>
           
        )
    }
}



export default Lender;
