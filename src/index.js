const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000, () => {
    console.log('HTTP server started')
})