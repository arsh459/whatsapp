import createHttpError from "http-errors"
import jwt from "jsonwebtoken"

export default async function authMiddleware(req, res, next) {
  if (!req.headers["authorization"])
    return next(createHttpError.Unauthorized("unauthorized"))

  const bearerToken = req.headers["authorization"]
  const token = bearerToken.split(" ")[1]
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) {
      return next(createHttpError.Unauthorized("Unauthorized"))
    }
    req.user = payload
    next()
  })
}
