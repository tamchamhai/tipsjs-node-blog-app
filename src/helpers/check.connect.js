'use strict'

const mongoose = require('mongoose')

const countConnect = () => {
    const numConnection = mongoose.connections.length
    return (`Number of connections:${numConnection}`)
}

// Check over load
const checkOverload = () => {
    // 22.00
}

module.exports = {
    countConnect
}
