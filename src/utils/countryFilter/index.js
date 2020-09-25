const valueMap = new Map([
  ['AU', 'AU'],
  ['DE', 'DE'],
  ['BR', 'BR'],
  ['PT', 'PT'],
  ['en_US', 'US'],
  ['RU', 'RU'],
])

const countryFilter = (value) => valueMap.get(value)

export default countryFilter
