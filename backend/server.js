require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRoutes = require('./routes/user')



const app = express()


//middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is Listening on`, process.env.PORT, 'And Connect to MongoDB' )
    })
})
.catch((error) => {
    console.log(error)
})



app.use('/api/user',userRoutes)