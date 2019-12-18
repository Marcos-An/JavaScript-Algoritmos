const grafo = [
  ['A', 'B', 'E', 'F'],
  ['B', 'C'],
  ['C', 'D'],
  ['D'],
  ['E'],
  ['F', 'G'],
  ['G']
]

function LinkedList() {
  let way = []
  let head
  let length = 0

  const CheckWay = (sai, cheguei, grafo) => {
    for (let i = 0; i < grafo.length; i++) {
      let node = grafo[i]
      if (sai == node.valor) {
        way.push(node.valor)
        console.log(way)
        node.next ? CheckWay(node.next.valor, 'D', grafo) : null
      }
    }
  }
  const AddWay = (grafo) => {
    grafo.forEach((__, index) => {
      for (var i = 0; i < grafo[index].length; i++) {
        Add(grafo[index][i])
      }
      grafo[index] = head
      head = {}
      length = 0
    });
    return console.log(grafo)
  }

  const Node = (value) => {
    let valor = value
    let next = null
    return {
      valor,
      next
    }
  }

  const Add = (value) => {
    if (length === 0) {
      head = Node(value)
      length++
      return head
    }
    let node = head
    while (node.next) {
      node = node.next
    }
    node.next = Node(value)
    length++
    return node
  }

  return {
    Add: (value) => Add(value),
    AddWay: (grafo) => AddWay(grafo),
    CheckWay: (sai, cheguei, grafo) => CheckWay(sai, cheguei, grafo)
  }
}

const List = LinkedList()

console.log(grafo);
console.log(" ");
List.AddWay(grafo)
console.log(" ");
List.CheckWay('B', 'D', grafo)


