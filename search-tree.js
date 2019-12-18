const tree = {}

function insert(tree, value) {
  if (tree.value) {
    if (value > tree.value) {
      insert(tree.right, value)
    } else {
      insert(tree.left, value)
    }
  } else {
    tree.value = value,
      tree.right = {},
      tree.left = {}
  }
}

insert(tree, 10)
insert(tree, 2)
insert(tree, 0)
console.log(tree);


function search(tree, value) {
  if (!tree.value || tree.value === value) {
    return tree.value
  }
  if (value < tree.value) {
    return search(tree.left, value)
  }

  return search(tree.right, value)
}
console.log("Serch: ");

console.log(search(tree, 2));