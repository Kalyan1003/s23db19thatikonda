// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"library", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
