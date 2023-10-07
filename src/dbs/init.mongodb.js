'use strict'

const mongoose = require('mongoose')
const config = require('../configs/config.mongodb')
const { countConnect, checkOverload } = require('../helpers/check.connect')

const connectString = config.db.path

class Database {
    constructor() {
        this.connect()
    }

    // connect
    connect(type = 'mongodb') {
        console.log('config db data: ' , config)
        if (1 === 1) {
            // for dev
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }

        mongoose
            .connect(connectString, {
                maxPoolSize: 100,
            })
            .then((_) => {
                checkOverload()
                console.log(
                    `You Connected to Mongodb Like a PRO`,
                    countConnect()
                )
            })
            .catch((error) => console.log('Error Connect!', error))
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()

module.exports = instanceMongodb
