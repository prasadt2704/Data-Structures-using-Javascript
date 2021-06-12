import Node from "../SinglyLL/node";

class SinglyCircularLinkedList {
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
          node.next = node;
          this.tail = node;
          this.curr_size++;
        } else {
          node.next = this.head;
          this.head = node;
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
          node.next = node;
          this.tail = node;
          this.curr_size++;
        } else {
          while (current.next != this.head) {
            current = current.next;
          }
          current.next = node;
          this.tail = node;
          this.tail.next = this.head;
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
        this.head = next;
        this.tail.next = this.head;
        this.curr_size--;
      }
    }
  
    removeAtPosition(position) {
      if (this.isEmpty()) {
        console.log("Nothing to remove");
      } else if (position > 0 && position < this.getLength()) {
        var current = this.head;
        for (let i = 1; i < position; i++) {
          current = current.next;
        }
        current.next = current.next.next;
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
        while (current.next && current.next.next != this.head) {
          current = current.next;
        }
        current.next = this.head;
        this.tail = current;
        this.curr_size--;
      }
    }
  
    reverse() {
      if (this.isEmpty()) {
        console.log("Nothing to print");
      } else {
        var prev = null;
        var next = null;
        var current = this.head;
        while (current.next != this.head) {
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
        }
        current.next = prev;
        this.head.next = current;
        this.tail = this.head;
        this.head = current; 
      }
    }
}
  
var singlycircularll = new SinglyCircularLinkedList();
singlycircularll.insertAtEnd(1);
singlycircularll.insertAtBegining(0);
singlycircularll.insertAtEnd(3);
singlycircularll.insertAtPosition(2, 2);
singlycircularll.insertAtPosition(3, 3);
singlycircularll.removeAtBegining();
singlycircularll.removeAtPosition(3);
singlycircularll.removeAtEnd();
singlycircularll.insertAtEnd(3);
singlycircularll.print();
console.log("reverse of doubly circular linked list is:");
singlycircularll.reverse();
singlycircularll.print();