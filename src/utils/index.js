const dateValidation = 'yyyy-MM-ddTHH:mm:ss'
const dateSplittedPattern = dateValidation.split('T')
const dateFormattedPattern = [
  dateSplittedPattern[0].toUpperCase(),
  'T',
  dateSplittedPattern[1],
].join('')

export { dateFormattedPattern }
