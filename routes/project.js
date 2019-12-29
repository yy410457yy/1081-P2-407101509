var express = require('express');
var router = express.Router();

const midtermController = 
require("../controllers/midtermController");

router.get("/midterm", midtermController.getMidterm);

router.get("/guodong", midtermController.getGuodong);

// /* GET home page. */
// router.get('/midterm', function(req, res, next) {
//   res.render('midterm', { title: 'MuMi==' });
// });

module.exports = router;
