require('dotenv').config()
const express = require('express')
const connectDB = require('./db/connectDB')
const notes = require('./routes/notes')
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.json('HOME PAGE')
})

app.use(express.json())
app.use('/notes', notes)

app.use(notFound)
app.use(errorHandler)

const connect = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log(`server running on port ${PORT}`))
    } catch(err) {
        console.log(err.message)
    }
}

connect()