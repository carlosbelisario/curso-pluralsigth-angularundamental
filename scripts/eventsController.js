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

module.exports.getAll = function(request, response) {
    var files = [],
        path = 'app/data/event',
        result = '['
    ;
    try {
        files = fs.readdirSync(path);
    } catch(e) {
        response.send([]);
        response.end();
    }
    
    for (var i = 0; i < files.length; i++) {
        if (files[i].indexOf('.json') == files[i].length - 5) {
            result += fs.readFileSync(path + '/' + files[i]) + ',';
        }        
    }
    result = result.substr(0, result.length - 1);
    result += ']';
    
    response.setHeader('Content-type', 'application/json');
    response.send(result);
    response.end();
}
