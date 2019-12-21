const moment = require('moment')
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/p2p");
async function addLoan() {
 console.log( moment('2015-12-01')) 
}


addLoan()