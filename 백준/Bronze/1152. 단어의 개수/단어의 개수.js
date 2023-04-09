const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let result = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    result++;
  }
}

console.log(result);