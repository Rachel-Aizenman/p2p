import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { inject } from "mobx-react"

@inject('userStore')
class infoContainer extends Component {
    render() {
        const user = this.props.userStore.user

        return (
            <Router>
            <div id='info-container' style={{display:"flex"}}>
            <div id='protfolio-value' style={{ borderRadius: '50%', border: '10px solid red', height: '150px', width: '150px', display: 'inline-block', margin: '10px' }}><div className="info-data"><div>Portfolio Value:</div> <div>{user["total worth"]}</div></div></div>
            <div id='available-cash' style={{ borderRadius: '50%', border: '10px solid red', height: '150px', width: '150px', display: 'inline-block', margin: '10px' }}>Available Cash: {user["available cash"]}</div>
        <div id='available-cash' style={{ borderRadius: '50%', border: '10px solid red', height: '150px', width: '150px', display: 'inline-block', margin: '10px' }}>Annual Return: {user["average return"]}</div>
            <br/>
            <Link to={'/market'}>
            <button id='add-investment' style={{ border: '10px solid green', height: '75px', display: 'inline-block', margin: '10px' } }>Add Investment!</button>
            </Link>
            </div>  
            </Router>      )
    }
}



export default infoContainer;