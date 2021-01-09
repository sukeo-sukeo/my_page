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

//app.get('/api/learned', ...)

//デプロイ時、app.get('/')でdocsをサーブする感じ？
// app.use(express.static(__dirname + "/docs/"));
app.listen(port);


//データ挿入時の処理↓

// 1	editor
// 2	office
// 3	frontend
// 4	backend
// 5	framework
// 6	database
// 7	other

// app.post('/api/skills', (req, res) => {
//   console.log(req.body);
//   const data = req.body.devicons;
//   const sql = 'insert into skills (category_id, path, rating) values ?';
//   const values = [];
//   console.log(data);
//   Object.keys(data).forEach(d => {
//     data[d].forEach(v => {
//       switch (d) {
//         case 'editor' : values.push([1, v.path, v.rating]);
//         break;
//         case 'office' : values.push([2, v.path, v.rating]);
//         break;
//         case 'frontend' : values.push([3, v.path, v.rating]);
//         break;
//         case 'backend' : values.push([4, v.path, v.rating]);
//         break;
//         case 'framework' : values.push([5, v.path, v.rating]);
//         break;
//         case 'database' : values.push([6, v.path, v.rating]);
//         break;
//         case 'other' : values.push([7, v.path, v.rating]);
//         break;
//         default: values.push([0, null, null]);
//         break;
//       }
//     })
//   })
//   db.query(sql, [values], (err, docs) => {
//     if (err) throw err;
//     console.log(docs);
//     res.send('insert ok!');
//   })
// })
// app.post('/api/product', (req, res) => {
//   console.log(req.body);
//   const data = req.body;
//   const today = new Date()
//   const values = [];
//   data.forEach(d => {
//     console.log(String(d.use));
//     values.push([
//       d.title,
//       d.description,
//       d.path,
//       d.link,
//       d.movieLink,
//       String(d.use),
//       today,
//     ]); 
//   });
//   const sql = `insert into product (title, descript, src, link, movie_link, used_skill, created) values ?`;
//   db.query(sql, [values], (err, docs) => {
//     if (err) throw err;
//     res.send('insert ok!');
//   });
// });

