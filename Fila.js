function Queue() {
  var items = []

  const inQueue = (e) => {
    items.push(e)
  }

  const reQueue = () => {
    return items.shift()
  }

  const front = () => {
    return item[0]
  }

  const isEmpety = () => {
    if (items.length === 0) {
      console.log("Está vazia")
    } else console.log("Não está vazia");

  }

  const size = () => {
    return items.length
  }

  const print = () => {
    console.log(items.toString());

  }
  return {
    inQueue: (e) => inQueue(e),
    reQueue: () => reQueue(),
    front: () => front(),
    isEmpety: () => isEmpety(),
    size: () => size(),
    print: () => print()
  }
}

const Fila = Queue()

Fila.inQueue("Matheus")
Fila.inQueue("Kati")
Fila.inQueue("Carol")
Fila.inQueue("Marcos")

Fila.print()

Fila.reQueue()
Fila.print()
