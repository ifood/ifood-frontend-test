// Create an object with hashes in the format key: value
const hashes = window.location.hash
  .substring(1)
  .split('&')
  .reduce((acc, hashString) => {
    if (hashString) {
      const keyValue = hashString.split('=')
      acc[keyValue[0]] = decodeURIComponent(keyValue[1])
    }

    return acc
  }, {})

export default hashes
