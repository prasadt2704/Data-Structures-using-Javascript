export default class Queue {
    constructor() {
      this.data = [];
      this.rear = 0;
      this.size = 10; //defines the max size of queue
    }
  
    getQueueLength() {
      return this.rear;
    }
  
    isEmpty() {
      return this.rear === 0;
    }
  
    getFront() {
      if (this.isEmpty()) {
        console.log("Nothing to print!");
      } else {
        return this.data[0];
      }
    }
  
    getLast() {
      if (this.isEmpty()) {
        console.log("Nothing to print");
      } else {
        return this.data[this.rear - 1];
      }
    }
  
    enqueue(element) {
      if (this.rear < this.size) {
        this.data[this.rear] = element;
        this.rear += 1;
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log("Nothing to dequeue");
      } else {
        this.rear -= 1;
        return this.data.shift();
      }
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("Nothing to print");
      } else {
        for (let i = 0; i < this.rear; i++) {
          console.log(this.data[i]);
        }
      }
    }
  
    reset() {
      this.data.length = 0;
      this.rear = 0;
    }
  }