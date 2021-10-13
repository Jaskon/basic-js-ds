const { Node } = require('../extensions/list-tree.js');

function replaceNode(parent, node, newNode = null) {
  if (parent.left === node) {
    parent.left = newNode;
  } else {
    parent.right = newNode;
  }
}

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  root() {
    return this.node;
  }

  add(data) {
    if (!this.node) {
      this.node = new Node(data);
      return;
    }

    let parent = null;
    let node = this.node;

    while (node) {
      if (data < node.data) {
        parent = node;
        node = node.left;
        continue;
      }

      parent = node;
      node = node.right;
    }

    if (data < parent.data) {
      parent.left = new Node(data);
    } else {
      parent.right = new Node(data);
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let node = this.node;

    while (node) {
      if (data < node.data) {
        node = node.left;
        continue;
      }
      if (data > node.data) {
        node = node.right;
        continue;
      }

      return node;
    }

    return null;
  }

  remove(data) {
    // Algorithm
    // https://www.techiedelight.com/deletion-from-bst/

    let parent = null;
    let node = this.node;

    while (node && node.data === data) {
      if (data < node.data) {
        parent = node;
        node = node.left;
        continue;
      }
      if (data > node.data) {
        parent = node;
        node = node.right;
      }
    }

    if (node === null) {
      return null;
    }

    if (parent === null) {
      // TODO: node to delete is the root one
      return null;
    }


    // Deletion logic

    // No childrens
    if (!node.left && !node.right) {
      replaceNode(parent, node, null);
    }

    // One children
    if ((!node.left && node.right) || (!node.right && node.left)) {
      replaceNode(parent, node, node.left || node.right);
    }

    // Both children
    // TODO
  }

  min() {
    let node = this.node;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.node;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }

}
