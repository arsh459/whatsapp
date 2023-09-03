import logger from "../config/logger.config.js"
import createHttpError from "http-errors"
import { findUser } from "../services/user.service.js"
import {
  doesConversationExist,
  createConversation,
  populateConversation,
  getUserConversations,
} from "../services/conversation.service.js"

export const create_open_conversation = async (req, res, next) => {
  try {
    const sender_id = req.user.userId
    const { receiver_id } = req.body
    //check if receiver id is provided
    if (!receiver_id) {
      logger.error(
        "please provide the user id you want to start conversation with"
      )
      throw createHttpError.BadGateway("Receiver not provided")
    }

    // check if chat exists
    const existed_conversation = await doesConversationExist(
      sender_id,
      receiver_id
    )
    if (existed_conversation) {
      res.json(existed_conversation)
    } else {
      let receiver_user = await findUser(receiver_id)
      let convoData = {
        name: "conversation name",
        picture: "receiver_user.picture",
        isGroup: false,
        users: [sender_id, receiver_id],
      }
      const newConvo = await createConversation(convoData)
      const populatedConvo = await populateConversation(
        newConvo._id,
        "users",
        "-password"
      )
      res.status(200).json(populatedConvo)
    }
  } catch (error) {
    next(error)
  }
}

export const getConversations = async (req, res, next) => {
  try {
    const user_id = req.user.userId
    const conversations = await getUserConversations(user_id)
    res.status(200).json(conversations)
  } catch (error) {
    next(error)
  }
}
