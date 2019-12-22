//TOTAL NUMBER OF USERS
async function getNumOfUsers(){
    query='SELECT count(*) FROM user'
    sequelize.query(query);
}

//GET LOANS BY MONTH
//GET LOANS BY CATEGORY - NUMBER
//GET LOANS BY CATEGORY - AMOUNT

// LOANS BY STATUS

async function getLoansByStatus(){
    query='SELECT count(*) FROM user'
    sequelize.query(query);

