const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().split("\n");

let [N, K] = input[0].split(" ").map(Number);
let numArr = input[1].split(" ").map(Number);

let sortArr = numArr.sort((a, b) => a - b);

console.log(sortArr[K - 1]);