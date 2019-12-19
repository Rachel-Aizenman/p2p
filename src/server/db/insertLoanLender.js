const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/p2p");


async function fillLoan_Lender() {
       let counter = 1
    let borrowerID
    let lenderID
    let users=require('./users.json')
    for (let user of users) {
      if(user.type === "l"){
       lenderID = await userID(user.userName)
      }else{
         borrowerID = await userID(user.userName)
      }
      if (borrowerID){
          const query = `INSERT INTO loan_lender VALUES(${counter},${borrowerID},${lenderID},1)`;
          counter++
          await sequelize.query(query);
      }
    }
  }
  async function userID(userName) {
    const query = `SELECT id FROM user WHERE username='${userName}'`;
    const result = await sequelize.query(query);
    return result[0][0].id;
  }
  fillLoan_Lender();
  // query = `SELECT * FROM loan_lender`
  // sequelize.query(query).then(function(result,metadata){console.log(result[0])
  // })