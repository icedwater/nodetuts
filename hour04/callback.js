#! /usr/bin/env node

/*****
*
* This is based on Example 3 in Hour 4 of the SAMS book.
* It is a demonstration of how callbacks work in JavaScript.
*
*****/

function haveBreakfast(food, drink, callback) {
    console.log('Having breakfast of ' + food + ', ' + drink);
    if (callback && typeof(callback) === "function") {
        callback();
    }
}

// The following call to haveBreakfast() specifies the callback
// function inline.

haveBreakfast('eggs', 'bandung', function() {
    console.log('Done with breakfast? Time for work!');
});
