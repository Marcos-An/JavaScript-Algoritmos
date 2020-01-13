function Tree() {
  const Node = (key) => {
    var key = key
    var left = null
    var right = null

    return {
      key,
      left,
      right
    }
  }
  var root = null

  const add = (key) => {
    var newNode = Node(key)

    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  const insertNode = (root, newNode) => {
    if (newNode.key < root.key) {
      if (root.left === null) {
        root.left = newNode
      } else {
        insertNode(root.left, newNode)
      }
    } else {
      if (root.right === null) {
        root.right = newNode
      } else {
        insertNode(root.right, newNode)
      }
    }

  }

  const search = (key) => {
    return searchNode(root, key)
  }

  const searchNode = (root, key) => {
    if (root === null) {
      return false
    }
    if (key < root.key) {
      return searchNode(root.left, key)
    } else if (key > root.key) {
      return searchNode(root.right, key)
    } else return true
  }
  const remove = (root, key) => {
    

  }
  const min = () => {
    return minNode(root)
  }
  const minNode = (root) => {
    if (root) {
      while (root && root.left !== null) {
        root = root.left
      }
      return root.key
    } return null
  }
  const max = () => {
    return maxNode(root)
  }
  const maxNode = (root) => {
    if (root) {
      while (root && root.right !== null) {
        root = root.right
      }
      return root.key
    } else return null
  }

  const inOrder = (callback) => {
    return inOrderNode(root, callback)
  }

  const inOrderNode = (root, callback) => {
    if (root !== null) {
      inOrderNode(root.left, callback)
      callback(root.key)
      inOrderNode(root.right, callback)
    }
  }

  const preOrder = (callback) => {
    return preOrderNode(root, callback)
  }

  const preOrderNode = (root, callback) => {
    if (root !== null) {
      callback(root.key)
      inOrderNode(root.left, callback)
      inOrderNode(root.right, callback)
    }
  }

  const posOrder = (callback) => {
    return posOrderNode(root, callback)
  }

  const posOrderNode = (root, callback) => {
    if (root !== null) {
      inOrderNode(root.left, callback)
      inOrderNode(root.right, callback)
      callback(root.key)
    }
  }


  return {
    add: (key) => add(key),
    search: (key) => search(key),
    min: () => min(),
    max: () => max(),
    inOrder: (callback) => inOrder(callback),
    preOrder: (callback) => preOrder(callback),
    posOrder: (callback) => posOrder(callback)
  }
}

function print(value) {
  console.log(value);
}

const tree = Tree()

tree.add(11)
tree.add(3)
tree.add(12)
tree.add(15)
tree.add(7)
tree.add(9)
tree.add(14)
tree.add(5)
tree.add(19)
tree.add(1)

//tree.inOrder(print)
tree.posOrder(print)

console.log('Min: ' + tree.min())
console.log('Max: ' + tree.max())