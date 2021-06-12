import Node from './node.js';

class DoublyLinkedList {
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
        while(current) {
          console.log(current.element);
          current = current.next;
        }
      }
    }
  
    insertAtBegining(data) {
      if (this.basicDataValdation(data)) {
        var node = new Node(data);
        if(this.isEmpty()) {
          this.head = node;
          this.tail = node;
          this.curr_size++;
        } else {
          node.next = this.head;
          this.head.prev = node;
          this.head = node;
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
          this.tail = node;
          this.curr_size++;
        } else {
          while (current.next) {
            current = current.next;
          }
          current.next = node;
          node.prev = current;
          this.tail = node;
          this.curr_size++;
        }
      }
    }
  
    insertAtPosition(data, position) {
      if (this.basicDataValdation(data) &&
       position > 0 && position < this.getLength()) {
         var node = new Node(data);
         var current = this.head;
         for (let i=1; i<position; i++) {
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
        this.head = next;
        this.head.prev = null;
        this.curr_size--;
      }
    }
  
    removeAtPosition(position) {
      if (this.isEmpty()) {
        console.log("Nothing to remove");
      } else if (position > 0 && position < this.getLength()){
        var current = this.head;
        var temp = null;
        for (let i=1; i < position; i++) {
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
        while(current.next) {
          current = current.next;
        }
        prev = current.prev;
        prev.next = null;
        current.prev = null;
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
        while(temp) {
          console.log(temp.element);
          temp = temp.prev;
        }
      }
    }
}
  
  var doublyll = new DoublyLinkedList();
  doublyll.insertAtBegining(1);
  doublyll.insertAtEnd(2);
  doublyll.insertAtEnd(3);
  doublyll.insertAtPosition(1, 1);
  doublyll.insertAtPosition(2, 2);
  doublyll.insertAtPosition(3, 4);
  doublyll.removeAtBegining();
  doublyll.removeAtPosition(2);
  doublyll.removeAtEnd();
  doublyll.print();
  console.log("Reverse of doublyll is:");
  doublyll.reverse();