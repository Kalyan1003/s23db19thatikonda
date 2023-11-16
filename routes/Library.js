var express = require('express');
const library_controlers= require('../controllers/library');
var router = express.Router();
/* GET costumes */
router.get('/', library_controlers.library_view_all_Page );
module.exports = router;

/* GET detail costume page */
router.get('/detail', library_controlers.library_view_one_Page);

/* GET create costume page */
router.get('/create', library_controlers.library_create_Page);

/* GET create update page */
router.get('/update', library_controlers.library_update_Page);

/* GET delete costume page */
router.get('/delete', library_controlers.library_delete_Page);


