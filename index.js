const express = require('express')
const routes = require('./routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/ninjago')
mongoose.Promise = global.Promise

//set up express
const app = express()

// body  parser
app.use(bodyParser.json())

// mapping routes
app.use('/api',routes)

// error handling middleware
app.use(function (error, request , response , next) {
    response.status(422).send({ error : error.errors})
})

// listen request
app.listen( process.env.port || 4000, function () {
    console.log('now listening for request')

})