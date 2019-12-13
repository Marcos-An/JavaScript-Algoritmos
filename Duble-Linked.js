// Lista duplamente ligada não funciona muito bem

function DubleLinked() {
  let head
  let length = 0

  const Add = (value) => {
    if (length === 0) {
      head = Node(value)
      length++
      return head
    }
    let node = head
    let nodePrev = null
    while (node.next) {
      nodePrev = node
      node = node.next
      console.log(nodePrev);
      console.log(" ");
    }
    node.next = Node(value)
    node.prev = nodePrev

    return node
  }
  const Print = () => {
    console.log(head);

  }
  const Node = (value) => {
    let item = value
    let next = null
    let prev = null

    return {
      prev,
      item,
      next
    }
  }
  return {
    Add: (value) => Add(value),
    print: () => Print()
  }
}

const List = DubleLinked();

List.Add(1)
List.Add(2)
List.Add(3)

List.Add(1)
List.Add(2)
List.Add(3)

List.Add(1)
List.Add(2)
List.Add(3)

List.Add(1)
List.Add(2)
List.Add(3)
