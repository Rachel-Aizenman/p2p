let users = require("./users.json");
let loans = require("./loans.json");
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/p2p");

async function fillUsers() {
  let userName, password, type, availableMoney;
  try {
    for (let user of users) {
      userName = user.userName;
      password = user.password;
      type = user.type;
      availableMoney = user.availableMoney;
      query = `INSERT INTO user
               VALUES(null,'${userName}','${password}','${type}',${availableMoney})`;
      await sequelize.query(query);
    }
  } catch (e) {
    console.log(e);
  }
}

// fillUsers();
// query = `SELECT * FROM user`
// sequelize.query(query).then(function(result,metadata){console.log(result[0])
// })

async function fillLoans() {
  let amount,
    interest,
    purpose,
    period,
    amountPaid,
    status,
    dateOfIssuance,
    percentage;
  try {
    for (let loan of loans) {
      amount = loan.amount;
      interest = loan.intrest;
      purpose = loan.purpose;
      period = loan.period;
      amountPaid = loan.amountPaid;
      status = loan.status;
      dateOfIssuance = loan.dateOfIssuance;
      percentage = loan.percentage;
      query = `INSERT INTO loan VALUES(null,'${amount}','${interest}','${purpose}','${period}','${amountPaid}','${status}','${dateOfIssuance}','${percentage}')`;
    await sequelize.query(query);
    }
  } catch (e) {
    console.log(e);
  }
}
// fillLoans();
// query = `SELECT * FROM loan`
// sequelize.query(query).then(function(result,metadata){console.log(result[0])
// })

