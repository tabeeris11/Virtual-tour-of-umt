const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('already-givens'); // Render the already-givens.ejs file
});

module.exports = router;
