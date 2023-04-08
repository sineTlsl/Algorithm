let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
solution(input);

function solution(input) {
  const n = parseInt(input[0]);
  const room = input[1].split("").map(Number);

  let coffee = 0;
  let awake = 0;

  for (let i = 0; i < n; i++) {
    if (room[i] == 1) {
      coffee = 2;
      awake++;
    } else {
      if (coffee !== 0) {
        coffee--;
        awake++;
      }
    }
  }
  console.log(awake);
}
