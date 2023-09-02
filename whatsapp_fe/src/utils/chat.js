export const getConversationId = (user, users) => {
  console.log("users", users)
  console.log("user", user)
  return users[0]._id === user._id ? users[1]._id : users[0]._id
}
