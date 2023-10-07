const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()

// init middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

// init DB
require('./dbs/init.mongodb')

// app.use()

// init routes
app.use('/', require('./routes'))

// handle errors

module.exports = app
