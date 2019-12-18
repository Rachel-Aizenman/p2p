const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/p2p");
const moment = require("moment");

router.post("/addLoan", async function(req, res) {
  let loan = req.body.loan;
  let amount = loan.amount;
  let interest = loan.interest;
  let purpose = loan.purpose;
  let period = loan.period;
  const issuanceDate = moment().format("YYYY-MM-DD"); // how to enter dates to sql DB - Dudi PLEASE CHECK THAT!

  // purpose should be added in loan screen !!!!!!
  // until then change field to mock data in order to solve bug

  query = `INSERT INTO loan VALUES(null,${amount},${interest},'${purpose}',${period},0,'ok','${issuanceDate}',0)`;
  await sequelize.query(query);

  res.end();
});

// userdata



router.get("/userData/:username", async function(req, res) {
  const username = req.params.username;
  const [userID, type, availableCash] = await getUserInfo(username);
  const [noOfLoans, totalWorth] = await overallLoanData(userID, type);
  const [remainingAmount, interest] = await remainingAmountAndInterest(
    userID,
    totalWorth,
    type
  );
  const openLoans = await getOpenLoans(userID);
  let monthlyPayment = 0;
  openLoans.forEach(l => (monthlyPayment += l.monthlyPayment));
  const nextPayment = getNextPayment(openLoans);
  const user = {
    userID,
    username,
    noOfLoans,
    monthlyPayment,
    "total worth": totalWorth,
    "remaining amount": remainingAmount,
    "open loans": openLoans,
    "available cash": availableCash,
    "average return": interest,
    "next payment": nextPayment
  };
  res.send(user);

  function getNextPayment(openLoans) {
    const today = moment();
    const date = parseInt(today.format("DD"));
    const month = parseInt(today.format("MM"));
    const year = parseInt(today.format("YYYY"));

    let closestDay = date;
    let min = date;

    for (let loan of openLoans) {
      dateData = loan.issuanceDate;
      currentDay = moment(dateData).format("DD");
      if (currentDay > date && currentDay < closestDay) closestDay = currentDay;
      if (currentDay < min) min = currentDay;
    }

    let nextPayment;
    if (closestDay > date)
      nextPayment = moment(`${closestDay}-${month}-${year}`);
    else if (month < 12) nextPayment = moment(`${min}-${month + 1}-${year}`);
    else nextPayment = moment(`${min}-01-${year + 1}`);

    return nextPayment;
  }
});

async function getUserInfo(username) {
  const query = `SELECT id, type, availableMoney FROM user WHERE username='${username}'`;
  let result = await sequelize.query(query);
  result = result[0][0];
  return [result.id, result.type, result.availableMoney];
}
async function getOpenLoans(userID) {
  query = `SELECT * FROM loan,loan_lender WHERE loan_lender.lender = ${userID} AND loanID=loan.id`;
  let openLoans = await sequelize.query(query);
  return openLoans[0];
}





async function getUserInfo(username) {
  const query = `SELECT id type FROM user WHERE username='${username}'`
  let result = await sequelize.query(query)
  result = result[0][0]
  return [result.id,result.type,result.availableCash]
}
async function getOpenLoans(userID){
  query = `SELECT * FROM loan,loan_lender WHERE loan_lender.lender = ${user.id} AND loanID=loan.id `;
  let openLoans = await sequelize.query(query);
  return openLoans[0];
}
async function overallLoanData(userID,userType) {
  const typeColumn = userType === "l" ? 'lender' : 'borrower'
  let query = `SELECT count(*) AS noOfLoans, SUM(loan.amount) AS totalWorth
  FROM loan_lender 
  INNER JOIN loan ON loan_lender.loanID=loan.id
  WHERE ${typeColumn}=${userID}`;
  let result = await sequelize.query(query);
  result = result[0][0];
  return [result.noOfLoans, result.totalWorth];
}

//average return - calculates routes

async function remainingAmountAndInterest(userID, totalWorth, userType) {
  const typeColumn = userType === "l" ? "lender" : "borrower";

  let query = `SELECT amount, interest, amountPaid  
  FROM loan_lender INNER JOIN loan ON loan_lender.loanID=loan.id
  WHERE loan_lender.${typeColumn}=${userID}`;
  let result = await sequelize.query(query);
  result = result[0];
  let fundAndInterest = 0;
  let totalAmountPaid = 0;
  let returnFactor;
  for (let loan of result) {
    returnFactor = 1 + loan.interest / 100;
    fundAndInterest += loan.amount * returnFactor;
    totalAmountPaid += loan.amountPaid;
  }
  const remainingAmount = fundAndInterest - totalAmountPaid;
  const averageInterest = fundAndInterest / totalWorth;
  return [remainingAmount, averageInterest];
}

// fund loan fix !!!! -

// Dudi PLEASE INTEGRATE WITH GUY.
// YOU SHOULD SEE THAT THE MARKET COMPONENT SENDS
// ALL NECESSARY DATA.

// loadnID lenderID and BORROWERID should all be arrays.
// PLEASE VERIFY THAT THE INSERTION SHOULD BE IN A LOOP
router.post("/fundLoan", async function(req, res) {
  let { loanID, lenderID, borrowerID } = req.body.loan;
  query = `INSERT INTO loan_lender
  VALUES(${loanID},${borrowerID},${lenderID},1)`;
  await sequelize.query(query);
  res.send(loan);
});

// new User - OK

// where is the new user screen?

router.post("/newUser", async function(req, res) {
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
