let fs = require('fs');
let input = fs.readFileSync('JavaScript/1874/input.txt').toString().trim().split("\n");
const [n, ...arr] = input.map(Number);;

console.log(solution(arr));

function solution(arr) {
  let stack = [];
  let result = [];
  let number = 1;

  arr.forEach(el => {
    while (el >= number) {
      stack.push(number);
      result.push('+');
      number++;
    }
    result.push('-');
    if (stack.pop() !== el) {
      result = ['NO'];
    }
  })
  
  return result.join('\n');
}