USE p2p;



-- ALTER TABLE loan
-- ADD borrowerName VARCHAR(50);


-- INSERT INTO user VALUES(null,"Moishe",'1234','a',0)

SELECT status, count(*) AS count, sum(amount) AS total_amount FROM loan GROUP BY status