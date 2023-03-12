let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n").map((a) => a.trim());

console.log(solution(input));

function solution(input) {
  let stack = [];
  const [N, M] = input[0].split(" ").map(Number);

  for (let i = 0; i < M; i++) {
    let arr = input[i * 2 + 2].split(" ").map(Number);

    for (let k = 0; k < arr.length; ++k) {
      stack.push(arr[k]);
      if (arr[k] < arr[k + 1]) {
        stack.pop();
      }
    }
  }

  if (stack.length === N) {
    stack.sort();
    return "Yes";
  } else {
    return "No";
  }
}