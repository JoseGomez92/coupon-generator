import express from 'express'
import container from './config/dependency-injection'
import { enableCors } from './middleware/cors'
import { errorHandler } from './middleware/error-handler'
import Config from './modules/shared/infraestructure/Config'
import { chargeRoutes } from './routes'

const app: express.Express = express()
const config: Config = container.get('Shared.Config')

app.set('port', config.server.port)

enableCors(app)
chargeRoutes(app)
errorHandler(app)

app.listen(config.server.port, () => {
    console.log(`Application listening on port ${config.server.port}`)
})
