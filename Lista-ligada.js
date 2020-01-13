function linkedList() {
  var head
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

  const insert = (position, e) => { // 0 eu
    if (position > -1 && position < length) {
      var node = Node(e) //novoNode
      var current = head //joao 
      var previous
      var count = 0

      if (position === 0) {
        node.next = current
        head = node
      } else {
        while (count < position) {
          previous = current
          current = current.next
          count++
        }
        node.next = current
        previous.next = node
      }
      length++
      return true
    } else false
  }

  const remove = (e) => {
    var index = byId(e)
    return removeAt(index)
  }

  const removeAt = (position) => {
    if (position > -1 && position < length) {
      var node = head
      var previous
      var count = 0

      if (position == 0) {
        head = node.next
        length--
      }
      while (count < position) {
        previous = node
        node = node.next
        count++
      }
      previous.next = node.next
      length--
      return node.valor
    } else return null
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

const List = linkedList()

List.isEmpety()
List.Add('Joao')
List.Add('José')
List.Add('Maria')
List.Add('Renato')
List.Add('André')
List.insert(2, 'Miriam')
List.print()
List.isEmpety()