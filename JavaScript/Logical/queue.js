// this is the implementation of queue data structure which is FIFO (first in first out) in nature

class Queue {
  #arr = [];
  #size = 0;
  #currentSize = 0;

  constructor(size) {
    this.#currentSize = 0;
    this.#size = size;
  }

  enqueue(data) {
    if (this.#currentSize >= this.#size) {
      return -1;
    }

    this.#currentSize++;
    this.#arr.push(data);
  }

  dequeue() {
    if (this.#currentSize === 0) {
      return -1;
    }

    this.#currentSize--;
    return this.#arr.shift();
  }

  getSize() {
    return this.#currentSize;
  }

  isEmpty() {
    return this.#currentSize === 0;
  }
}

( function main() {

  let queue = new Queue(5);

  queue.enqueue(1);
  queue.enqueue(2);

  console.log("first element : " + queue.dequeue());
  console.log("size : " + queue.getSize());
  console.log("isEmpty : " + queue.isEmpty());
} )();
