import Node from "./node";

class SinglyLinkedList {
    constructor() {
      this.head = null;
    }
  
    getLength() {
      var temp = this.head;
      let length = 0;
  
      while (temp) {
        temp = temp.next;
        length++;
      }
      return length;
    }
  
    isEmpty() {
      return this.head === null;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("Nothing to print");
      } else {
        var current = this.head;
        while (current) {
          console.log(current.element + " =>");
          current = current.next;
        }
      }
    }
  
    basicDataValidation(data) {
      if (data != null) {
        return true;
      } else {
        console.log("Please enter valid data");
        return false;
      }
    }
  
    insertAtEnd(data) {
      if (this.basicDataValidation(data)) {
        var node = new Node(data);
        var current;
        if (this.isEmpty()) {
          this.head = node;
        } else {
          current = this.head;
          while (current.next) {
            current = current.next;
          }
          current.next = node;
        }
      }
    }
  
    insertAtBegining(data) {
      if (this.basicDataValidation(data)) {
        var node = new Node(data);
        var current;
        if (this.isEmpty()) {
          this.head = node;
        } else {
          node.next = this.head;
          this.head = node;
        }
      }
    }
  
    insertAtPosition(data, position) {
        if (this.basicDataValidation(data) && position > 0 &&
           position <= this.getLength()) {
          var node = new Node(data);
          var current;
          current = this.head;
          for(let i=1; i<position; i++) {
            current = current.next;
          }
          node.next = current.next;
          current.next = node;
        }
    }
  
    removeAtStart() {
      if (this.head === null) {
        console.log("nothing to remove");
      } else {
        var current = this.head;
        this.head = current.next;
        current.next = null;
      }
    }
  
    removeAtEnd() {
      if (this.head === null) {
        console.log("nothing to remove");
      } else {
        var current = this.head;
        while (current.next && current.next.next){
          current = current.next;
        }
        current.next = null;
      }
    }
  
    removeAtPosition(position) {
      if (!position) {
        console.log("Enter valid positon number");
      } else if (position > 0 && position < this.getLength()){
        var current = this.head;
        for(let i = 1; i < position; i++) {
          current = current.next;
        }
        current.next = current.next.next;
      } else {
        console.log("Enter a valid position");
      }
    }
  
    reverse() {
      if (this.isEmpty()) {
        console.log("Nothing to reverse");
      } else {
        var current = this.head;
        var next = null;
        var prev = null;
  
        while(current) {
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
        }
        this.head = prev;
      }
    }
  }
  
  var singlyll = new SinglyLinkedList();
  singlyll.insertAtEnd(11);
  singlyll.insertAtEnd(1);
  singlyll.insertAtEnd(2);
  singlyll.insertAtEnd(3);
  singlyll.insertAtEnd(4);
  singlyll.insertAtBegining(5);
  singlyll.insertAtBegining(2);
  singlyll.insertAtPosition(8,2);
  singlyll.removeAtStart();
  singlyll.removeAtEnd();
  singlyll.removeAtPosition(2);
  singlyll.print();
  singlyll.reverse();
  console.log("After reverse:")
  singlyll.print();