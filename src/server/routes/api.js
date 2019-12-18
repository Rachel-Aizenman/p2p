const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/p2p");
const moment = require('moment')

router.post("/addLoan", async function (req, res) {
  let loan = req.body.loan;
  let amount = loan.amount;
  let interest = loan.interest;
  let purpose = loan.purpose;
  let period = loan.period;
  const issuanceDate = moment().format('YYYY-MM-DD')// how to enter dates to sql DB - Dudi PLEASE CHECK THAT!

  // purpose should be added in loan screen !!!!!!
  // until then change field to mock data in order to solve bug 

  query = `INSERT INTO loan VALUES(null,${amount},${interest},'${purpose}',${period},0,'ok','${issuanceDate}',0)`;
  await sequelize.query(query);

  res.end();
});


// userdata

      // "monthlyPayment": 500, // borrower - sum payments
      // "available cash": 6000, // lender available cash (user) 
      
      //     "remaining amount": 6,
      //       "open loans": 4, // open loans - all loans with user's name
      //           "average return": 7.8, // lender - weighted average interest rate
      //             "next payment": "15-02-19" // open loans 

router.get("/userData/:username", async function (req, res) {
  const username = req.params.username
  const [userID,type,availableCash] = getUserInfo(username)
  const [noOfLoans,totalWorth] = overallLoanData(userID,type)
  const [remainingAmount,interest]=remainingAmountAndInterest(totalWorth)
  const openLoans = getOpenLoans(userID)
  
  
  // "monthlyPayment":500,
  // "open loans": 4,
  // "available cash": 6000,
  // "next payment": "15-02-19"
  
  // monthly payment

  
  
  // available cash - get from user table

})

function getUserInfo(username) {
  const query = `SELECT id type FROM user WHERE username='${username}'`
  let result = await sequelize.query(query)
  result = result[0][0]
  return [result.id,result.type,result.availableCash]
}
function getOpenLoans(userID){
  query = `SELECT * FROM loan,loan_lender WHERE loan_lender.lender = ${user.id} AND loanID=loan.id `;
  let openLoans = await sequelize.query(query);
  return openLoans[0];
}
function overallLoanData(userID,userType) {
  const typeColumn = userType === "l" ? 'lender' : 'borrower'
  let query = `SELECT count(*) AS noOfLoans, SUM(loan.amount) AS totalWorth
  FROM loan_lender INNER JOIN loan ON loan_lender.loanID=loan.id
  WHERE ${typeColumn}=${userID}`
  let result = await sequelize.query(query)
  result= rseult[0][0]
  return [result.noOfLoans,result.totalWorth]
}

//average return - calculates routes
function remainingAmountAndInterest(userID,totalWorth){
  const typeColumn = userType === "l" ? 'lender' : 'borrower'
  const typeColumn = userType === "l" ? 'lender' : 'borrower'
  let query = `SELECT amount, interest, amountPaid  
  FROM loan_lender INNER JOIN loan ON loan_lender.loanID=loan.id
  WHERE loan_lender.${typeColumn}=${userID}`
  let result = await sequelize.query(query)
  result=result[0]

 let fundAndInterest=0
 let totalAmountPaid=0
 let returnFactor
 for (let loan of loans){
   returnFactor=1+loan.interest/100
   fundAndInterest+=loan.amount*returnFactor
   totalAmountPaid+=loan.amountPaid
 }
 const remainingAmount=fundAndInterest-totalAmountPaid;
 const averageInterest=fundAndInterest/totalWorth
 return [remainingAmount,averageInterest]
  // amount
  console.log(result)
 return result
}


// let userName = req.params.userName;
// query = `SELECT * FROM user WHERE userName = '${userName}'`;
// let user = await sequelize.query(query);
// user = user[0][0];

// if (user.type === "l") {
//   query = `SELECT * FROM loan,loan_lender WHERE loan_lender.lender = ${user.id} AND loanID=loan.id `;
//   let openLoans = await sequelize.query(query);
//   openLoans = openLoans[0];
//   user = [user];
//   user.push(openLoans);
//   res.send(user);
// } else {
//   query = `SELECT * FROM loan,loan_lender WHERE loan_lender.borrower = ${user.id} AND loanID=loan.id `;
//   let openLoans = await sequelize.query(query);
//   openLoans = openLoans[0];
//   user = [user];
//   user.push(openLoans);
//   res.send(user);
// }


// fund loan fix !!!! -

// Dudi PLEASE INTEGRATE WITH GUY.
// YOU SHOULD SEE THAT THE MARKET COMPONENT SENDS
// ALL NECESSARY DATA.

// loadnID lenderID and BORROWERID should all be arrays.
// PLEASE VERIFY THAT THE INSERTION SHOULD BE IN A LOOP 
router.post("/fundLoan", async function (req, res) {
  let { loanID, lenderID, borrowerID } = req.body.loan

  query = `INSERT INTO loan_lender
  VALUES(${loanID},${borrowerID},${lenderID},1)`;
  await sequelize.query(query);
  res.send(loan);
});

// new User - OK

// where is the new user screen?

router.post("/newUser", async function (req, res) {
  let user = req.body.user;
  let userName = user.userName;
  let password = user.password;
  let type = user.type;
  let availableCash = user.availableCash;
  query = `INSERT INTO user
  VALUES('${userName}','${password}','${type}', ${availableCash})`;
  await sequelize.query(query);
  res.end();
});


module.exports = router;
