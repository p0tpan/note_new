console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));
var filteredArray = _.uniq(['Brandon', '1', 'Brandon', '1', '2','3'])
console.log(filteredArray);

var res = notes.Add(2,3);
console.log(`Result: ${res}`);
// var user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
