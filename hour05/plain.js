#! /usr/bin/env node

/*****
*
* This is based on Listing 5.2 in Hour 5 of the SAMS book.
* It is a rehash of the helloWorld server in hour 1, but
* an added header specifies the content is plain text.
* The port has been changed to 3001 so both servers can
* be run side-by-side. At the command line, invoke either
* one with a & to make it go into the background, e.g.:
*
* $ node plain.js &
* 
* so that you return to the prompt and may run the other.
*
*****/

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end("Hello world\n");
}).listen(3001, "127.0.0.1");
console.log("Server running at http://127.0.0.1:3001/.");
