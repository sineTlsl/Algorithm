let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let A = input[0].split("").reverse().join("");
let B = input[1].split("").reverse().join("");

console.log(Math.max(Number(A), Number(B)));
