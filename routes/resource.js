var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var library_controller = require('../controllers/library');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/library', library_controller.library_create_post);
// DELETE request to delete Costume.
router.delete('/library/:id', library_controller.library_delete);
// PUT request to update Costume.
router.put('/library/:id', library_controller.library_update_put);
// GET request for one Costume.
router.get('/library/:id', library_controller.library_detail);
// GET request for list of all Costume items.
router.get('/library', library_controller.library_list);
module.exports = router;