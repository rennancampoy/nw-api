import { Message, TMessage } from "../db/models/Message"

export default class MessageController {
	newMessage = async (params: TMessage): Promise<Message> =>
		Message.build(params).save()

	allMessages = async (): Promise<Message[]> =>
		Message.findAll()  
}