class Node {
  constructor(color, num, next = null) {
    this.color = color;
    this.num = num;
    this.next = next;
  }
}

class Stack {
  constructor(limit = 20) {
    this.top = null;
    this.length = 0;
    this.limit = limit;
  }

  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === 0;

  peek = () =>
    this.isEmpty() ? "No cards left" : `${this.top.color}-${this.top.num}`;

  push = (color, num) => {
    const newNode = new Node(color, num, this.top);
    this.top = newNode;
    this.length++;
  };

  pop = () => {
    if (this.isEmpty()) {
      console.log("Deck is full");
    } else {
      const popped = this.top;
      this.top = popped.next;
      this.length--;
      return popped.data;
    }
  };
}

const colors = ["Red", "Blue", "Green", "Yellow"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const deck = new Stack();
const random = (arr) => {
  const randInd = Math.floor(Math.random() * arr.length);
  return arr[randInd];
};

function o() {
  deck.push(random(colors), random(numbers));
  console.log(`1) ${deck.peek()}`);
  deck.pop();
  deck.push(random(colors), random(numbers));
  console.log(`2) ${deck.peek()}`);
  deck.pop();
  deck.push(random(colors), random(numbers));
  console.log(`3) ${deck.peek()}`);
  deck.pop();
  deck.push(random(colors), random(numbers));
  console.log(`4) ${deck.peek()}`);
  deck.pop();
  deck.push(random(colors), random(numbers));
  console.log(`5) ${deck.peek()}`);
  deck.pop();
}

console.log(`\nPlayer 1:\n--------------\n`);
o();
t();
f();

function t() {
  console.log(`\nPlayer 2:\n--------------\n`);
  return o();
}

function f() {
  deck.push(random(colors), random(numbers));
  console.log(`\n--------------\nFirst card in deck: ${deck.peek()}\n`);
}
