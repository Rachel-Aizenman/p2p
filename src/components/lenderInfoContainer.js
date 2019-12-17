import React, { Component } from 'react';
// import { render } from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { inject } from "mobx-react"

@inject('userStore')
class infoContainer extends Component {

    render() {
        const userStore = this.props.userStore

        return (
            <Router>
            <div id='info-container'>
            <div id='protfolio-value' style={{ borderRadius: '50%', border: '10px solid red', height: '150px', width: '150px', display: 'inline-block', margin: '10px' }}>Portfolio Value:  {userStore.user.length}$</div>
            <div id='available-cash' style={{ borderRadius: '50%', border: '10px solid red', height: '150px', width: '150px', display: 'inline-block', margin: '10px' }}>Available Cash: </div>
            <br/>
            <Link to={'/market'}>
            <button id='add-investment' style={{ border: '10px solid green', height: '75px', display: 'inline-block', margin: '10px' }}>Add Investment!</button>
            </Link>
            </div>  
            </Router>      )
    }
}



export default infoContainer;