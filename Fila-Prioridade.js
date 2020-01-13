function Priority() {
  var items = []

  const Element = (e, pri) => {
    var element = e
    var priority = pri

    return {
      element,
      priority
    }
  }

  const add = (e, pri) => {
    var queueElement = Element(e, pri)
    var added = false

    for (var i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement)
        added = true
        break
      }
    }

    if (!added) {
      items.push(queueElement)
      console.log(items);
    }
  }

  const print = () => {
    console.log(items.length);

    for (var i = 0; i < items.length; i++) {
      console.log(items[i].element, ":", items[i].priority)
    }
  }

  return {
    add: (e, pri) => add(e, pri),
    print: () => print()
  }
}


const priority = Priority()

priority.add("Carlos", 3)
priority.add("Matheus", 7)
priority.add("Giovani", 4)
priority.add("Regina", 1)

priority.print()