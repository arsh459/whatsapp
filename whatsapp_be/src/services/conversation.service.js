import { ConversationModel, UserModel } from "../models/index.js"
import createHttpError from "http-errors"

export const doesConversationExist = async (sender_id, receiver_id) => {
  let convos = await ConversationModel.find({
    isGroup: false,
    $and: [
      { users: { $elemMatch: { $eq: sender_id } } },
      { users: { $elemMatch: { $eq: receiver_id } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage")

  if (!convos) {
    throw createHttpError.BadRequest("No conversation exists")
  }

  //populate message model
  convos = await UserModel.populate(convos, {
    path: "latestMessage.sender",
    select: "name email picture status",
  })
  return convos[0]
}

export const createConversation = async (data) => {
  const newConvo = await ConversationModel.create(data)
  if (!newConvo) {
    throw createHttpError.BadRequest("Oops... Something wrong happened")
  }
  return newConvo
}

export const populateConversation = async (id, field, Nfield) => {
  const populatedConvo = await ConversationModel.findOne({ _id: id }).populate(
    field,
    Nfield
  )
  if (!populatedConvo) {
    throw createHttpError.BadRequest("Oops... Something wrong happened")
  }
  return populatedConvo
}
