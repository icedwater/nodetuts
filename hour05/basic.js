#! /usr/bin/env node

/*****
*
* This is based on Listing 5.1 in Hour 5 of the SAMS book.
* It is a rehash of the helloWorld server in hour 1.
* This time, a http module is used.
*
*****/

var http = require('http');

http.createServer(function (req, res) {
    res.end("Hello world\n");
}).listen(3000, "127.0.0.1");
console.log("Server running at http://127.0.0.1:3000/.");
