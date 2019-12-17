const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')
const port = 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/transactions', { useNewUrlParser: true, useUnifiedTopology: true })
app.use('/', api)


app.listen(port, function() {
    console.log(`Running on port ${port}`)
})

