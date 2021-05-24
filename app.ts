import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import doteenv from 'dotenv'

import { ServerService } from './services/ServerService'
import messageRouter from './routes/MessageRoutes'
import { DatabaseService } from './services/DatabaseService'

const app: express.Express = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/message', messageRouter)

doteenv.config()

const serverService: ServerService = new ServerService()
serverService.init(app)

const databaseService: DatabaseService = new DatabaseService()

databaseService.init()

export default app
