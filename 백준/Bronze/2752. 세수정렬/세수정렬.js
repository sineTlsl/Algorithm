const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().split(" ").map(Number);

let result = input.sort((a, b) => a - b);
console.log(result.join(" "));