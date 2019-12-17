const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/p2p");

router.get("/userData", async function(req, res) {
  query = `SELECT * FROM user`;
  const data = await sequelize.query(query);
  query = `SELECT * FROM loan`;
  const data = await sequelize.query(query);
  res.send(data);
});

router.post("/newUser", async function(req, res) {
  let user = req.body.user;
  let id = user.id;
  let name = user.name;
  let email = user.email;
  let country = user.country;
  let owner = user.owner;
  query = `INSERT INTO client
  VALUES('${id}','${name}','${email}',null,null,null,'${country}','${owner}')`;
  await sequelize.query(query);
  
});

router.post("/updateEmail", async function(req, res) {
  let id = req.body.id;
  let email = req.body.email;
  query = `UPDATE client SET emailType = '${email}' WHERE id = '${id}'`;
  await sequelize.query(query);
  res.end();
});
router.post("/updateSold", async function(req, res) {
  let id = req.body.id;
  query = `UPDATE client SET sold = true WHERE id = '${id}'`;
  await sequelize.query(query);
  res.end();
});
router.post("/addClient", async function(req, res) {
  let client = req.body.client;
  let id = client.id;
  let name = client.name;
  let email = client.email;
  let country = client.country;
  let owner = client.owner;
  query = `INSERT INTO client
  VALUES('${id}','${name}','${email}',null,null,null,'${country}','${owner}')`;
  await sequelize.query(query);
  res.end();
});

router.post("/editClient", async function(req, res) {
  let id = req.body.id;
  let name = req.body.name;
  let country = req.body.country;
  query = `UPDATE client SET name = '${name}', country = '${country}' WHERE id = '${id}'`;
  await sequelize.query(query);
  res.end();
});
module.exports = router;