'use strict'

const mongoose = require('mongoose')
const process = require('process')
const os = require('os')
const { HELPERS } = require('../utils/constants')

// Count connect to db
const countConnect = () => {
    const numConnection = mongoose.connections.length
    return `Number of connections:${numConnection}`
}

// Check over load
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss
        // Assume that maximum number of connections based on number cores, max 5 connections per core.
        const maxConnections = numCores * 5

        console.log(`Active connections: ${numConnection}`)
        console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`)

        if (numConnection > maxConnections) {
            console.log(`Connections overload detected!`)
        }
    }, HELPERS._TIME_PER_CHECK_OVERLOAD) // Monitor every ... second
}

module.exports = {
    countConnect,
    checkOverload,
}
