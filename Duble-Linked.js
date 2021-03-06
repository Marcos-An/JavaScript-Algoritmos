function doubleLinkedList() {
  var head
  var tail
  var length = 0

  const print = () => {
    var node = head
    var string = ''

    while (node) {
      string += node.value + ' -> '
      node = node.next
    }
    return console.log(string)
  }

  const Node = (valor) => {
    var value = valor
    var next = null
    var prev = null

    return {
      value,
      next
    }
  }
  const Add = (valor) => {
    if (length === 0) {
      head = Node(valor)
      length++
      return head
    }
    var node = head
    while (node.next) {
      node = node.next
    }
    node.next = Node(valor)
    length++
    return node
  }

  const insert = (position, e) => {

  }


  const removeAt = (position) => {

  }

  const remove = (e) => {
    var index = byId(e)
    return removeAt(index)
  }

  const isEmpety = () => {
    if (length === 0) {
      return console.log('A lista está vazia')
    } else return console.log('A lista não está vazia');
  }
  const byId = (e) => {
    var node = head
    var index = 0

    while (node) {
      if (node.value === e) {
        return index
      } else {
        index++
        node = node.next
      }
    }
    return -1
  }
  return {
    print: () => print(),
    byId: (e) => byId(e),
    Add: (value) => Add(value),
    insert: (position, e) => insert(position, e),
    remove: (e) => remove(e),
    removeAt: (position) => removeAt(position),
    isEmpety: () => isEmpety()
  }
}

const List = doubleLinkedList()

