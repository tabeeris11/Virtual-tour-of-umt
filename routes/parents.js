const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('parents'); // Render the parents.ejs file
});

module.exports = router;
