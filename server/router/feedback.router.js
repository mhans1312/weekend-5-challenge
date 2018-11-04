const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM feedback ORDER BY id;`;
  pool.query(sqlText)
  .then((result) => {
    console.log('from GET', result.rows)
    res.send(result.rows);
  })
  .catch((error) => {
    console.log('error from GET')
    res.sendStatus(500);
  })
});

router.post('/', (req, res) => {
  console.log('inside router POST')
  const feedback = req.body;
  const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4)`;
  pool.query(sqlText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
  .then((result) => {
    console.log(`added to database`, feedback)
    res.sendStatus(200);
  })
  .catch((error) => {
    console.log(`error on POST to database`, error);
    res.sendStatus(500);
  })
});

module.exports = router;