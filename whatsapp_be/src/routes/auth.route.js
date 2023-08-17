import express from "express"
import trimRequest from "trim-request"
import {
  login,
  logout,
  register,
  refreshToken,
} from "../controllers/auth.controller.js"
const router = express.Router()
import authMiddleware from "../middlewares/authMiddleware.js"

router.post("/register", trimRequest.all, register)
router.post("/login", trimRequest.all, login)
router.post("/logout", trimRequest.all, logout)
router.post("/refreshtoken", trimRequest.all, refreshToken)
router.get(
  "/testingAuthMiddleware",
  trimRequest.all,
  authMiddleware,
  (req, res) => {
    res.json({ message: "hello" })
  }
)

export default router
