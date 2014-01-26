#! /usr/bin/env node

/*****
*
* This is based on Listing 5.3 in Hour 5 of the SAMS book.
* This uses the 301 header to redirect the user to another
* site. The port has been changed to 3002 so both servers
* can run side-by-side. At the command line, invoke this
* one with a & to make it go into the background, e.g.:
*
* $ node redirect.js &
* 
* so that you return to the prompt and run something else.
*
*****/

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(301, {
        'Location': 'http://www.footballopod.com'
    });
    res.end();
}).listen(3002, "127.0.0.1");
console.log("Server running at http://127.0.0.1:3002/.");
