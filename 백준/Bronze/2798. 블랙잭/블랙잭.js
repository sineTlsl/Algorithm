let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
solution(input);

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const num = input[1].split(" ").map(Number);
  let max = 0;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        let sum = num[i] + num[j] + num[k];
        if (sum > max && sum <= M) {
          max = sum;
        }
      }
    }
  }

  console.log(max);
}
