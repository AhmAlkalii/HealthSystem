const express = require('express')

const {getUsers,loginUser,signupUser} = require('../controller/userController')

const router  = express.Router()


//get users
router.get('/users', getUsers)
//Login route
router.post('/login', loginUser)

//Sign up route
router.post('/signup', signupUser)

module.exports = router
