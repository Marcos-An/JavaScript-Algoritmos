function set() {
  var items = {}

  const add = (value) => {
    if (!has(value)) {
      items[value] = value
      return true
    }
    return false
  }
  const del = (value) => {
    if (has(value)) {
      delete items[value]
      return true
    }
    return false
  }

  const has = (value) => {
    return items.hasOwnProperty(value) // return : false or true
  }

  const clear = () => {
    items = {}
  }

  const size = () => {
    return Object.keys(items).length
  }

  const values = () => {
    var values = []
    keys = Object.keys(items)
    for (var i = 0; i < keys.length; i++) {
      values.push(items[keys[i]])
    }
    return values
  }

  const union = (otherSet) => {
    var unionSet = set()
    var value = values()

    for (var i = 0; i < value.length; i++) {
      unionSet.add(value[i])
    }

    value = otherSet.values()

    for (var i = 0; i < value.length; i++) {
      unionSet.add(value[i])
    }

    return unionSet
  }

  return {
    add: (value) => add(value),
    del: (value) => del(value),
    clear: () => clear(),
    size: () => size(),
    values: () => values(),
    union: (otherSet) => union(otherSet)
  }
}

const ItemsA = set()

ItemsA.add(1)
ItemsA.add(2)
ItemsA.add(3)
ItemsA.add(4)

const ItemsB = set()

ItemsB.add(4)
ItemsB.add(5)
ItemsB.add(6)
ItemsB.add(7)

const unionAB = ItemsA.union(ItemsB)

console.log(unionAB.values());
