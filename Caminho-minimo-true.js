function dicionario() {
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

  return {
    add: (key, value) => add(key, value),
    get: (key) => get(key)
  }
}

function graph() {
  var vertices = []
  var adj = dicionario()

  const addVertices = (vertice) => {
    vertices.push(vertice)
    adj.add(vertice, { edges: [], height: [] })
  }

  const addAdj = (vertice, edge, height) => {
    adj.get(vertice).edges.push(edge)
    adj.get(vertice).height.push(height)
  }
  const perspective = () => {
    var perspective = {}
    vertices.forEach(value => {
      perspective[value] = { prev: null, height: Infinity }
    })
    return perspective
  }
  const hasOpen = (open) => {
    for (var i = 0; i < vertices.length; i++) {
      if (open) return true
    } return false
  }

  const opens = () => {
    var opens = {}
    vertices.forEach(value => {
      opens[value] = true
    })
    return opens
  }

  const minDist = (p, open) => {
    var min
    for (var i = 0; i < vertices.length; i++) {
      if (open[vertices[i]]) {
        min = i
        break
      }
    }

    for (var i = min + 1; i < vertices.length; i++) {
      if (open[vertices[i]]) {
        if (p[vertices[min]].height > p[vertices[i]].height) {
          min = i
        }
      }
    }
    return vertices[min]
  }

  const dijkstra = (initial, final) => {
    var persp = perspective()
    var open = opens()
    persp[initial].prev = initial
    persp[initial].height = 0

    while (hasOpen(open)) {
      var current = minDist(persp, open)
      open[current] = false


      var neighbors = adj.get(current)
      if (neighbors !== null) {
        neighbors.edges.forEach((value, index) => {
          if (value) {
            var total = persp[current].height + neighbors.height[index]
            if (total < persp[value].height) {
              persp[value].height = total
              persp[value].prev = current
            }
          }
        })
      } else break
    }
    console.log(persp);
    console.log('-------------------');
    console.log(' ');
    console.log(printMinimo(initial, final, persp));
  }

  const printMinimo = (inicial, final, persp) => {
    var string = ''
    var caminho = [final]

    var total = persp[final].height
    console.log('Caminho de ' + inicial + ' -> ' + final);

    while (final != inicial) {
      caminho.push(persp[final].prev)
      final = persp[final].prev
    }

    while (caminho.length !== 0) {
      string += caminho.pop() + '-> '
    }
    string += '  peso total:' + total
    return string
  }

  const print = () => {
    var string = ''
    vertices.forEach(vertice => {
      string += vertice + '-> '
      var height = adj.get(vertice).height

      adj.get(vertice).edges.forEach((value, index) => {
        string += value + ',' + height[index] + '  '
      })
      string += '\n'
    })
    return console.log(string)
  }

  return {
    addVertices: (vertice) => addVertices(vertice),
    addAdj: (vertice, edge, height) => addAdj(vertice, edge, height),
    dijkstra: (initial, final) => dijkstra(initial, final),
    print: () => print()
  }
}

var graph = graph()

var v = ['A', 'B', 'C', 'D', 'E', 'F', 'I', 'T']
v.forEach((value) => {
  graph.addVertices(value)
})

graph.addAdj('A', 'C', 2)
graph.addAdj('A', 'E', 15)
graph.addAdj('A', 'I', 3)
graph.addAdj('B', 'A', 9)
graph.addAdj('B', 'C', 3)
graph.addAdj('B', 'D', 9)
graph.addAdj('C', 'D', 4)
graph.addAdj('C', 'E', 1)
graph.addAdj('D', 'T', 1)
graph.addAdj('E', 'T', 5)
graph.addAdj('E', 'F', 8)
graph.addAdj('F', 'T', 7)
graph.addAdj('I', 'A', 10)
graph.addAdj('I', 'B', 2)
graph.addAdj('T', false, 0)

graph.print()

console.log('-------------------');

graph.dijkstra(v[0], v[7])
