import queryString from 'query-string'
import { useLocation } from 'react-router-dom'

const useQueryString = () => {
  const { search } = useLocation()
  const parsedHash = queryString.parse(search)

  return parsedHash
}

export default useQueryString
