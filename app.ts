import * as express from 'express'
import { join } from 'path'
import * as cookieParser from 'cookie-parser'
import * as logger from 'morgan'
import * as doteenv from 'dotenv'

import { ServerService } from './services/ServerService'
import messageRouter from './routes/message'

const app: express.Express = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(join(__dirname, 'public')))

app.use('/message', messageRouter)

doteenv.config()

ServerService.init(app)

export default app
