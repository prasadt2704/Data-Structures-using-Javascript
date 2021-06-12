import Queue from '../Queue/queue.js';

class StackUsingQueue {
    constructor() {
      this.q1 = new Queue();
      this.q2 = new Queue();
      this.stack_size = 0;
    }
  
    push(element) {
      if (!element) {
        console.log("Enter a valid element into stack");
      } else {
        this.q2.enqueue(element);
        while(!this.q1.isEmpty()) {
          this.q2.enqueue(this.q1.getFront());
          this.stack_size += 1;
          this.q1.dequeue();
        }
        let temp = this.q1;
        this.q1 = this.q2;
        this.q2 = temp;
        console.log(element + " has been pushed into the stack");
      }
    }
  
    pop() {
      if (this.q1.isEmpty()) {
        console.log("Nothing to pop");
      } else {
        let res = this.q1.dequeue();
        this.stack_size -= 1;
        console.log(res + " has been popped out of the stack");
      }
    }
  
    printStack() {
      if(this.q1.isEmpty()) {
        console.log("Nothing to print");
      } else {
        console.log("The stack is :");
        this.q1.print();
      }
    }
}
  
var stack = new StackUsingQueue();
stack.push(2);
stack.push(4);
stack.push(6);
stack.push(8);
stack.pop();
stack.printStack();