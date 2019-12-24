const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/p2p");
const moment = require("moment");




//TOTAL NUMBER OF USERS
async function getNumOfUsers(){
    let threeMonthsAgo=moment().subtract(3,'months')
    threeMonthsAgo = threeMonthsAgo.format('YYYY-MM-DD')
    let query='SELECT  count(DISTINCT username) AS num FROM user'
    let result=await sequelize.query(query);
    const totalUsers=result[0]
    query=`SELECT count(DISTINCT username)
            AS num 
           FROM loan_lender
           INNER JOIN user ON loan_lender.lender=user.id
           INNER JOIN loan ON loan_lender.loanID=loan.id
           WHERE loan.dateOfIssuance>${threeMonthsAgo} AND loan.percentage=1`
     
    result=await sequelize.query(query);
    const activeLenders=result[0]
    query=`SELECT count(DISTINCT username) 
           AS num
           FROM loan_lender
           INNER JOIN user ON loan_lender.borrower=user.id
           INNER JOIN loan ON loan_lender.loanID=loan.id
           WHERE loan.dateOfIssuance>${threeMonthsAgo} AND loan.percentage=1`
     
    result=await sequelize.query(query);
    const activeBorrowers=result[0]
    return [totalUsers,activeLenders,activeBorrowers]

}


async function getLoansOverall(){
    const commission=0.02
    let query='SELECT count(*) AS count,sum(amount) AS sum FROM loan WHERE percentage=1'
    let result=await sequelize.query(query);
    const count=result[0].count
    const sum=result[0].sum
    const totalCommission=sum*commission
    return [count,sum,totalCommission]
}
//GET LOANS BY MONTH
//GET LOANS BY CATEGORY - NUMBER
//GET LOANS BY CATEGORY - AMOUNT


// LOANS BY STATUS

async function getLoansByStatus(){
    query='SELECT count(*) FROM loan GROUP BY status'
    sequelize.query(query);
}

module.exports = {
    getNumOfUsers, getLoansOverall, getLoansByStatus
}