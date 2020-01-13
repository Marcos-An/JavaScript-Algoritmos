function Hash() {
  var table = []

  const put = (key, value) => {
    var position = loseloseHashCode(key)
    console.log(position + ' ' + key)
    table[position] = value
  }
  const remove = () => {

  }
  const get = () => {

  }
  const loseloseHashCode = (key) => {
    var hash = 0
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % 37
  }

  return {
    put: (key, value) => put(key, value),
    remove: () => remove(),
    get: () => get(),
  }
}

const hash = Hash()

hash.put('Jonas', '91230912')
hash.put('Reinaldo', '91212912')
hash.put('Luana', '017391231')
hash.put('Renato', '131273676')