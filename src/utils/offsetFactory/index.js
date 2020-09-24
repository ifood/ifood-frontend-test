const offsetFactory = (end = 1) => {
  let temp = 0
  const offsetArray = []
  while (temp < end) {
    temp++
    offsetArray.push(temp)
  }
  return offsetArray
}

export default offsetFactory
