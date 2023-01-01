function solution(input) {
  const str = input.split("\n");
  const n = parseInt(str[0]);
  const room = str[1].split("").map(Number);

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
  return awake;
}

const input = `10
0100010100`;

console.log(solution(input));