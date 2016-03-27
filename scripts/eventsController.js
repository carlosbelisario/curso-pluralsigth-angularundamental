var fs = require('fs');

module.exports.get = function(request, response) {
    var event = fs.readFileSync('app/data/event/' + request.params.id + '.json', 'utf8');
    response.setHeader('Content-type', 'application/json');
    response.send(event);
}

module.exports.save = function(request, response) {
    var event = request.body;
    fs.writeFileSync('app/data/event/' + request.params.id + '.json', JSON.stringify(event));
    response.send(event);
}
