var express = require('express');
const library_controlers= require('../controllers/library');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

/* GET costumes */
router.get('/', library_controlers.library_view_all_Page );
module.exports = router;

/* GET detail costume page */
router.get('/detail', library_controlers.library_view_one_Page);

/* GET create costume page */
router.get('/create',secured, library_controlers.library_create_Page);

/* GET create update page */
router.get('/update',secured, library_controlers.library_update_Page);

/* GET delete costume page */
router.get('/delete', secured,library_controlers.library_delete_Page);


