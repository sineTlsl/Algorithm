const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const orders = input[1].split(' ').map(Number);

class Deque extends Array {
  front() {
    return this[0];
  }
  back() {
    return this[this.length - 1];
  }
  popLeft() {
    return this.shift();
  }
  rotate(idx) {
    if (idx > 0) {
      while (idx--) this.unshift(this.pop());
    } else {
      while (idx++) this.push(this.shift());
    }
  }
}

const solution = (N, M, orders) => {
  const deque = new Deque();
  let count = 0;
    
  for (let i = 1; i <= N; i++) deque.push(i);
  orders.forEach((order) => {
    const idx = deque.indexOf(order);
      
    if (idx === 0) deque.popLeft();
    else {
      if (idx <= Math.floor(deque.length / 2)) {
        deque.rotate(-idx);
        deque.popLeft();
        count += idx;
      } else {
        deque.rotate(deque.length - idx);
        count += deque.length - idx;
        deque.popLeft();
      }
    }
  });
    
  return count;
};

console.log(solution(N, M, orders));