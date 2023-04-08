let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let C = Number(input[0]);

for (let i = 1; i <= C; i++) {
  let arr = input[i].split(" ").map(Number);
  let N = arr.shift();
  let cnt = 0;

  let sum = arr.reduce((a, b) => a + b);
  arr.map((el) => {
    if (sum / N < el) cnt++;
    return cnt;
  });
  console.log(`${((cnt / N) * 100).toFixed(3)}%`);
}
