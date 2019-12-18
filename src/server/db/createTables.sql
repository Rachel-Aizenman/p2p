-- -- -- create DATABASE p2p;
-- USE p2p;

-- -- create TABLE user(
-- --     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- --     username VARCHAR(30),
-- --     paswword VARCHAR(60),
-- --     type VARCHAR(1),
-- --     availableMoney INT
-- -- );


-- -- create TABLE loan(
-- --     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- --     amount int,
-- --     interest int,
-- --     purpose varchar(20),
-- --     period int,
-- --     amountPaid int,
-- --     status varchar(20),
-- --     dateOfIssuance Date,
-- --     percentage int,
-- --     monthlyPayment INT
-- -- );



-- create TABLE loan_lender(
--     loanID INT,
--     borrower INT,
--     lender INT,
--     percentage INT,
--     FOREIGN KEY (loanID) REFERENCES loan(id),
--     FOREIGN KEY (borrower) REFERENCES user(id),
--     FOREIGN KEY (lender) REFERENCES user(id)
-- );

