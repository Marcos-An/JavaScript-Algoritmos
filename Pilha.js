function Fifo() {
  var items = []


  const push = (e) => {
    items.push(e)
  }

  const pop = (e) => {
    return items.pop()
  }

  const peek = () => {
    return items[item.length - 1]
  }

  const isEmpety = () => {
    if (items.length === 0) {
      return console.log("A pilha etá vazia")
    } else return console.log("A pilha não está vazia");

  }

  const clear = () => {
    return items = []
  }

  const size = () => {
    return items.length
  }

  const print = () => {
    console.log(items.toString());
  }

  return {
    push: (e) => push(e),
    pop: () => pop(),
    peek: () => peek(),
    isEmpety: () => isEmpety(),
    clear: () => clear(),
    size: () => size(),
    print: () => print()
  }
}

const Pilha = Fifo()

Pilha.push(1)
Pilha.push(2)
Pilha.push(3)
Pilha.push(4)
Pilha.push(5)

Pilha.print()

console.log(" ");

Pilha.pop()
Pilha.print()
Pilha.pop()
Pilha.print()
Pilha.pop()
Pilha.print()
Pilha.pop()
Pilha.print()
Pilha.pop()
Pilha.print()

Pilha.isEmpety()