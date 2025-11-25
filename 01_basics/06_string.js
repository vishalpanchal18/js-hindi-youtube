const name = "vishal"
const repoCount = 50

//console.log(name + repoCount + " value");


//use backstrick


console.log(`Hello my name is ${name} and my repo is ${repoCount}`)


const gameName = new String(`vishal`)

//there are so many function in string and we can use as

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newString = "   Vishal  "
console.log(newString);
console.log(newString.trim());


const url = "https://vishal.com//vishal%20panchal"
console.log(url.replace('%20','-'))


