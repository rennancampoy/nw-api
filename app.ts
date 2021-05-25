import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import doteenv from 'dotenv'
import path from 'path'
import { createEngine } from 'express-react-views'


import { ServerService } from './services/ServerService'
import messageRouter from './routes/MessageRoutes'
import { DatabaseService } from './services/DatabaseService'
import MessageController from './controllers/MessageController'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/message', messageRouter)
app.set('views', path.resolve('./dist/views/'))
app.set('view engine', 'jsx')

app.engine('jsx', createEngine())

doteenv.config()


export const serverService: ServerService = new ServerService()
serverService.init(app)

export const databaseService: DatabaseService = new DatabaseService()

export const messageController: MessageController = new MessageController()

databaseService.init()

export default app
