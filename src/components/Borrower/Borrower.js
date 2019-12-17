import React, { Component } from 'react';


export class Borrower extends Component {
    constructor() {
        super()
        this.state = {

        }

    }

    render() {

        return (
            <div>
                <h1>Borrower</h1>
                <div><span>Hello User</span> <span>Status: OK</span></div>
                <div>
                   <span>Amount remained to pay: 3000$</span> 
                   <span>Mothly </span>
                   <span></span>
                   <span></span>
                </div>
                
            </div>
        )
    }
}



export default Borrower;
