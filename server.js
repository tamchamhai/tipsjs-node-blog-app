const app = require('./src/app')
const config = require('./src/configs/config.mongodb')

// listening port, catch signals
const server = app.listen(config.app.port, () => {
    console.log(`Blog application start successfully at port ${config.app.port}`)
})

// process.on('SIGINT', () => {
//     server.close(() => console.log('Exit Server Express!'))
// })
