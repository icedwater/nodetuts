#! /usr/bin/env node

/*****
*
* This is based on Listing 1.1 in Hour 1 of the SAMS book.
* Not much to vary here, I guess. It is a basic webserver.
* I added the port and host variables to the top.
*
*****/

var http = require('http');

var port = 3000;
var host = "127.0.0.1";

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('<html><h1>It works!</h1></html>\n');
}).listen(port, host);

console.log("Server is running at http://" + host + ':' + port + ".\n");
