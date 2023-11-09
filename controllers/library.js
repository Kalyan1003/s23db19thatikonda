var library = require('../models/library');
// List of all Costumes
exports.library_list = function(req, res) {
res.send('NOT IMPLEMENTED: library list');
};
// for a specific Costume.
exports.library_detail = function(req, res) {
res.send('NOT IMPLEMENTED: library detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.library_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: library create POST');
};
// Handle Costume delete form on DELETE.
exports.library_delete = function(req, res) {
res.send('NOT IMPLEMENTED: library delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.library_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: library update PUT' + req.params.id);
};

// List of all Costumes
exports.library_list = async function(req, res) {
    try{
    thelibraries = await library.find();
    res.send(thelibraries);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    