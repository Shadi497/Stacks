class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(limit = 10) {
    this.top = null;
    this.length = 0;
    this.limit = limit;
  }

  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === 0;

  peek = () => (this.isEmpty() ? "Sorry buddy, nothing here" : this.top.data);

  push = (data) => {
    if (this.isFull()) {
      console.log("Eww, the stack is full. Go away!");
    } else {
      const newNode = new Node(data, this.top);
      this.top = newNode;
      this.length++;
    }
  };

  pop = () => {
    if (this.isEmpty()) {
      console.log("What else do you wanna take from me? I have nothing left!");
    } else {
      const popped = this.top;
      this.top = popped.next;
      this.length--;
      return popped.data;
    }
  };

  traverse = () => {
    let st = "";
    let current = this.top;
    while (current) {
      st += ` ${current.data}\n`;
      current = current.next;
    }
    return st;
  };
}

const chickenFillet = new Stack(6);
chickenFillet.push("bottom bun");
//console.log("Peak: ", chickenFillet.peek());
chickenFillet.push("mayo");
//console.log("Peak: ", chickenFillet.peek());
chickenFillet.push("chicken");
//console.log("Peak: ", chickenFillet.peek());
chickenFillet.push("cole slaw");
//console.log("Peak: ", chickenFillet.peek());
chickenFillet.push("pickles");
//console.log("Peak: ", chickenFillet.peek());

console.log(chickenFillet.pop());
console.log(chickenFillet.pop());
console.log(chickenFillet.pop());
console.log(chickenFillet.pop());
console.log(chickenFillet.pop());

/*chickenFillet.pop();
chickenFillet.pop();
chickenFillet.pop();
chickenFillet.pop();*/
//console.log(chickenFillet.peek());
//console.log("Peak: ", chickenFillet.peek());
chickenFillet.push("top bun");
//console.log("Peak: ", chickenFillet.peek());

//console.log(chickenFillet.traverse());
