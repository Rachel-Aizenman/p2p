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
  getLoansByIssuanceDate,
  addTransaction
} = require("./helpers");

const {
  getNumOfUsers,
  getLoansOverall,
  adminLoansByCategory,
  getLoansByStatus
} = require("./analytics");

router.post("/addLoan", async function (req, res) {
  let loan = req.body;
  const issuanceDate = moment().format("YYYY-MM-DD");
  query = `INSERT INTO loan
           VALUES(null,${loan.amount},${loan.interest},'${loan.purpose}',${loan.period},
           0,'pending','${issuanceDate}',0,${loan.monthlyPayment},'${loan.userName}')`;
  await sequelize.query(query);
  res.end();
});

router.put("/transaction", async function (req, res) {
  const { username, availableMoney } = req.body;
  let query = `UPDATE user
              SET availableMoney = '${availableMoney}'
              WHERE username = '${username}'`;
  sequelize.query(query);
  await addTransaction(req.body)
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
  // try {
  const [userID, type, availableCash] = await getUserInfo(username);
  const [noOfLoans, totalWorth] = await overallLoanData(userID, type);
  const [remainingAmount, interest] = await remainingAmountAndInterest(userID, totalWorth, type);
  const openLoans = await getOpenLoans(userID);
  const monthlyPayment = getMonthlyPayment(openLoans);
  const nextPayments = await getNextPayment(userID);
  const [loansByCategoryByNumber, loansByCategoryByValue] =
    await getLoansByCategory(userID)
  const [loansByMonthByNumber, loansByMonthByValue] =
    await getLoansByIssuanceDate(userID)
  const chartsData = {
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
    nextPayments,
    type,
    chartsData
  };

  res.send(user);
  // } catch (e) {
  // res.send(e.message);
  // }
});

router.post("/newUser", async function (req, res) {
  let user = req.body.user;
  query = `INSERT INTO user
           VALUES('${user.userName}','${user.password}','${uesr.type}', ${user.availableCash})`;
  await sequelize.query(query);
  res.end();
});

router.get("/adminData", async function (req, res) {
  let [totalUsers, activeLenders, activeBorrowers] = await getNumOfUsers();
  [totalUsers, activeLenders, activeBorrowers] = [totalUsers[0], activeLenders[0], activeBorrowers[0]]
  const [openLoans, totalLoanAmount, totalCommission] = await getLoansOverall();
  const [loansByCategoryByNumber, loansByCategoryByValue] = await adminLoansByCategory()
  const [loansByStatusByNumber, loansByStatusByValue] = await getLoansByStatus()
  
  const userData = {
    type:'a',
    totalUsers,
    activeLenders,
    activeBorrowers,
    openLoans,
    totalLoanAmount,
    totalCommission,
    loansByCategoryByNumber,
    loansByCategoryByValue,
    loansByStatusByNumber,
    loansByStatusByValue
  }
  res.send(userData)
})

module.exports = router;
