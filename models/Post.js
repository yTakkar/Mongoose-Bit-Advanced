const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
}, { versionKey: false })

const Post = mongoose.model('Post', postSchema)

module.exports = Post