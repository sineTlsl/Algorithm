let fs = require("fs");
let input = fs.readFileSync('./dev/stdin').toString().trim().split("\n");
const [n, ...arr] = input;

console.log(solution(n, arr));

function solution (n, arr) {
  let stack = [];
  let result = [];

  arr.forEach(el => {
    const cmd = el.split(' ')[0];
    if (cmd === 'push') {
      const item = el.split(' ')[1];
      stack.push(item)
    } else if (cmd === 'pop') {
      if (stack.length === 0) { result.push(-1); } 
      else {
        result.push(stack[stack.length - 1]);
        stack.pop();
      }
    } else if (cmd === 'size') {
      result.push(stack.length);
    } else if (cmd === 'empty') {
      stack.length === 0 ? result.push(1) : result.push(0);   
    } else if (cmd === 'top') {
      stack.length === 0 ? result.push(-1) : result.push(stack[stack.length - 1]);
    }
  });

  return result.join('\n');
}