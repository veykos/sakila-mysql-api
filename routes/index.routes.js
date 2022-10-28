const router = require("express").Router();
const connection = require('../db/index')

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get('/films', (req,res,next) => {
  connection.query('SELECT * FROM film;',
  function(err,results,fields) {
    res.send(results);
    if (err) console.log(err);

  })
})

module.exports = router;
