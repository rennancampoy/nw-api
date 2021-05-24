import { Router } from 'express'
import { messageController } from '../app';

export default Router()
  .post('/', async (req, res) => {
    const { from, target_id, media, message } = req.body

    if (!from || !target_id || !media || !message)
      return res.status(400).json({ error: 'Invalid parameters' })

    res.send(
      JSON.stringify(
        await messageController.newMessage(req.body), undefined, 4
      )
    )
  })
  .get('/', function(_, res) {
    // list the messages
  })
