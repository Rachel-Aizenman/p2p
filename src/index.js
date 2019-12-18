import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {UserStore} from './stores/UserStore'
import {Provider} from 'mobx-react'
import {InputStore} from './stores/InputStore'

let userStore = new UserStore()
let inputStore = new InputStore()

const store = { userStore, inputStore }


ReactDOM.render(<Provider {...store}><App /></Provider>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
