let onlineUsers = []
export default function (socket, io) {
  // user joins or opens the application
  socket.on("join", (user) => {
    socket.join(user)

    //add joined users
    if (!onlineUsers.some((u) => u.userId === user)) {
      onlineUsers.push({ userId: user, socketId: socket.id })
      console.log("user has just connected", user)
    }

    //send online users
    io.emit("get-online-users", onlineUsers)
  })

  //if a user disconnected
  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id)
    console.log("user has just disconnected")
    io.emit("get-online-users", onlineUsers)
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

  //typing
  socket.on("typing", (conversation) => {
    console.log("typing in ...", conversation)
    socket.in(conversation).emit("typing", conversation)
  })
  socket.on("stop typing", (conversation) => {
    console.log("typing stop ...", conversation)
    socket.in(conversation).emit("stop typing")
  })
}
