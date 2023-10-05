'use strict'

const mongoose = require('mongoose')

const connectString = `mongodb://localhost:27017/phofullstack_dev`

mongoose
    .connect(connectString)
    .then((_) => console.log(`Connected Mongodb Success`))
    .catch((error) => console.log('Error Connect!'))

if (1 === 1) {
    // for dev
    mongoose.set('debug', true)
    mongoose.set('debug', { color: true })
}

module.exports = mongoose
