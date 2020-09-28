const pageList = (end = 1) => {
  let temp = 0
  const pageArray = []
  while (temp < end) {
    temp++
    pageArray.push(temp)
  }
  return pageArray
}

export default pageList
