import logger from "../config/logger.config.js"
import { populateMessage } from "../services/message.service.js"
import { createMessage, getConvoMessages } from "../services/message.service.js"
import { updateLatestMessage } from "../services/conversation.service.js"

export const sendMessage = async (req, res, next) => {
  try {
    const user_id = req.user.userId
    const { message, convo_id, files } = req.body
    if (!convo_id || (!message && !files)) {
      logger.error("please provide conversation id and message body")
      return res.status(400)
    }
    const msgData = {
      sender: user_id,
      message,
      conversation: convo_id,
      files: files || [],
    }
    let newMessage = await createMessage(msgData)
    let populatedMessage = await populateMessage(newMessage._id)
    await updateLatestMessage(convo_id, newMessage)
    res.json(populatedMessage)
  } catch (error) {
    next(error)
  }
}

export const getMessages = async (req, res, next) => {
  try {
    const convo_id = req.params.convo_id
    if (!convo_id) {
      logger.error("Please add a conversation id in params")
      res.status(400).send()
    }
    const messages = await getConvoMessages(convo_id)
    res.json(messages)
  } catch (error) {
    next(error)
  }
}
