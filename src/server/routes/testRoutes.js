const moment = require('moment')
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/p2p");
async function addLoan() {
    const date=moment().format('DD')
    console.log(parseInt(date))
  
}

router.put('/transaction', async function (req, res) {
   console.log(req.body)
  })


addLoan()