import { Router } from 'express'
import { Message } from '../db/models/Message'

export default Router()
  .post('/', async (req, res) => {
    console.log(req.params)
    // await Message.build({
    //   from: '1234',
    //   target_id: '4321',
    //   media: true,
    //   message: 'Teste'
    // }).save()

    // res.send(JSON.stringify({ messages: await Message.findAll() }, undefined, 4))
  })
  .get('/test', function(_, res) {
    res.send('respond with a resource')
  })

