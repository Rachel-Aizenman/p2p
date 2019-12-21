const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/p2p");
const moment = require("moment");
const { getMonthlyPayment, getNextPayment, getOpenLoans, getUserInfo, overallLoanData,
  remainingAmountAndInterest, getBorrowerID, connectBorrowerAndLender, updateLoanStatus } = require('./helpers')

router.post("/addLoan", async function (req, res) { // borrower
  let loan = req.body;
  const issuanceDate = moment().format("YYYY-MM-DD");
  query = `INSERT INTO loan VALUES(null,${loan.amount},${loan.interest},'${loan.purpose}',${loan.period},
           0,'pending','${issuanceDate}',0,${loan.monthlyPayment},'${loan.userName}')`;
  await sequelize.query(query);
  res.end();
});

router.put('/transaction', function (req, res) { // lender
  let username = req.body.username
  let availableMoney = req.body.availableMoney
  let update_query = `UPDATE user SET availableMoney = '${availableMoney}' WHERE username = '${username}'`
  sequelize.query(update_query)
  res.end()
})

router.get("/newLoans", async function (req, res) { // market
  query = `SELECT * 
          FROM loan 
          WHERE percentage < 1`;
  let newLoans = await sequelize.query(query);
  res.send(newLoans[0])
})

router.post("/fundLoan", async function (req, res) { // lender
  let { loanID, userID, borrowerName } = req.body;
  let borrowerID = getBorrowerID(borrowerName)
  await connectBorrowerAndLender(loanID, userID, borrowerID)
  await updateLoanStatus(loanID)
  res.end();
});

router.get("/userData/:username", async function (req, res) { // store
  const username = req.params.username;
  const [userID, type, availableCash] = await getUserInfo(username);
  const [noOfLoans, totalWorth] = await overallLoanData(userID, type);
  const [remainingAmount, interest] = await remainingAmountAndInterest(userID, totalWorth, type);
  const openLoans = await getOpenLoans(userID);
  const monthlyPayment = getMonthlyPayment(openloans)
  const nextPayment = getNextPayment(openLoans);
  const user = {
    userID, username, noOfLoans, monthlyPayment, totalWorth,
    remainingAmount, openLoans, availableCash, interest, nextPayment
  };
  res.send(user);
})

router.post("/newUser", async function (req, res) { // login
  let user = req.body.user;
  query = `INSERT INTO user
           VALUES('${user.userName}','${user.password}','${uesr.type}', ${user.availableCash})`;
  await sequelize.query(query);
  res.end();
});

module.exports = router;
