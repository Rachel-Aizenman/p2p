const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/p2p");
const moment = require('moment')
function getMonthlyPayment(openLoans) {
    let monthlyPayment = 0;
    for (loan of openLoans)
        monthlyPayment += loan.monthlyPayment
    return monthlyPayment
}

async function getOpenLoans(userID) {
    query = `SELECT * 
    FROM loan_lender
    INNER JOIN loan ON loan.id=loan_lender.loanID
    INNER JOIN user ON user.id=${userID}
    WHERE loan_lender.lender = ${userID} OR loan_lender.borrower = ${userID} 
    AND loan_lender.percentage=1`;
    let openLoans = await sequelize.query(query);
    return openLoans[0];
}

async function getUserInfo(username) {
    const query = `SELECT id ,type,availableMoney FROM user WHERE username='${username}'`
    let result = await sequelize.query(query)
    result = result[0][0]
    return [result.id, result.type, result.availableMoney]
}

async function overallLoanData(userID, userType) {
    const typeColumn = userType === "l" ? 'lender' : 'borrower'
    let query = `SELECT count(*) AS noOfLoans, SUM(loan.amount) AS totalWorth
    FROM loan_lender
    INNER JOIN loan ON loan_lender.loanID=loan.id
    WHERE ${typeColumn}=${userID}`;
    let result = await sequelize.query(query);
    result = result[0][0];
    if (!result.totalWorth)
        result.totalWorth = 0
    return [result.noOfLoans, result.totalWorth];
}

async function remainingAmountAndInterest(userID, totalWorth, userType) {
    loansData = await getLoansData(userID, userType)
    const [fundAndInterest, totalAmountPaid] = getTotalPayments(loansData)
    const remainingAmount = fundAndInterest - totalAmountPaid;
    const averageInterest = fundAndInterest / totalWorth;
    return [remainingAmount, averageInterest];
}

async function getLoansData(userID, userType) {
    const typeColumn = userType === "l" ? "lender" : "borrower";
    let query = `SELECT amount, interest, amountPaid  
                 FROM loan_lender
                 INNER JOIN loan ON loan_lender.loanID=loan.id
                 WHERE loan_lender.${typeColumn}=${userID}`;
    let result = await sequelize.query(query);
    return result[0]
}
function getTotalPayments(loans) {
    let fundAndInterest = 0, totalAmountPaid = 0, returnFactor;
    for (let loan of loans) {
        returnFactor = 1 + loan.interest / 100;
        fundAndInterest += loan.amount * returnFactor;
        totalAmountPaid += loan.amountPaid;
    }
    return [fundAndInterest, totalAmountPaid]
}

async function getNextPayment(userID) {
    const today = moment();
    const date = parseInt(today.format("DD"));
    const month = today.month()+1
    const year = today.year();

    const DISPLAY_LIMIT = 5;
    let query = `SELECT DAY(dateOfIssuance) as day, borrowerName,amount
                FROM loan
                INNER JOIN loan_lender ON loan.id=loan_lender.loanID
                INNER JOIN user ON user.id=${userID}
                WHERE DAY(dateOfIssuance)>${date}
                ORDER BY DAY(dateOfIssuance)
                LIMIT ${DISPLAY_LIMIT}`;
    result = await sequelize.query(query)
    const numOfResults = result[0].length
    let nextPayments = result[0]

    if (numOfResults < DISPLAY_LIMIT) {
        let query = `SELECT DAY(dateOfIssuance) as day, borrowerName,amount
                FROM loan
                INNER JOIN loan_lender ON loan.id=loan_lender.loanID
                INNER JOIN user ON user.id=${userID}
                WHERE DAY(dateOfIssuance)<${date}
                ORDER BY DAY(dateOfIssuance)
                LIMIT ${DISPLAY_LIMIT - numOfResults}`;
        result = await sequelize.query(query)
        nextPayments = nextPayments.concat(result[0])
    }
    nextPayments=nextPayments.map(p => {
        const paymentDay=`${p.day<10?0:""}${p.day}`
        const paymentMonth=month==12?"01":`${month<9?0:""}${month+1}`
        const paymentYear=`${month==12?year+1:year}`
        const date=`${paymentDay}/${paymentMonth}/${paymentYear}\t`
        return {paymentDate:date,username:p.username,amount:p.amount}
    })
    return nextPayments
}

async function getBorrowerID(borrowerName) {
    query = `SELECT id FROM user WHERE username='${borrowerName}'`
    let borrowerID = await sequelize.query(query)
    return borrowerID[0][0].id
}

async function connectBorrowerAndLender(loanID, userID, borrowerID) {
    query = `INSERT INTO loan_lender
    VALUES(${loanID},${borrowerID},${userID},1)`;
    sequelize.query(query)
}

async function updateLoanStatus(loanID) {
    let query = `UPDATE loan SET percentage = 1,status = "OK" WHERE loan.id =${loanID}`
    sequelize.query(query);
}

async function getLoansByCategory(userID) {
    let query = `SELECT loan.purpose AS purpose, count(*) AS count, sum(loan.amount) AS total_amount
    FROM loan
    INNER JOIN loan_lender ON loan.id=loan_lender.loanID
    INNER JOIN user on user.id=${userID}
    GROUP BY loan.purpose`;
    let result = await sequelize.query(query);
    const loansByCategoryByNumber = result[0].map(r => { return { name: r.purpose, value: r.count } })
    const loansByCategoryByValue = result[0].map(r => { return { name: r.purpose, value: r.total_amount } })
    return [loansByCategoryByNumber, loansByCategoryByValue]
}

async function getLoansByIssuanceDate(userID) {
    const date = moment()
    const lastYear = date.year() - 1
    let month = date.month() + 1
    month = month > 12 ? 12 : month;
    const startDate = `${lastYear}-${month}-01`
    let query = `SELECT MONTH(dateOfIssuance) as month, count(*) AS count, sum(loan.amount) AS total_amount
    FROM loan
    INNER JOIN loan_lender ON loan.id=loan_lender.loanID
    INNER JOIN user ON user.id=${userID}
    WHERE dateOfIssuance >=${startDate}
    GROUP BY MONTH(dateOfIssuance)`;
    let result = await sequelize.query(query);
    const loansByCategoryByNumber = result[0].map(r => { return { name: r.month, value: r.count } })
    const loansByCategoryByValue = result[0].map(r => { return { name: r.month, value: r.total_amount } })
    return [loansByCategoryByNumber, loansByCategoryByValue]
}

async function addTransaction(transactionData) {
    const { username, idNumber, depositBy, amount, date, action } = transactionData;
    let qeury = action === "deposit"
        ? `INSERT INTO transaction
          VALUES(null,'${username}','${idNumber}','${depositBy}','${amount}','${date}')`
        :
        `INSERT INTO transaction
          VALUES(null,'${username}',null,null,'${amount}','${date}')`
    sequelize.query(qeury);
}


module.exports = {
    getMonthlyPayment, getNextPayment, getOpenLoans, getUserInfo, overallLoanData,
    remainingAmountAndInterest, getBorrowerID, connectBorrowerAndLender, updateLoanStatus,
    getLoansByCategory, getLoansByIssuanceDate, addTransaction
}