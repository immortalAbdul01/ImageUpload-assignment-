const express = require('express')
const userController = require('./../Controllers/userController')
const router = express.Router()
router.post('/sign', userController.signIn)
router.post('/login', userController.login)


module.exports = router