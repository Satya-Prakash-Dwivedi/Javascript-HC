const accoutnId = 14453
let accountEmail = "satya@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2,  Not Allowed

accountEmail = "sat@sat.com"
accountPassword = "21221212"
accountCity = "Bengaluru"
let accountstate
/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.log(accoutnId)
console.table({accoutnId,accountEmail,accountCity,accountPassword,accountstate})