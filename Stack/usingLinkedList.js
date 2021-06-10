import Node from '../Linkedlist/SinglyLL/node.js';

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getStackLength() {
    return this.size;
  }

  peek() {
    if (this.head === null) {
      console.log("No element in the stack");
    } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }

      console.log(current.element);
    }
  }

  push(data) {
    var node = new Node(data);
    var current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  pop() {
    if (this.head === null) {
      console.log("Nothing to pop");
    } else {
      var current = this.head;
      var prev = null;
      while (current.next) {
        prev = current;
        current = current.next;
      }
      prev.next = null;
      current = null;
      this.size--;
      return prev.element;
    }
  }

  print() {
    if (this.head === null) {
      console.log("Nothing to print");
    } else {
      var current = this.head;
      while (current) {
        console.log(current.element + " => ");
        current = current.next;
      }
    }
  }

  reverse() {
    if (this.head === null) {
      console.log("nothing to print");
    } else {
      var current = this.head;
      var prev = null;
      var next = null;
      while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      this.head = prev;
    }
  }
}

var llstack = new LinkedList();
llstack.push(1);
llstack.push(2);
llstack.push(3);
llstack.push(4);
llstack.print();
console.log("================");
llstack.pop();
llstack.peek();
llstack.print();
console.log("================");
llstack.reverse();
llstack.print();