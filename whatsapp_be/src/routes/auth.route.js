import express from "express"
import trimRequest from "trim-request"
import {
  login,
  logout,
  register,
  refreshToken,
} from "../controllers/auth.controller.js"
const router = express.Router()

router.post("/register", trimRequest.all, register)
router.post("/login", trimRequest.all, login)
router.post("/logout", trimRequest.all, logout)
router.get("/refreshToken", trimRequest.all, refreshToken)

export default router
