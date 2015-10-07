//console.log('Hello world');
//console.log('haha');
//console.log('%s:%d', 'hello', 25);
//-----------------------------------
//var http = require('http');


//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/html' });
//    res.write('<h1>Node.js</h1>');
//    res.end('<p>Hello World</p>');
//}).listen(3000);
//console.log("HTTP server is listening at port 3000.");

//-----------------------------------
//var fs = require('fs');
//fs.readFile('file.txt', 'utf-8', function (err, data) {
//    if (err) {
//        console.error(err);
//    } else {
//        console.log(data);
//    }
//});
//console.log('end.');

//-----------------------------------

var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function () {
    console.log('some_event occured.');
});
setTimeout(function () {
    event.emit('some_event');
}, 1000);
