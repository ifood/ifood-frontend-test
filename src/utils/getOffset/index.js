const getOffset = (page, limit) => {
  if (!page || page === 1 || !limit) return 0
  return (page - 1) * limit
}

export default getOffset
