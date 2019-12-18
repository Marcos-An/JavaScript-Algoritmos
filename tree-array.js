const tree = [2, 10, 25, 11, 13, 01, 04, 05, 20, 12, 45, 76, 32, 67, 86]

function sort(tree) {
  for (var i = 0; i < tree.length; i++) {
    for (var j = 0; j < tree.length - 1; j++) {
      if (tree[j] > tree[j + 1]) {
        let aux = tree[j]
        tree[j] = tree[j + 1]
        tree[j + 1] = aux
      }
    }
  }
  return tree;
}

function search(tree, value) {
  var index = Math.trunc(tree.length / 2)
  if (index < 1) {
    return "Este número não existe"
  }
  if (tree[index] === value) {
    return tree[index]
  }
  if (value > tree[index]) {
    let NewTree = []
    for (var i = index; i < tree.length; i++) {
      NewTree.push(tree[i])
    }
    return search(NewTree, value)
  }
  if (value < tree[index]) {
    let NewTree = []
    for (var i = 0; i < index; i++) {
      NewTree.push(tree[i])
    }
    return search(NewTree, value)
  }
}

sort(tree)
console.log(tree);
console.log(search(tree, 90))