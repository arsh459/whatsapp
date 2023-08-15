import app from "./app.js"
import logger from "./config/logger.config.js"
import mongoose from "mongoose"
// env variables
const { DATABASE_URL } = process.env
const PORT = process.env.PORT || 8000

//exit on mongoDB error
mongoose.connection.on("error", (err) => {
  logger.error(`Mongodb connection error : ${err}`)
  process.exit(1)
})

// mongodb debug mode
if (process.env.NODE_ENV !== "production") {
  mongoose.set("debug", true)
}

//Server
mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("Connected to mongoDB")
  })
let server = app.listen(PORT, () => {
  logger.info(`server is listening at ${PORT}`)
  console.log("Process Id", process.pid)
})

//handle server error
const exitHandler = () => {
  if (server) {
    logger.info("Server Closed")
    process.exit(1)
  } else {
    process.exit(1)
  }
}
const unexpectedErrorHandler = (error) => {
  logger.error(error)
  exitHandler()
}
process.on("uncaughtException", unexpectedErrorHandler)
process.on("unhandledRejection", unexpectedErrorHandler)

// SIGTERM
process.on("SIGTERM", exitHandler)
