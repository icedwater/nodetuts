#! /usr/bin/env node

/*****
*
* This is based on Listing 5.4 in Hour 5 of the SAMS book.
* Different routes are used here based on the path which
* is entered in the address bar. It's just like different
* files, only the files are defined in the server :)
* The port has been changed to 3003 so both servers can
* run side-by-side. At the command line, invoke this one
* with a & to make it go into the background, e.g.:
*
* $ node routes.js &
* 
* so that you return to the prompt and run something else.
*
*****/

var http = require('http'),
    url = require('url');

http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;

    if (pathname === '/opod') {
        res.writeHead(301, {
            'Location': 'http://www.footballopod.com'
        });
        res.end(); 
    } else if (pathname === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('This would be a longer line about us.\n'); 
    } else if (pathname === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Hello world\n'); 
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end('Looks like you were looking for something else?\n');
    }
}).listen(3003, "127.0.0.1");
console.log("Server running at http://127.0.0.1:3003/.");
