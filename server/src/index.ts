import config from './config'
import server from './server'

server.listen(
  config.web.port,
  () => console.log(
    `🚀  Server ready at http://localhost:${config.web.port}${config.web.endpoint}`
  )
)
