function Queue() {
  var items = []

  const addQueue = (e) => {
    items.push(e)
  }

  const reQueue = () => {
    return items.shift()
  }

  const size = () => {
    return items.length
  }

  return {
    addQueue: (e) => addQueue(e),
    reQueue: () => reQueue(),
    size: () => size(),
  }
}

function hotPotato(nameList, num) {
  var queue = Queue()
  for (var i = 0; i < nameList.length; i++) {
    queue.addQueue(nameList[i])
  }
  var eliminado = ''
  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      queue.addQueue(queue.reQueue())
    }
    eliminado = queue.reQueue()
    console.log(eliminado, " foi eliminado")
  }
  return queue.reQueue()
}

var names = ["Kati", "Fernanda", "Matheus", "Débora", "Yoshio", "Marcos"]
var vencedor = hotPotato(names, 4)

console.log("O vencedor foi: ", vencedor);
