const moment = require('moment')
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/p2p");
async function addLoan() {

    let loan = {
        "amount": 100,
        "interest": 200,
        "purpose": "Cranberry Street",
        "period": 200,
    }
    // let loan=req.body.loan
    let amount =loan.amount;
    let interest=loan.interest;
    let purpose=loan.purpose;
    let period=loan.period;
    const issuanceDate = moment().format('YYYY-MM-DD')// how to enter dates to sql DB - Dudi PLEASE CHECK THAT!

    // purpose should be added in loan screen !!!!!!
    // until then change field to mock data in order to solve bug 

    query = `INSERT INTO loan
  VALUES(null,${amount},${interest},'${purpose}',${period},0,'ok','${issuanceDate}',0)`;
    await sequelize.query(query);
}

//     let { loanID, lenderID, borrowerID } = {"loanID":1,"lenderID":3,"borrowerID":2}


// query=`SELECT * FROM user`
//     // query = `INSERT INTO loan_lender
//     // VALUES(${loanID},${borrowerID},${lenderID})`;
//     await sequelize.query(query);
// }

addLoan()