const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/p2p");
const moment = require('moment')
// userdata
router.get("/userData/:userName", async function(req, res) {
  let userName = req.params.userName;
  query = `SELECT * FROM user WHERE userName = '${userName}'`;
  let user = await sequelize.query(query);
  user = user[0][0];
  if (user.type === "l") {
    query = `SELECT * FROM loan,loan_lender WHERE loan_lender.lender = ${user.id} AND loanID=loan.id `;
    let openLoans = await sequelize.query(query);
    openLoans = openLoans[0];
    user = [user];
    user.push(openLoans);
    res.send(user);
  } else {
    query = `SELECT * FROM loan,loan_lender WHERE loan_lender.borrower = ${user.id} AND loanID=loan.id `;
    let openLoans = await sequelize.query(query);
    openLoans = openLoans[0];
    user = [user];
    user.push(openLoans);
    res.send(user);
  }
});

// fund loan fix !!!!
router.post("/fundLoan", async function(req, res) {
  let loan = req.body.loan;
  let loanID = loan.loanID
  let lenderID = loan.lenderID
  let borrowerID = loan.borrowerID
  query = `INSERT INTO loan_lender
  VALUES(${loanID},${borrowerID},${lenderID},1)`;
  await sequelize.query(query);
  res.send(loan);
});

// new User - OK
router.post("/newUser", async function(req, res) {
  let user = req.body.user;
  let userName = user.userName;
  let password = user.password;
  let type = user.type;
  let availableMoney = user.availableMoney;
  query = `INSERT INTO user
  VALUES('${userName}','${password}','${type}', ${availableMoney})`;
  await sequelize.query(query);
  res.end();
});


router.post("/addLoan", async function(req, res) {
  let loan = req.body.loan;
  // let {amount,interest,purpose,period} = loan;  
  const issuanceDate=moment().format('YYYY-MM-DD')// how to enter dates to sql DB - Dudi PLEASE CHECK THAT!
  query = `INSERT INTO loan
  VALUES(${{...loan}},0,'ok',${issuanceDate},0)`;
  console.log(query)
  await sequelize.query(query);
  res.end();
});

module.exports = router;
