//console.log('Hello world');
//console.log('haha');
//console.log('%s:%d', 'hello', 25);
//----------------------------------------------------
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

//-----------------------------------------------------

//var EventEmitter = require('events').EventEmitter;
//var event = new EventEmitter();
//event.on('some_event', function () {
//    console.log('some_event occured.');
//});
//setTimeout(function () {
//    event.emit('some_event');
//}, 1000);

//var myModule = require('./module.js');
//myModule.setName('yehui');
//myModule.sayHello();

//-----------------------------------------------------
//var Hello = require('./hello');
//hello = new Hello();
//hello.setName('BYVoid');
//hello.sayHello();

//var express = require('express')

//var util = require('util');
//function Base() {
//    this.name = 'base';
//    this.base = 1991;
//    this.sayHello = function () {
//        console.log('Hello ' + this.name);
//    };
//}
//Base.prototype.showName = function () {
//    console.log(this.name);
//};
//function Sub() {
//    this.name = 'sub';
//}
//util.inherits(Sub, Base);
//var objBase = new Base();
//objBase.showName();
//objBase.sayHello();
//console.log(objBase);
//var objSub = new Sub();
//objSub.showName();
////objSub.sayHello();
//console.log(objSub);

//var util = require('util');
//function Person() {
//    this.name = 'byvoid';
//    this.toString = function () {
//        return this.name;
//    };
//}
//var obj = new Person();
//console.log(util.inspect(obj));
//console.log(util.inspect(obj, true));

//var events = require('events');
//var emitter = new events.EventEmitter();
//emitter.on('someEvent', function (arg1, arg2) {
//    console.log('listener1', arg1, arg2);
//});
//emitter.on('someEvent', function (arg1, arg2) {
//    console.log('listener2', arg1, arg2);
//});
//emitter.emit('someEvent', 'byvoid', 1991);

//var fs = require('fs');
//fs.readFile('file.txt', 'utf-8', function (err, data) {
//    if (err) {
//        console.error(err);
//    } else {
//        console.log(data);
//    }
//});

//var fs = require('fs');
//fs.open('content.txt', 'r', function (err, fd) {
//    if (err) {
//        console.error(err);
//        return;
//    }
//    var buf = new Buffer(8);
//    fs.read(fd, buf, 0, 8, null, function (err, bytesRead, buffer) {
//        if (err) {
//            console.error(err);
//            return;
//        }
//        console.log('bytesRead: ' + bytesRead);
//        console.log(buffer);
//    })
//})

//var http = require('http');
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/html' });
//    res.write('<h1>Node.js</h1>');
//    res.end('<p>Hello World</p>');
//}).listen(3000);
//console.log("HTTP server is listening at port 3000.");

//var http = require('http');
//var url = require('url');
//var util = require('util');
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end(util.inspect(url.parse(req.url, true)));
//}).listen(3000);

var http = require('http');
var querystring = require('querystring');
var contents = querystring.stringify({
    name: 'byvoid',
    email: 'byvoid@byvoid.com',
    address: 'Zijing 2#, Tsinghua University',
});
var options = {
    host: 'www.byvoid.com',
    path: '/application/node/post.php',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length' : contents.length
    }
};
var req = http.request(options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log(data);
    });
});

req.write(contents);
req.end();