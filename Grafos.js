function dictionary() {
  var items = {}

  const add = (key, value) => {
    items[key] = value
  }

  const get = (key) => {
    return has(key) ? items[key] : null
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

  return {
    add: (key, value) => add(key, value),
    has: (key) => has(key),
    value: () => value(),
    get: (key) => get(key),
  }
}

function Queue() {
  var items = []

  const inQueue = (e) => {
    items.push(e)
  }

  const reQueue = () => {
    return items.shift()
  }

  const front = () => {
    return item[0]
  }

  const isEmpety = () => {
    if (items.length === 0) {
      return true
    } else return false
  }

  const size = () => {
    return items.length
  }

  const print = () => {
    console.log(items.toString());

  }
  return {
    inQueue: (e) => inQueue(e),
    reQueue: () => reQueue(),
    front: () => front(),
    isEmpety: () => isEmpety(),
    size: () => size(),
    print: () => print()
  }
}

function Graphs() {
  var vertices = []
  var adjlist = dictionary()

  const initializeColor = () => {
    var color = []
    for (var i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'White'
    }
    return color
  }

  const bfs = (vert, callback) => {
    var color = initializeColor()
    var queue = Queue()
    queue.inQueue(vert)

    while (!queue.isEmpety()) {
      var u = queue.reQueue()
      vizinhos = adjlist.get(u)
      color[u] = 'Grey'
      for (var i = 0; i < vizinhos.length; i++) {
        V = vizinhos[i]
        if (color[V] === 'White') {
          color[V] = 'Grey'
          queue.inQueue(V)
        }
      }
      color[V] = 'Black'
      callback(u)
    }
  }

  const dfs = (callback) => {
    var color = initializeColor()
    for (var i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === 'White') {
        dfvisit(vertices[i], color, callback)
      }
    }
  }
  const dfvisit = (u, color, callback) => {
    color[u] = 'Grey'
    callback(u)
    var vizinhos = adjlist.get(u)
    for (var i = 0; i < vizinhos.length; i++) {
      var vizinho = vizinhos[i]
      if (color[vizinho] === 'White') {
        dfvisit(vizinho, color, callback)
      }
      color[vizinho] = "Black"
    }
  }

  const vertice = (vert) => {
    vertices.push(vert)
    adjlist.add(vert, [])
  }
  const aresta = (vert, ares) => {
    adjlist.get(vert).push(ares)
    adjlist.get(ares).push(vert)
  }

  const toString = () => {
    var string = ''
    for (var i = 0; i < vertices.length; i++) {
      string += vertices[i] + ' -> '
      var vizinhos = adjlist.get(vertices[i])
      for (var j = 0; j < vizinhos.length; j++) {
        string += vizinhos[j] + ' '
      }
      string += '\n'
    }
    return string
  }

  return {
    vertice: (vert) => vertice(vert),
    aresta: (vert, ares) => aresta(vert, ares),
    toString: () => toString(),
    bfs: (vert, callback) => bfs(vert, callback),
    dfs: (callback) => dfs(callback)
  }
}

function print(value) {
  console.log(" Visitado Vertex: " + value);
}

const grafo = Graphs()

v = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (var i = 0; i < v.length; i++) {
  grafo.vertice(v[i])
}

grafo.aresta('A', 'B')
grafo.aresta('A', 'C')
grafo.aresta('A', 'D')
grafo.aresta('C', 'D')
grafo.aresta('C', 'G')
grafo.aresta('D', 'G')
grafo.aresta('D', 'H')
grafo.aresta('B', 'E')
grafo.aresta('B', 'F')
grafo.aresta('E', 'I')

//console.log(grafo.toString());

grafo.bfs(v[2], print)
