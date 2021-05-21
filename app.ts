import * as express from 'express'
import { join } from 'path'
import * as cookieParser from 'cookie-parser'
import * as logger from 'morgan'
import * as doteenv from 'dotenv'

import startServer from './bin/www'
import indexRouter from './routes/index'
import usersRouter from './routes/users'

const app: express.Express = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

doteenv.config()

startServer(app)

export default app
