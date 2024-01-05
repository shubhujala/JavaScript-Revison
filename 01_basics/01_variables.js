const accountId = 12345
let accountEmail = "shubh12@google.com"
var accountPassword = 121212

accountCity ="Jaipur"

let accountState;

//accountId =2  // not allowed!

accountEmail ="shubh1212112@gmail.com"
accountPassword ="@123"

accountCity="Mumbai"


/*
prefer not to use var..
because of issue in block scope and functional scope!
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);