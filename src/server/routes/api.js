const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/p2p");

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

router.get("/findLoan", async function(req, res) {
  let id = req.params.id;
  query = `SELECT * FROM loan WHERE id = '${id}'`;
  const loan = await sequelize.query(query);
  res.send(loan);
});

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
  let amount = loan.amount;
  let intrest = loan.intrest;
  let purpose = loan.purpose;
  let period = loan.period;
  let amountPaid = loan.amountPaid;
  let status = loan.status;
  let dateOfIssuance = loan.dateOfIssuance;
  let percentage = loan.percentage;
  query = `INSERT INTO loan
  VALUES(${amount},${intrest},'${purpose}',${period},${amountPaid},'${status}',${dateOfIssuance},${percentage})`;
  await sequelize.query(query);
  res.end();
});

module.exports = router;
