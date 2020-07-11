//reverse a string

let str = 'Hello World!'
let len = str.length
let newStr = ''

// first by for loop
for(let i=0; i<len; i++){
newStr = str[i] + newStr
}

// by revesre method
newStr = str.split('').reverse().join('');

console.log(newStr);