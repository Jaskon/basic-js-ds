const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

module.exports = class Queue {
  constructor() {
    this.node = null;
  }

  getUnderlyingList() {
    return this.node;
  }

  enqueue(value) {
    if (!this.node) {
      this.node = new ListNode(value);
      return;
    }

    let node = this.node;
    while (node.next) {
      node = node.next;
    }

    node.next = new ListNode(value);
  }

  dequeue() {
    const node = this.node;
    this.node = this.node.next;
    return node.value;
  }

}
