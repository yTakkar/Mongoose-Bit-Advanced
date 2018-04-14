const mongoose = require('mongoose')
const db = mongoose.connect('mongodb://localhost/sandbox-posts')

module.exports = db