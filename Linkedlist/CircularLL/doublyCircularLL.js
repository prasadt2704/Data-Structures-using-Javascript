import Node from "../DoublyLL/node";

class DoublyCircularLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.curr_size = 0;
    }
  
    isEmpty() {
      return this.head === null;
    }
  
    getLength() {
      return this.curr_size;
    }
  
    basicDataValdation(data) {
      if (data != null) {
        return true;
      } else {
        console.log("Enter valid data");
        return false;
      }
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("Nothing to print");
      } else {
        var current = this.head;
        while (current.next != this.head) {
          console.log(current.element);
          current = current.next;
        }
        console.log(current.element);
      }
    }
  
    insertAtBegining(data) {
      if (this.basicDataValdation(data)) {
        var node = new Node(data);
        if (this.isEmpty()) {
          this.head = node;
          node.prev = node.next = node;
          this.tail = node;
          this.curr_size++;
        } else {
          node.next = this.head;
          this.head.prev = node;
          this.head = node;
          this.head.prev = this.tail;
          this.tail.next = this.head;
          this.curr_size++;
        }
      }
    }
  
    insertAtEnd(data) {
      if (this.basicDataValdation(data)) {
        var node = new Node(data);
        var current = this.head;
        if (this.isEmpty()) {
          this.head = node;
          node.prev = node.next = node;
          this.tail = node;
          this.curr_size++;
        } else {
          while (current.next != this.head) {
            current = current.next;
          }
          current.next = node;
          node.prev = current;
          this.tail = node;
          node.next = this.head;
          this.head.prev = this.tail;
          this.curr_size++;
        }
      }
    }
  
    insertAtPosition(data, position) {
      if (this.basicDataValdation(data) &&
        position > 0 && position < this.getLength()) {
        var node = new Node(data);
        var current = this.head;
        for (let i = 1; i < position; i++) {
          current = current.next;
        }
        node.next = current.next;
        current.next = node;
        node.prev = current;
        current = node.next;
        current.prev = node;
        this.curr_size++;
      } else {
        console.log("Enter a valid position")
      }
    }
  
    removeAtBegining() {
      if (this.isEmpty()) {
        console.log("Nothing to remove");
      } else {
        var next = this.head.next;
        this.head.next = null;
        next.prev = null;
        this.head = next;
        this.head.prev = this.tail;
        this.tail.next = this.head;
        this.curr_size--;
      }
    }
  
    removeAtPosition(position) {
      if (this.isEmpty()) {
        console.log("Nothing to remove");
      } else if (position > 0 && position < this.getLength()) {
        var current = this.head;
        var temp = null;
        for (let i = 1; i < position; i++) {
          current = current.next;
        }
        temp = current.next;
        current.next = temp.next;
        temp.prev = null;
        temp.next = null;
        temp = current.next;
        temp.prev = current;
        this.curr_size--;
      } else {
        console.log("Enter valid position")
      }
    }
  
    removeAtEnd() {
      if (this.isEmpty()) {
        console.log("Nothing to remove");
      } else {
        var current = this.head;
        var prev;
        while (current.next != this.head) {
          current = current.next;
        }
        prev = current.prev;
        prev.next = this.head;
        current.prev = null;
        current.next = null;
        current = null;
        this.tail = prev;
        this.curr_size--;
      }
    }
  
    reverse() {
      if (this.isEmpty()) {
        console.log("Nothing to print");
      } else {
        var temp = this.tail;
        while (temp.next != this.tail) {
          console.log(temp.element);
          temp = temp.prev;
        }
        console.log(temp.element);
      }
    }
}
  
var doublycircularll = new DoublyCircularLinkedList();
doublycircularll.insertAtEnd(1);
doublycircularll.insertAtBegining(0);
doublycircularll.insertAtEnd(3);
doublycircularll.insertAtPosition(2,2);
doublycircularll.insertAtPosition(3, 3);
doublycircularll.removeAtBegining();
doublycircularll.removeAtPosition(3);
doublycircularll.removeAtEnd();
doublycircularll.insertAtEnd(3);
doublycircularll.print();
console.log("reverse of doubly circular linked list is:");
doublycircularll.reverse();