'use strict'

const mongoose = require('mongoose')
const { countConnect } = require('../helpers/check.connect')

const connectString = `mongodb://localhost:27017/phofullstack_dev`

class Database {
    constructor() {
        this.connect()
    }

    // connect
    connect(type = 'mongodb') {
        if (1 === 1) {
            // for dev
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }

        mongoose
            .connect(connectString)
            .then((_) => console.log(`You Connected to Mongodb Like a PRO`, countConnect()))
            .catch((error) => console.log('Error Connect!'))
    }

    static getInstance() {
        if(!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()

module.exports = instanceMongodb
