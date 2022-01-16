const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Tim')
})

app.listen(PORT, () => {
    console.log(`App running at http://localhost:${port}`)
})