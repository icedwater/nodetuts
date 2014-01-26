#! /usr/bin/env node

/*****
*
* This is based on Listing 4.3 in Hour 4 of the SAMS book.
* It is a demonstration of non-blocking functions.
* Notice here that functions can start and end in parallel,
* and the second does not have to wait for the first to end.
*
*****/

var http = require('http');

function fetchPage() {
    console.log('fetching page');
    http.get({ host: 'trafficjamapp.herokuapp.com', path: '/?delay=2000' },
        function(res) {
            console.log('data returned from requesting page.');
        }).on('error', function(e) {
            console.log('There was an error' + e);
        }
    );
}

function fetchAPI() {
    console.log('fetching API');
    http.get({ host: 'trafficjamapp.herokuapp.com', path: '/?delay=2000' },
        function(res) {
            console.log('data returned by API.');
        }).on('error', function(e) {
            console.log('There was an error' + e);
        }
    );
}

fetchPage();
fetchAPI();
