#! /usr/bin/env node

/*****
*
* This is based on Listing 4.1 in Hour 4 of the SAMS book.
* It is a demonstration of network i/o and callbacks.
* It prints the contents of two local files and asks for
* basic information from two servers.
* You can see the sequence defined below.
*
*****/

var fs = require('fs'),
    http = require('http');

http.get({ host : 'www.icedwater.com' }, function (res) {
    console.log("1: Returned message from icedwater.com.");
    console.log(res.headers);
}).on('error', function(e) {
    console.log("1: Whoops, error.");
});

fs.readFile('file1.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log('2: File 1 read.');
    console.log(data);
});

http.get({ host : 'www.sleague.com' }, function (res) {
    console.log("3: Returned message from sleague.com.");
    console.log(res.headers);
}).on('error', function(e) {
    console.log("3: Whoops, error.");
});

fs.readFile('file2.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log('4: File 2 read.');
    console.log(data);
});
