'use strict';

const fs = require('fs');
const input = [];
let output = 0;

fs.readFile('./input.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);

    input.push(data.split('\n'));
    input.push(parseInt(input.length - 1));

    console.log(input.length, 'length'); // verifies the file was read and imported

    // this is BAD but does the job; a deliberately sloppy example solution to mess with
    for (var i  = 0; i < input[0].length; i++) {
        for (var j = 0; j < input[0].length; j++) {
            for (var k = 0; k < input[0].length; k++) {
            // console.log(i,j,k);
            if (parseInt(input[0][i]) + parseInt(input[0][j]) + parseInt(input[0][k]) === 2020) {
                console.log(parseInt(input[0][i]) * parseInt(input[0][j])  * parseInt(input[0][k]));
            
            }
        }
    }
});