const recursiveDuples = (position, list, duples) => {
  if (position === list.length - 1) return duples
  for (let i = position + 1; i < list.length; i += 1) {
    if (list[position].charAt(0) === list[i].charAt(0)) {
      duples.push([list[position], list[i]])
    }
  }
  return recursiveDuples(position + 1, list, duples)
}

export const formDuples = (ordered) => recursiveDuples(0, ordered, [])

const tripleFind = (triple, duple, list, i) => triple.some((element) => duple.includes(element) || element === list[i])

const recursiveTriples = (position, list, duples, triples) => {
  if (position === list.length - 1) return triples
  duples.forEach((duple) => {
    for (let i = position; i < list.length; i += 1) {
      const newTriple = [...duple, list[i]]
      const repeated = triples.find((triple) => tripleFind(triple, duple, list, i))
      if (!duple.includes(list[i]) && !repeated && list[i].charAt(0) === duple[0].charAt(0)) {
        triples.push(newTriple)
      }
    }
  })
  return recursiveTriples(position + 1, list, duples, triples)
}

export const formTriples = (ordered, duples) => recursiveTriples(0, ordered, duples, [])

export const formFullhouses = (duples, triples) => {
  const fullhouses = []
  duples.forEach((duple) => {
    triples.forEach((triple) => {
      if (triple.every((element) => !duple.includes(element))) {
        fullhouses.push([...triple, ...duple])
      }
    })
  })
  return fullhouses
}
