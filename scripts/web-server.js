var express = require('express'),
    path = require('path'),
    events = require('./eventsController'),
    bodyParser = require('body-parser'),
    app = express(),
    rootPath = path.normalize(__dirname + '/../')
;    

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/app'));

app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);
app.listen(8000);

console.log('Server running 8000 ...');
