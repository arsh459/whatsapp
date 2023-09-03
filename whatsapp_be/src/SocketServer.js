export default function (socket) {
  // user joins or opens the application
  socket.on("join", (user) => {
    socket.join(user)
  })

  //join a room
  socket.on("join conversation", (conversation) => {
    socket.join(conversation)
    console.log("user has joined conversation", conversation)
  })

  //send and receive message
  socket.on("send message", (message) => {
    console.log("new message received", message)
    let conversation = message.conversation
    if (!conversation.users) return
    conversation.users.forEach((user) => {
      if (user._id === message.sender._id) return
      socket.in(user._id).emit("receive message", message)
    })
  })
}
