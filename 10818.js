let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let number = input[1].split(" ").map(Number);
let sorted = number.sort((a, b) => b - a);

console.log(sorted[sorted.length - 1] + " " + sorted[0]);
