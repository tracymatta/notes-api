const express = require('express')
const mongoose = require('mongoose')

const connectDB = (dbName) => {
    return mongoose.connect(dbName)
}

module.exports = connectDB