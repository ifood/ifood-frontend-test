const getParamByRegex = (regex) => {
  const url = window.location.href
  const match = url.match(regex)

  return match ? match[1] : ''
}

export const getParam = (param) => param && getParamByRegex(new RegExp(`[\\?|&]${param}=([\\w-]+)`))

export const build = (searchies) => Object.entries(searchies).map(search => search.join('=')).join('&')
