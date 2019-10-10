
if (process.env.NODE_ENV === 'development') require('dotenv').config()

const express = require('express')
const routes = require('./routes/index')
const mongoose = require('mongoose')
const errorHandler = require('./middlewares/errorHandler')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const PORT = process.env.PORT || 3000

mongoose.connect('mongodb://localhost:27017/orchestrator', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`connection success`)
    })
    .catch(err => {
        console.log(err)
        console.log(`connection failed`)
    })

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', routes)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`listening on port PORT ${PORT}`)
})