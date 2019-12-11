function ListaLigada() {
  let cabeca
  let tamanho = 0

  const Print = () => {
    console.log(cabeca)
  }

  const Node = (value) => {
    let valor = value
    let prox = null
    return {
      valor,
      prox
    }
  }

  const order = () => {
    if (tamanho > 1) {
      var node = cabeca
      var next = cabeca.prox

      for (var j = 0; j <= tamanho; j++) {
        if (node.valor > next.valor) {
          var aux = node.valor
          node.valor = next.valor
          next.valor = aux
        }
        node = next
        next = next.prox
      }
    }
  }

  const SelectById = (index) => {
    if (tamanho === 0) return null
    let node = cabeca
    let count = 0

    while (count < index) {
      node = node.prox
      count++
    }
    return node
  }

  const Adicionar = (value) => {
    if (tamanho === 0) {
      cabeca = Node(value)
      tamanho++
      return cabeca
    }
    let node = cabeca
    while (node.prox) {
      node = node.prox
    }
    node.prox = Node(value)
    tamanho++
    return node
  }

  return {
    Print: () => Print(),
    add: (value) => Adicionar(value),
    SelectById: (index) => SelectById(index),
    order: () => order()
  }
}
Lista = ListaLigada()
Lista.add(6)
Lista.add(2)
Lista.add(1)
console.log(Lista.Print());
console.log(Lista.order());



