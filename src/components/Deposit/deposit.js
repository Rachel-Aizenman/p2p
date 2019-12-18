import React, { Component } from 'react';
import { inject } from "mobx-react";
import InfoContainer from './depositInfoContainer'
import DepositeReport from './depositReport'
import NavBar from '../Lender/lenderNavBar'

@inject('userStore')
class deposite extends Component {
    render() {
        return (
            <div id='deposite-container'>
                <NavBar />
                <InfoContainer />
                <div class='explanation' style={{ width: '100vw', backgroundColor: 'grey', position: 'inline-block', padding: '15px' }}>
                    
                    To speak the language, you break each word down into its syllables. Each syllable will usually have a vowel sound. You then add otha-g before each vowel sound. Some examples of Gibberish words (and their English translations) include:
            </div>
                <div id='bank-info' style={{ backgroundColor: 'grey', position: 'inline-block', width: '200px', margin: '30px', textAlign: 'left', padding: '15px' }}>
                    Bank: Poalim
                {}
                    <br />
                    Branch: 198
                <br />
                    Account Number: 123456
            </div>
                <DepositeReport />
            </div>
        )
    }
}



export default deposite;