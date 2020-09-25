const localeMap = new Map([
  ['en_AU', 'English (AU)'],
  ['de_DE', 'Deutsch (DE)'],
  ['pt_BR', 'Português (BR)'],
  ['fr_FR', 'Français (FR)'],
  ['en_US', 'English (US)'],
  ['es_AR', 'Español (AR)'],
])

const localeName = (value) => localeMap.get(value)

export default localeName
