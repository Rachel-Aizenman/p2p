USE p2p;

CREATE TABLE transaction(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30),
idNumber INT,
depositBy VARCHAR(15),
amount INT,
date DATE
);