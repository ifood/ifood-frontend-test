import { GET_PLAYLISTS_TOTAL } from '../../src/components/OffsetFilter'

export default {
  request: {
    query: GET_PLAYLISTS_TOTAL
  },
  result: {
    "data": {
      "playlists": {
        "total": 18,
        "__typename": "PlayListInfo"
      }
    }
  }
}
