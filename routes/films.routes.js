const router = require("express").Router();
const connection = require('../db/index')

router.get('/', (req,res,next) => {
  connection.query('SELECT * FROM film;',
  function(err,results,fields) {
    if (err) return console.log(err);
    res.status(200).json(results);
  })
})
router.get('/:id', (req,res,next) => {
  connection.query(
    'SELECT * FROM film WHERE film_id = ?',
    [req.params.id],
    function(err,results,fields) {
      if(err) return console.log(err)
      res.status(200).json(results);
    }
  )
})

module.exports = router