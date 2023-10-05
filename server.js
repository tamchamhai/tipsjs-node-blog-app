const app = require('./src/app')
const port = 5000

// listening port, catch signals
const server = app.listen(port, () => {
    console.log(`Blog application start successfully at port ${port}`)
})

// process.on('SIGINT', () => {
//     server.close(() => console.log('Exit Server Express!'))
// })
