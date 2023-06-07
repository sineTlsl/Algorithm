const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n").map(Number);

input.shift();
let result = input.sort((a, b) => a - b);

console.log(result.join("\n"));