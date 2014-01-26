#! /usr/bin/env node

/*****
*
* This is based on Listing 5.5 in Hour 5 of the SAMS book.
* Here, a HTTP client grabs something from a specified server.
*
*****/

var http = require('http');

var options = {
    host: 'www.sleague.com',
    port: 80,
    path: '/'
};

http.get(options, function (res) {
    if (res.statusCode == 200) {
        console.log("The site " + options.host + " is up.");
    } else {
        console.log(res.statusCode + ": something is not right.");
    }
}).on('error', function (e) {
    console.log("There was an error: " + e.message);
});
