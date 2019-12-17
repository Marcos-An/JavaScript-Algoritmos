// Pre-Order : Mostra o valor da arvore e depois navega
// In-Order :  Mostra o valor da arvore durante a navegação
// pos-Order :  Mostra o valor da arvore após a navegação

let tree = {
  left: {
    left: {
      left: {
        value: 7,
        left: null,
        right: null
      },
      right: {
        value: 9,
        right: {
          value: 6,
          right: null,
          left: null
        },
        left: null
      },
      value: 2,
    },
    right: null,
    value: 11
  },
  right: null,
  value: 10,
}

function preOrder(tree) {
  console.log(tree.value)
  tree.left && preOrder(tree.left)
  tree.right && preOrder(tree.right)
}

console.log("preOrder: ");
preOrder(tree)

function inOrder(tree) {
  tree.left && preOrder(tree.left)
  console.log(tree.value)
  tree.right && preOrder(tree.right)
}
console.log(" ");

console.log("inOrder: ");
inOrder(tree)

function posOrder(tree) {
  tree.left && posOrder(tree.left)
  tree.right && posOrder(tree.right)
  console.log(tree.value)
}
console.log(" ");

console.log("posOrder: ");
posOrder(tree)