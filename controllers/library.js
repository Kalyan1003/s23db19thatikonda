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
    
    // VIEWS
// Handle a show all view
exports.library_view_all_Page = async function(req, res) {
try{
thelibrarys = await library.find();
res.render('library', { title: 'Libraries Search Results', results: thelibrarys });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// Handle Costume create on POST.
exports.library_create_post = async function(req, res) {
    console.log(req.body)
    let document = new library();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.timings = req.body.timings;
    document.place = req.body.place;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
    exports.library_detail = async function (req, res) {
        console.log("detail" + req.params.id)
        try {
            result = await library.findById(req.params.id)
            res.send(result)
        } catch (error) {
            res.status(500)
            res.send(`{"error": document for id ${req.params.id} not found`);
        }
    };
   
    //New code for Assignment 12 for screenshot2
    //Handle ant update form on PUT
    exports.library_update_put = async function (req, res) {
        console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
        try {
            let toUpdate = await library.findById(req.params.id)
            // Do updates of properties
            if (req.body.name)
                toUpdate.name = req.body.name;
            if (req.body.timings) toUpdate.timings= req.body.timings;
            if (req.body.place) toUpdate.place= req.body.place;
            let result = await toUpdate.save();
            console.log("Sucess " + result)
            res.send(result)
        } catch (err) {
            res.status(500)
            res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
        }
    };