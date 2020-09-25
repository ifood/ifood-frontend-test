const countryMap = new Map([
  ['Australia', 'Australia'],
  ['Alemanhã', 'Deutschland'],
  ['Brasil', 'Brasil'],
  ['Portugal', 'Portugal'],
  ['EUA', 'USA'],
  ['Rússia', 'Russia'],
])

const countryName = (value) => countryMap.get(value)

export default countryName
