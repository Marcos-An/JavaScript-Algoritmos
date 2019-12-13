function linkedList() {
  let head
  let length = 0

  const Print = () => {
    let node = head
    let AHead = []
    while (node.next) {
      AHead.push(node.name)
      node = node.next
    }
    console.log(AHead);
  }

  const Node = (value) => {
    let name = value
    next = null
    return { name, next }
  }

  const Sort = () => {
    if (length > 1) {
      for (let i = 0; i < length; i++) {
        let node = head
        let next = head.next
        for (let j = 0; j < length - 1; j++) {
          if (node.name > next.name) {
            let aux = node.name
            node.name = next.name
            next.name = aux
          }
          node = next
          next = next.next
        }
      }
    }
    return head
  }

  const selectionPerson = () => {
    let node = head
    let count = 0
    let goTo = Math.floor(Math.random() * (length - 1))
    while (count < goTo) {
      node = node.next
      count++
    }
    return node.name
  }

  const selection = (qty) => {
    if (length === 0) return null
    let node
    let node2
    let i = 0
    while (i <= qty) {
      node = selectionPerson()
      node2 = Add(node)
      i++
    }
    return console.log(node2);
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
    Order: () => Sort(),
    Print: () => Print(),
    selection: (qty) => selection(qty)
  }
}

List = linkedList()
List.Add("Marcos")
List.Add("Fernanda")
List.Add("Tarciso")
List.Add("Matheus Alves")
List.Add("Matheus Nogueira")
List.Add("Carol")
List.Add("Kati")
List.Add("Yoshio")
List.Add("Julia")
List.Order()
List.Print()
console.log("");
List.selection()