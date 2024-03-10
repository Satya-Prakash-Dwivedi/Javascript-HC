const name = "satya"
const repoCount = 12

// console.log(name + repoCount + "value");
// Do not use this method instead use backticks as shown below

console.log(`Hello my name is ${name} and the repocount is ${repoCount}`);

// Another way to define string and this is best as it gives a lot more functions to operate on it

const gameName = new String('Satya-pd-com')

// console.log(gameName[0])
// console.log(gameName.__proto__)

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   satya    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://satya.com/satya%20prakash"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));