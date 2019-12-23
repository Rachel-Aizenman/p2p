const moment = require('moment')
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/p2p");
async function addLoan() {
 console.log( typeof(moment().month()))
}


addLoan()