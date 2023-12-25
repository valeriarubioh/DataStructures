// 0 --> 1 -- > 2 -- > 3-- > 4-- > 5 -- > 6 --> null
// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null,
//         },
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;

    return this;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }else if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getNodeAtIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;

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

  remove(index){
    if(index >= this.length) {
      console.error("index is out of limits");
    } else if( index <= 0) {
      this.head = this.head.next;
      this.length--;
    } else if(index  === this.length - 1){
      const firstPointer = this.getNodeAtIndex(index - 1);
      firstPointer.next = null;
      this.tail = firstPointer;
      this.length--;
    } else {
      const firstPointer = this.getNodeAtIndex(index - 1);
      firstPointer.next = firstPointer.next.next;
      this.length--;
    }
    return this;
  }

  shift(){//eliminar primer nodo
    const previousHead = this.head.value;
    this.head = this.head.next;
    this.length--;
    if(this.length===0){
      this.tail=null;
    }
    return previousHead;
  }

  pop(){//eliminar ultimo nodo
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

let myLinkedList = new MySinglyLinkedList(1);
