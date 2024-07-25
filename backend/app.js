import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import PiyuMakeoverUser from './User/User.js'
import MyWorkImg from './User/Product.js'


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/PiyuMakeover')
    .then(() => console.log('PiyuMakeover Connected!'));

app.use('/PiyuMakeoverUser', PiyuMakeoverUser)
app.use('/MyWorkImg', MyWorkImg)

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000')
})