let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

console.log(soluction(input));

function soluction(input) {
  let [hour, minute] = input[0].split(" ").map(Number);
  let time = parseInt(input[1]);
  let result = [];

  // hour를 분으로 바꾸고, 입력 받은 분도 더 해준 다음, 60으로 나누어서 hour로 표시
  result.push(Math.floor((hour * 60 + minute + time) / 60));
  result.push((hour * 60 + minute + time) % 60);

  // 자정을 넘겼을 경우
  if (result[0] >= 24) {
    result[0] -= 24;
  }

  return result.join(" ");
}