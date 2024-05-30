const User = require('../models/usermodel')
const jwt = require('jsonwebtoken')

//generates the token for us
const createToken = (_id) => {
   return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

const getUsers = async(req, res) => {
    const users = await User.find({}).sort({createdAt : -1})

    res.status(200).json(users)
}

//login user
const loginUser = async(req, res) => {
    const {email, password} =  req.body

    try {
        const user = await User.login(email, password)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch(error){
        res.status(400).json({error: error.message})
    }
    

}


//signup user
const signupUser = async(req, res) => {
    const {name, email, password, role } = req.body

    try {
        const user = await User.signup(name, email, password, role)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}



module.exports = {
    getUsers,
    loginUser,
    signupUser
}