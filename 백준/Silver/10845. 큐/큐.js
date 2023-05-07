const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().split("\n");

class Queue {
  constructor() {
    this.queue = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  push(queue) {
    this.queue[this.tailIndex] = queue;
    this.tailIndex++;

    return queue;
  }
  pop() {
    const current = this.queue[this.headIndex];

    if (this.size() === 0) {
      return -1;
    } else {
      delete this.queue[this.headIndex];
      this.headIndex++;

      return current;
    }
  }
  size() {
    return this.tailIndex - this.headIndex;
  }
  empty() {
    if (this.size() === 0) {
      return 1;
    } else {
      return 0;
    }
  }
  front() {
    if (this.size() === 0) {
      return -1;
    } else {
      return this.queue[this.headIndex];
    }
  }
  back() {
    if (this.size() === 0) {
      return -1;
    } else {
      return this.queue[this.tailIndex - 1];
    }
  }
}

const [N, ...arr] = input;

let queue = new Queue();
let result = [];

for (let i = 0; i < N; i++) {
  let [cmd, item] = arr[i].split(" ");

  switch (cmd) {
    case "back":
      result.push(queue.back());
      break;
    case "pop":
      result.push(queue.pop());
      break;
    case "size":
      result.push(queue.size());
      break;
    case "empty":
      result.push(queue.empty());
      break;
    case "front":
      result.push(queue.front());
      break;
    default:
      queue.push(item);
      break;
  }
}

console.log(result.join("\n"));