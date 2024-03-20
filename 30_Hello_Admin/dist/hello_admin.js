"use strict";
const userNames = ['admin', 'Tom', 'Jerry', 'Bheem', 'Queen'];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[1] === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
    }
}
