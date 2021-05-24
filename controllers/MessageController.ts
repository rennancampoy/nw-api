import { Message, TMessage } from "../db/models/Message"

export default class MessageController {
	newMessage = async (params: TMessage): Promise<Message> => {
		return Message.build(params).save()
	}
}