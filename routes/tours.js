const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('tours'); // Render the tours.ejs file
});

module.exports = router;
