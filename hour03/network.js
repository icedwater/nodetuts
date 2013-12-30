#! /usr/bin/env node

/*****
*
* This is based on Listing 3.1 in Hour 3 of the SAMS book.
* First try at network i/o, essentially pinging websites.
*
*****/

var http = require('http'),
    _ = require('underscore'),
    urls = ['hackerspace.sg', 'mail.google.com', 'aardwolf.com'];

function fetchPage(url) {
    var start = new Date();
    http.get({host: url}, function(res) {
        console.log("Heard from: " + url + " in", new Date() - start, "ms.");
    });
}

// Here I opted to use the underscore functionality from hour02 to iterate
// through the list of URLs rather than use a fixed number. One might also
// consider using urls.length instead.


// this is the bounded solution which requires urls.length

for (var i = 0; i < urls.length; i++) {
    fetchPage(urls[i]);
}

/*
_.each(urls, function(url) {
    fetchPage(url);
});
*/

