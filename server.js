const express = require('express')
const cors = require('cors')
const models = require('./models')
require('dotenv').config()
const PORT = 3000
const app = express()

// video route
const videoRouter = require('./routes/video')
app.use('/video', videoRouter)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.json('/')
})

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})
