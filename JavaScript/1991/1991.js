let fs = require("fs");
let input = fs
  .readFileSync("JavaScript/1991/input.txt")
  .toString()
  .trim()
  .split("\n");

let N = 0;
const children = [];

for (let i = 0; i < input.length; i++) {
  if (i === 0) {
    N = Number(input[i]);
  } else {
    let child = input[i].split(" ");
    child.forEach((el) => {
      children.push(el);
    });
  }
}

console.log(solution(N, children));

function solution(N, children) {
  const tree = [];
  tree.push(undefined); // 0번 인덱스는 편의를 위해서 비워둠
  // Left 정점 = Index * 2
  // Right 정점 = Index * 2 + 1
  // Parent 정점 = floor(Index / 2).  // Index를 2로 나누고 소수점을 버림

  // 14 / 2 = 7
  children.forEach((el) => {
    if (el === ".") {
      tree.push(undefined);
    } else {
      if (tree.length) {
        tree.push(el);
      }
    }
  });
  return tree;
}

// [
//   undefined
//   A,
//   B, C,
//   D, undefined, E, F,
//   undefined, undefined, undefined, undefined,
//   undefined, undefined, undefined, G
// ]
