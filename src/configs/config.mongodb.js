'use strict'

// lv0
const dev = {
    app: {
        port: process.env.DEV_APP_PORT,
    },
    db: {
        host: process.env.DEV_DB_HOST,
        port: process.env.DEV_DB_PORT,
        path: process.env.DEV_DB_PATH,
    },
}

const pro = {
    app: {
        port: process.env.PRO_APP_PORT,
    },
    db: {
        host: process.env.PRO_DB_HOST,
        port: process.env.PRO_DB_PORT,
        path: process.env.PRO_DB_PATH,
    },
}

const config = { pro, dev }
const env = process.env.NODE_ENV || 'dev'
module.exports = config[env]
