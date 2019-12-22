const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/p2p");
const moment = require("moment");
const {
  getMonthlyPayment,
  getNextPayment,
  getOpenLoans,
  getUserInfo,
  overallLoanData,
  remainingAmountAndInterest,
  getBorrowerID,
  connectBorrowerAndLender,
  updateLoanStatus,
  getLoansByCategory,
  getLoansByIssuanceDate
} = require("./helpers");

router.post("/addLoan", async function (req, res) {
  let loan = req.body;
  const issuanceDate = moment().format("YYYY-MM-DD");
  query = `INSERT INTO loan VALUES(null,${loan.amount},${loan.interest},'${loan.purpose}',${loan.period},
           0,'pending','${issuanceDate}',0,${loan.monthlyPayment},'${loan.userName}')`;
  await sequelize.query(query);
  res.end();
});

router.put("/transaction", async function (req, res) {

  let deposit = {
    username: document.getElementById('name').value,
    id: document.getElementById('id').value,
    deposit: document.getElementById('deposit').value,
    availableMoney: availableMoney + Number(amount),
    date: document.getElementById('date').value
}
  const username = req.body.username;
  const idNumber=req.body.idNumber;
  const deposit=req.body
  let availableMoney = req.body.availableMoney;
  let updateQuery = `UPDATE user SET availableMoney = '${availableMoney}' WHERE username = '${username}'`;
  sequelize.query(updateQuery);
  let insertQuery=`INSERT INTO transaction VALUES(null,'${username}','${idNumber}','${deposityBy}','${amount}','${date}')`
  sequelize.query(insertQuery);
  res.end();
});

router.get("/newLoans", async function (req, res) {
  query = `SELECT * 
          FROM loan 
          WHERE percentage < 1`;
  let newLoans = await sequelize.query(query);
  res.send(newLoans[0]);
});

router.post("/fundLoan", async function (req, res) {
  let { loanID, userID, borrowerName } = req.body;
  let borrowerID = await getBorrowerID(borrowerName);
  await connectBorrowerAndLender(loanID, userID, borrowerID);
  await updateLoanStatus(loanID);
  res.end();
});

router.get("/userData/:username", async function (req, res) {
  const username = req.params.username;
  try {
    const [userID, type, availableCash] = await getUserInfo(username);
    const [noOfLoans, totalWorth] = await overallLoanData(userID, type);
    const [remainingAmount, interest] = await remainingAmountAndInterest(
      userID,
      totalWorth,
      type
    );
    const openLoans = await getOpenLoans(userID);
    const monthlyPayment = getMonthlyPayment(openLoans);
    const nextPayment = getNextPayment(openLoans);
    const [loansByCategoryByNumber,loansByCategoryByValue] =
    await getLoansByCategory(userID)
    const [loansByMonthByNumber,loansByMonthByValue]=
     await getLoansByIssuanceDate(userID)
    const chartsData={
      loansByCategoryByNumber,
      loansByCategoryByValue,
      loansByMonthByNumber,
      loansByMonthByValue
    }
    const user = {
      userID,
      username,
      noOfLoans,
      monthlyPayment,
      totalWorth,
      remainingAmount,
      openLoans,
      availableCash,
      interest,
      nextPayment,
      type,
      chartsData
    };

    res.send(user);
  } catch (e) {
    res.send(e.message);
  }
});

router.post("/newUser", async function (req, res) {
  // login
  let user = req.body.user;
  query = `INSERT INTO user
           VALUES('${user.userName}','${user.password}','${uesr.type}', ${user.availableCash})`;
  await sequelize.query(query);
  res.end();
});

module.exports = router;
