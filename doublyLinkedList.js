class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class MyDoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    } else if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    const prevPointer = this.getNodeAtIndex(index - 1);
    const nextPointer = prevPointer.next;
    newNode.prev = prevPointer;
    newNode.next = nextPointer;
    prevPointer.next = newNode;
    nextPointer.prev = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index >= this.length) {
      console.log("index is out of limits");
      return;
    }
    const indexToRemove = this.getNodeAtIndex(index);
    const nextPointer = indexToRemove.next;
    const prevPointer = indexToRemove.prev;
    if (prevPointer && nextPointer) {
      prevPointer.next = nextPointer;
      nextPointer.prev = prevPointer;
    } else if (!prevPointer) {
      nextPointer.prev = null;
      this.head = nextPointer;
    } else if (!nextPointer) {
      prevPointer.next = null;
      this.tail = prevPointer;
    }
    this.length--;
    return this;
  }

  getNodeAtIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  shift(){
    const previousHead = this.head.value;
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
    if(this.length===0){
      this.tail=null;
    }
    return previousHead;
  }

  pop(){
    if(this.length===1){
      const removedNode = this.head.value;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedNode;
    }

    const firstPointer = this.getNodeAtIndex(this.length-2);
    const removedNode = firstPointer.next.value;
    this.tail = firstPointer;
    this.tail.next = null;
    this.length--;

    return removedNode;
  }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);
