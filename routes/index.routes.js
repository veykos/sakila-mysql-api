const router = require("express").Router();
const connection = require('../db/index')

router.get("/", (req, res, next) => {
  res.json("All good in here");
});



module.exports = router;
