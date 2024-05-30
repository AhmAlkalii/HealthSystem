const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')


const Schema = mongoose.Schema

const userSchema = new Schema ({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true 
    },
    password : {
        type: String,
        required: true 
    },
    role : {
        type: String,
        required: true,
        enum: ['admin', 'doctor', 'nurse', 'patient']
    }
}, {timestamps:true})



// static signup method
userSchema.statics.signup = async function(name, email, password, role) {
    
    //validation
    if(!name || !email || !password || !role){
        throw Error('All fields must be filled')
    }

    if(!validator.isEmail(email)){
        throw Error('Email not valid')
    }

    if(!validator.isStrongPassword(password)){
        throw Error('Password needs to be stronger')
    }
    const exists = await this.findOne({ email })

    if(exists){
        throw Error("Email already in use")
    }

    //bcrypt is hashing the password
    const salt = await bcrypt.genSalt(10)
    const hash =  await bcrypt.hash(password, salt)

    const user =  await this.create({ name ,email, password: hash, role})
    return user
}


//static login method
userSchema.statics.login = async function(email, password){
    if(!email || !password){
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ email })

    if(!user){
        throw Error("Email is Not Valid")
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect password')
    }

    return user
}


module.exports = mongoose.model('User', userSchema)