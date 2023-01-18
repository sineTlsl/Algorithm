let fs = require('fs');
let input = fs.readFileSync('JavaScript/1874/input.txt').toString().trim().split("\n");

const [N, M] = input[0].split(' ').map(Number); 
const selectNums = input[1].split(' ').map(Number);

class Node {
  constructor(val) {
    this.val = val;
    this.prevNode = null;
    this.nextNode = null;
  }
}
  // 1. 왼쪽 데이터 삽입
  // 2. 오른 쪽 데이터 삽입
  // 3. 왼쪽 데이터 삭제
  // 4. 오른쪽 데이터 삭제
  // 5. 현재 위치 구하기

class DoublyLinkedList {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  enqueue(newVal) {
    const newNode = new Node(newVal);
    if (!this.front) {  // 리스트가 비어있을 경우
      this.front = newNode;
      this.rear = newNode;
    } else {
      newNode.prevNode = this.rear;
      this.rear = newNode;
      this.rear.nextNode = newNode;
    }
  }
  dequeue(val) {
    if (!this.front) return null;
  
    let curNode = this.front;
    while (curNode) {
      if (curNode.val === val) { // 현재 노드의 값과 삭제할 값이 같을 때
        if (curNode === this.front && curNode === this.rear) {  // 리스트의 크기가 1일 때
          this.front = null;
          this.rear = null;
        } else if (curNode === this.front) {  // 리스트 앞에서 삭제
          this.front = this.front.nextNode;
          this.front.prevNode = null;
        } else if (curNode === this.rear) {  // 리스트 뒤에서 삭제
          this.rear = this.rear.prevNode;
          this.rear.nextNode = null;
        } else { // 임의의 위치의 원소 임시 삭제 (절차적으로 찾기 위해 일시적으로 삭제함)
          curNode.prevNode.nextNode = curNode.nextNode;
          curNode.nextNode.prevNode = curNode.prevNode;
        }
      }
      curNode = curNode.nextNode;
    }
  }

  rotate() {

  }
}