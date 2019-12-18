const normalizeString = str => {
  return String(str).toLowerCase()
}

export const filterByText = (list, input) => {
  const normalizedInput = normalizeString(input)

  const filteredItems = list.filter(item => {
    return !!Object.values(item)
      .filter(value => typeof value !== 'object')
      .map(normalizeString)
      .some(value => value.includes(normalizedInput))
  })

  return filteredItems
}
