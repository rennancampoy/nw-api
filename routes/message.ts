import { Router } from 'express'

export default Router()
  .get('/all', (_, res) => {
    res.send('asdasdas')
  })
  .get('/test', function(_, res) {
    res.send('respond with a resource')
  })

