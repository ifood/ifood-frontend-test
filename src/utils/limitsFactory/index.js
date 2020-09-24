const limitsFactory = (end = 20) => {
  let temp = 0
  const limitsArray = []
  while (temp < end) {
    temp += 5
    limitsArray.push(temp)
  }
  return limitsArray
}

export default limitsFactory
