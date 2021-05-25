import { Router } from 'express'

import { messageController } from '../app';
import { TMessage } from '../db/models/Message';

export default Router()
  .post('/', async (req, res) => {
    const { from, target_id, media, message } = req.body

    if (!from || !target_id || !media || !message)
      return res.status(400).json({ message_status: false })

    const newMessage = await messageController.newMessage(req.body)
      .then((m) => res.send(
        JSON.stringify(
          {
            message_status: true,
            message: m.message,
            from: m.from,
            target_id: m.target_id
          }, undefined, 4
        )
      ))
      .catch((e) => res.status(400).json({ message_status: false }))
  })
  .get('/', async (_, res) => {
    const messages: TMessage[] = await messageController.allMessages()

    res.render('MessagesPage', { messages: messages })
  })
