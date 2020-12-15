const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const usersRouter = require('./routes/users')
const postsRouter = require('./routes/posts')

mongoose.connect("mongodb+srv://user:Dan123456@webdev.qqp9h.mongodb.net/webdev?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/users', usersRouter)
app.use('/posts', postsRouter)

module.exports = app
