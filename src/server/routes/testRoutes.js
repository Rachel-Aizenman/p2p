const moment = require('moment')
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/p2p");
async function addLoan() {
    const userType="b"
    const userID=1
    const typeColumn = userType === "l" ? 'lender' : 'borrower'
    let query = `SELECT amount, interest, amountPaid  
    FROM loan_lender INNER JOIN loan ON loan_lender.loanID=loan.id
    WHERE loan_lender.${typeColumn}=${userID}`
    let result = await sequelize.query(query)
    console.log(result[0])
  
}

//     let { loanID, lenderID, borrowerID } = {"loanID":1,"lenderID":3,"borrowerID":2}


// query=`SELECT * FROM user`
//     // query = `INSERT INTO loan_lender
//     // VALUES(${loanID},${borrowerID},${lenderID})`;
//     await sequelize.query(query);
// }

addLoan()