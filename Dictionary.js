function dictionary() {
  items = {}

  const add = (key, value) => {
    items[key] = value
  }

  const del = (key) => {
    if (has(key)) {
      delete items[key]
      return true
    }
    return false
  }

  const has = (key) => {
    return items.hasOwnProperty(key)
  }

  const value = () => {
    var values = []
    keys = Object.keys(items)

    for (var i = 0; i < keys.length; i++) {
      values.push(items[keys[i]])
    }

    return values
  }
  const get = (key) => {
    return has(key) ? items[key] : null
  }

  const clear = () => {
    items = {}
  }

  const size = () => {
    return Object.keys(items).length
  }

  const getItems = () => {
    return items
  }

  return {
    add: (key, value) => add(key, value),
    has: (key) => has(key),
    del: (key) => del(key),
    value: () => value(),
    get: (key) => get(key),
    clear: () => clear(),
    size: () => size(),
    getItems: () => getItems()
  }
}

const Dic = dictionary()

Dic.add('Jonas', '91230912')
Dic.add('Reinaldo', '91212912')
Dic.add('Luana', '017391231')
Dic.add('Renato', '131273676')

console.log(Dic.getItems());