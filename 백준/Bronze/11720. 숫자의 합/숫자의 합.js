let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);
let data = input[1].split("").map(Number);

let sum = data.reduce((a, b) => a + b);

console.log(sum);