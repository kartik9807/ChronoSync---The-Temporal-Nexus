const express = require('express')
const router = express.Router()
const { loginUser,logoutUser,checkSession } = require('../controllers/auth.controller')

router.post('/login',loginUser)
router.post('/logout',logoutUser)
router.get('/user',checkSession)

module.exports = router