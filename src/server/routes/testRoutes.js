const moment = require('moment')
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/p2p");
async function addLoan() {
    const date=moment().format('DD')
    console.log(parseInt(date))
  
}

//     let { loanID, lenderID, borrowerID } = {"loanID":1,"lenderID":3,"borrowerID":2}


// query=`SELECT * FROM user`
//     // query = `INSERT INTO loan_lender
//     // VALUES(${loanID},${borrowerID},${lenderID})`;
//     await sequelize.query(query);
// }

addLoan()