const mongoose = require('mongoose')
const { Schema } = mongoose

const noteSchema = new Schema ({
    title: {
        type: String
    },
    description: {
        type: String,
        required: [true, 'must provide a title']
    }
})

module.exports = mongoose.model('Note', noteSchema)