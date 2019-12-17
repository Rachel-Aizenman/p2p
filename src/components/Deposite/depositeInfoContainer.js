import React, { Component } from 'react';
import { inject } from "mobx-react";
@inject('userStore')

class infoContainer extends Component {
    render() {
        const userStore = this.props.userStore
        return (
            <div>
                <div id='protfolio-value' style={{ borderRadius: '50%', border: '10px solid red', height: '150px', width: '150px', display: 'inline-block', margin: '10px' }}><p>Portfolio Value: ${userStore.user.length}</p></div>
                <div id='protfolio-value' style={{ borderRadius: '50%', border: '10px solid red', height: '150px', width: '150px', display: 'inline-block', margin: '10px', position: 'relative' }}><p>Available Cash: ${userStore.user.length}</p></div>
            </div>
        )
    }
}
export default infoContainer;