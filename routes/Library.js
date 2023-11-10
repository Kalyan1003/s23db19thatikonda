var express = require('express');
const library_controlers= require('../controllers/library');
var router = express.Router();
/* GET costumes */
router.get('/', library_controlers.library_view_all_Page );
module.exports = router;
