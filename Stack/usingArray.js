class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  isEmpty() {
    return this.top === 0;
  }

  getStackLength() {
    return this.data.length;
  }

  push(element) {
    if (!element) {
      console.log("Please enter a valid element into stack")
    } else {
      this.data[this.top] = element;
      this.top += 1;
      console.log(element + " has been pushed in the stack")
    }
  }

  pushInFixedSizeStack(element, length) {
    if (element && this.getStackLength() <= length - 1) {
      this.data[this.top] = element;
      this.top += 1;
      console.log(element + " has been pushed in the stack");
    } else if (!element) {
      console.log("Please enter a valid element into stack")
    } else if (this.getStackLength() >= length) {
      console.log("The stack is full please pop elements first")
    }
  }

  pop() {
    if (this.isEmpty() === false) {
      this.top -= 1;
      let poppedElement = this.data.pop();
      console.log(poppedElement + " has been popped out of the stack");
    }
  }

  peek() {
    if (this.isEmpty() === false) {
      return this.data[this.top - 1];
    }
  }

  print() {
    if (this.isEmpty() === false) {
      for (let i = this.data.length; i >= 0; i--) {
        console.log(this.data[i]);
      }
    } else {
      console.log("The stack is empty");
    }
  }

  reverse() {
    console.log('reverse stack:');
    this._reverse(this.top - 1);
  }

  _reverse(index) {
    if (index != 0) {
      this._reverse(index - 1);
    }
    console.log(this.data[index]);
  }

  pushTwoElements(element1, element2) {
    if (this.isEmpty() == true || this.getStackLength() <= 3) {
      this.push(element1);
      this.push(element2);
    } else {
      console.log("Stack is full try popping out element");
    }
  }

  popTwoElements() {
    if (this.isEmpty() === false && this.getStackLength() >= 1) {
      this.pop();
      this.pop();
    } else {
      console.log("Need atleast 2 elements to pop");
    }
  }
}

var arrayStack = new Stack();
arrayStack.push(1);
arrayStack.push(2);
arrayStack.push(3);
arrayStack.pushTwoElements(4, 5);
arrayStack.popTwoElements();
arrayStack.reverse();

var fixedStack = new Stack();
fixedStack.pushInFixedSizeStack(1, 5);
fixedStack.pushInFixedSizeStack(2, 5);
fixedStack.pushInFixedSizeStack(2, 5);
fixedStack.pushInFixedSizeStack(4, 5);
fixedStack.pushInFixedSizeStack(5, 5);
fixedStack.pushInFixedSizeStack(6, 5);