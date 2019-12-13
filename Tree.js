// Pre-Order : Mostra o valor da arvore e depois navega
// In-Order :  Mostra o valor da arvore durante a navegação
// pos-Order :  Mostra o valor da arvore após a navegação

let tree = {
  left: null,
  right: null,
  value: 10
}

function preOrder(tree) {
  console.log(tree.value)
  tree.left ? preOrder(tree.left) : console.log("Nada na esquerda");
  tree.right ? preOrder(tree.right) : console.log("Nada na direita");
}

preOrder(tree)