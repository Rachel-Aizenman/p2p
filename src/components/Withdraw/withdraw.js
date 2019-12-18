import React, { Component } from 'react';
import { inject } from "mobx-react";
import Slider from './Slider'
import axios from 'axios';

@inject('userStore')
class Withdraw extends Component {
    withdraw  = () => {
       const amount = document.getElementById('we will see').value
    //    const user = req.params.userID
       const withdrawal = {
           amount: amount,
        //    userID: user
       }
       axios.put('https://localhost:3001/transaction', withdrawal)
    }
    render() {
        this.props.userStore.getData()
        console.log(this.props.userStore.user)
        return (
            <div style={{textAlign: 'center'}}>
                <div id='available-cash' style={{ borderRadius: '50%', border: '10px solid red', height: '150px', width: '150px', display: 'inline-block', margin: '10px' }}>
                    Portfolio Value:
                </div>

                <div id='available-cash' style={{ borderRadius: '50%', border: '10px solid red', height: '150px', width: '150px', display: 'inline-block', margin: '10px' }}>
                    Available Cash: ${this.props.userStore.user.length}
                    </div>

                    <div class='explanation' style={{ width: '100vw', backgroundColor: 'grey', position: 'inline-block', padding: '15px' }}>
                    The poem "Jabberwocky" in Lewis Carroll's Through the Looking Glass is perhaps the most famous example of gibberish. Lewis Carroll, whose real name was actually Charles Lutwidge Dodgson, was famed for his love of nonsensical language and inventing new words. Here is an extract from the poem:ddition to nonsense words, phrases and sentences, there is also a language called Gibberish. The language is similar to Pig Latin and is used by people who want to play games with a secret language.
                    To speak the language, you break each word down into its syllables. Each syllable will usually have a vowel sound. You then add otha-g before each vowel sound. Some examples of Gibberish words (and their English translations) include:
            </div>
            <Slider/> 
            <button onClick='withdraw'>Withdraw</button>

            </div>
        )
    }
}
export default Withdraw;