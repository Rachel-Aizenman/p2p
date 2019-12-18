USE p2p;

delete from loan_lender;
INSERT INTO loan_lender VALUES(3,1,3,1);
INSERT INTO loan_lender VALUES(5,1,4,1);
INSERT INTO loan_lender VALUES(7,1,4,1);
-- INSERT INTO loan_lender VALUES(3,1,5,1);

INSERT INTO loan_lender VALUES(6,10,6,1);
INSERT INTO loan_lender VALUES(8,11,4,1);
INSERT INTO loan_lender VALUES(9,12,8,1);

SELECT * FROM loan_lender
