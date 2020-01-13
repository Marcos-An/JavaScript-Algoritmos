function Dicionario() {
  var items = {
  }
  const add = (key, value) => {
    items[key] = value
  }
  const get = (key) => {
    return temChave(key) ? items[key] : null
  }
  const temChave = (key) => {
    return items.hasOwnProperty(key)
  }

  return {
    add: (key, value) => add(key, value),
    get: (key) => get(key)
  }
}

function Grafo() {
  var vertices = []
  var adjacentes = Dicionario()

  const addVertices = (vertice) => {
    vertices.push(vertice)
    adjacentes.add(vertice, { arestas: [], peso: [] })
  }

  const addAresta = (vertice, aresta, value) => {
    adjacentes.get(vertice).arestas.push(aresta)
    adjacentes.get(vertice).peso.push(value)
  }

  const chuteRotas = () => {
    var rotas = {}
    for (var i = 0; i < vertices.length; i++) {
      rotas[vertices[i]] = { anterior: null, peso: Infinity }
    }
    return rotas
  }

  const hasOpen = (abertos) => {
    for (var i = 0; vertices.length; i++) {
      if (abertos[vertices[i]] === 'Aberto') {
        return true
      }
    }
    return false
  }

  const opens = () => {
    var abertos = []
    for (var i = 0; i < vertices.length; i++) {
      abertos[vertices[i]] = 'Aberto'
    }
    return abertos
  }

  const menorDist = (rotas, abertos) => {
    if (hasOpen(abertos)) {
      var min = 0
      for (var i = 0; i < vertices.length; i++) {
        if (abertos[vertices[i]] === 'Aberto') {
          min = i
          break
        }
      }
      for (var j = min + 1; j < vertices.length; j++) {
        if (abertos[vertices[j]] === 'Aberto') {
          if (rotas[vertices[min]].peso > rotas[vertices[j]].peso) {
            min = j
          }
        }
      }
      return vertices[min]
    } else return null
  }
  const relaxa = (rotas, atual, vizinhos, vizinho, i) => {
    if (vizinho !== null) {
      var pesoFuturo = vizinhos.peso[i] + rotas[atual].peso
      if (pesoFuturo < rotas[vizinho].peso) {
        rotas[vizinho].peso = pesoFuturo
        rotas[vizinho].anterior = atual
      }
    }
  }

  const check = (inicial, final) => {
    var rotas = chuteRotas()
    var abertos = opens()

    rotas[inicial].anterior = inicial
    rotas[inicial].peso = 0

    while (hasOpen(abertos)) {
      var atual = menorDist(rotas, abertos)
      abertos[atual] = 'Fechado'

      var vizinhos = adjacentes.get(atual)
      if (vizinhos.arestas[0] === null) break
      for (var i = 0; i < vizinhos.arestas.length; i++) {
        var vizinho = vizinhos.arestas[i]
        relaxa(rotas, atual, vizinhos, vizinho, i)
      }
    }
    console.log(rotas);
    console.log('--------------');

    console.log(printMinimo(inicial, final, rotas))
  }
  const print = () => {
    var string = ''
    for (var i = 0; i < vertices.length; i++) {
      string += vertices[i] + ' -> '

      var vizinhos = adjacentes.get(vertices[i]).arestas
      var pesosVisinhos = adjacentes.get(vertices[i]).peso
      for (var j = 0; j < vizinhos.length; j++) {
        string += vizinhos[j] + ',' + pesosVisinhos[j] + ' '
      }
      string += '\n'
    }
    return string
  }

  const printMinimo = (inicial, final, rotas) => {
    var string = ''
    var caminho = [final]
    var total = rotas[final].peso
    console.log('Caminho de ' + inicial + '-> ' + final);

    while (final != inicial) {
      caminho.push(rotas[final].anterior)
      final = rotas[final].anterior
    }

    while (caminho.length !== 0) {
      string += caminho.pop() + '-> '
    }
    string += '  peso total:' + total
    return string
  }

  return {
    addVertices: (vertice) => addVertices(vertice),
    addAresta: (vertice, aresta, value) => addAresta(vertice, aresta, value),
    check: (inicial, callback) => check(inicial, callback),
    print: () => print(),
  }
}

const grafo = Grafo()

var v = ['A', 'B', 'C', 'D', 'E', 'F']
for (var i = 0; i < v.length; i++) {
  grafo.addVertices(v[i])
}

grafo.addAresta('A', 'B', 10)
grafo.addAresta('A', 'C', 5)
grafo.addAresta('B', 'D', 1)
grafo.addAresta('C', 'B', 3)
grafo.addAresta('C', 'D', 8)
grafo.addAresta('C', 'E', 2)
grafo.addAresta('D', 'F', 4)
grafo.addAresta('D', 'E', 4)
grafo.addAresta('E', 'F', 6)
grafo.addAresta('F', null, 0)

console.log(grafo.print());

console.log('--------------');

grafo.check(v[0], v[5])
