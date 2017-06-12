// @flow

import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import { STATIC_PATH } from '../shared/config'

import renderApp from './renderApp'
import seed from './serverUtils/seed'
import serverConfig from './serverConfig'
import serverLogger from './serverUtils/serverLogger'
import api from './api'
import middlewares from './middlewares'

dotenv.load()
mongoose.Promise = global.Promise
const app = express()
mongoose.connect(serverConfig.dbUrl)

if (serverConfig.shouldSeed) {
  seed()
}

middlewares.app(app)
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))
app.use('/api', api)

app.get('/', (req, res) => {
  res.send(renderApp())
})

app.use(middlewares.error)
app.use(middlewares.notFound)
app.listen(serverConfig.port, () => {
  serverLogger.log(`Server listening on ${serverConfig.port} ${serverConfig.env}`)
  serverLogger.log('Keep "yarn dev:wds" running in another terminal')
})

export default app // for testing
