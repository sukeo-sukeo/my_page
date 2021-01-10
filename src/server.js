const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const bodyparser = require('body-parser');

const mysql = require('mysql');
const opt = require('./dbconfig.js');
const db = mysql.createConnection(opt);

db.connect(err => {
  if (err) throw err;
  console.log('db connected!');
});

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(express.static(__dirname + "/../docs/"));

app.get('/.*/', (req, res) => {
  res.sendFile(__dirname + '/../docs/index.html');
});

app.get('/api/home', (req, res) => {
  db.query("select * from home", (err, docs) => {
    if (err) console.log(err);
    res.json(docs)
  });
});

app.get('/api/product', (req, res) => {
  db.query("select * from product", (err, docs) => {
    if (err) console.log(err);
    res.json(docs);
  });
});

app.get('/api/skills', (req, res) => {
  db.query("select * from skills inner join skill_category on skills.category_id = skill_category.id", (err, docs) => {
    if (err) console.log(err);
    res.json(docs);
  });
});

app.get('/api/learned', (req, res) => {
  db.query("select * from learned", (err, docs) => {
    if (err) console.log(err);
    res.json(docs)
  });
});

app.listen(port);


