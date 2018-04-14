const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  text: {
    type: String
  }
}, { versionKey: false })

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment