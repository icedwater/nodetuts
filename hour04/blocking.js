#! /usr/bin/env node

/*****
*
* This is based on Listing 4.2 in Hour 4 of the SAMS book.
* It is a demonstration of blocking functions.
* It uses a sleep() call to simulate delays.
* Notice here that the second function must wait till the
* first ends before it can start.
*
*****/

function sleep(ms) {
    var start = new Date().getTime();
    while ((new Date().getTime() - start) < ms) {
        // do nothing here for the duration.
    }
}

function fetchPage() {
    console.log('fetching page');
    sleep(800);
    console.log('data returned from requesting page.');
}

function fetchAPI() {
    console.log('fetching API');
    sleep(450);
    console.log('data returned by the API.');
}

fetchPage();
fetchAPI();
