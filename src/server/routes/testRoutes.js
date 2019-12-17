const moment = require('moment')
function addLoan() {
    loan = {
        "amount": 100,
        "period": 24,
        "interest": 4.4,
        "payment": 530
    }
   query = `INSERT INTO loan
      VALUES(${{ ...loan }},0,'ok',${moment().format('YYYY-MM-DD')},0)`;
    await sequelize.query(query);

}

addLoan()