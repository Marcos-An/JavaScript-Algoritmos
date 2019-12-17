function ListaLigada() {
  let cabeca
  let tamanho = 0

  const Print = () => {
    return cabeca
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
      for (var i = 0; i <= tamanho; i++) {
        let node = cabeca
        let next = cabeca.prox
        for (let j = 0; j < tamanho - 1; j++) {
          if (node.valor > next.valor) {
            let aux = node.valor
            node.valor = next.valor
            next.valor = aux
          }
          node = next
          next = next.prox
        }
      }
    }
    return cabeca
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
Lista.add(5)
Lista.add(2)
console.log(Lista.Print());
console.log(Lista.order());