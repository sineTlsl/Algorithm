let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

solution(input);

function solution(input) {
  const W = input.slice(0, 10);
  const K = input.slice(10, 20);

  for (let i = 0; i < 10; i++) {
    for (let j = i + 1; j < 10; j++) {
      if (W[i] > W[j]) {
        let tmp = W[i];
        W[i] = W[j];
        W[j] = tmp;
      }
      if (K[i] > K[j]) {
        let tmp = K[i];
        K[i] = K[j];
        K[j] = tmp;
      }
    }
  }

  let w_answer = W.slice(-3).reduce((a, b) => a + b);
  let k_answer = K.slice(-3).reduce((a, b) => a + b);

  let answer = [w_answer, k_answer];
  console.log(answer.join(" "));
}
