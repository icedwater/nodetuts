#! /usr/bin/env node

/*****
*
* This is based on Listing 1.1 in Hour 2 of the SAMS book.
* Here we figure out how to use modules in code and install
* them using npm.
*
*****/

var _ = require('underscore');
_.each([1, 2, 3], function(num) {
    console.log("underscore.js says " + num);
});
