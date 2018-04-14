require('./config/db')
const Post = require('./models/Post')
const Comment = require('./models/Comment')
const { error } = require('handy-log')
const mongoose = require('mongoose')

// comment ids
// 5ad087d688552c1578153e13
// 5ad087d688552c1578153e14
// 5ad087d688552c1578153e15
// 5ad087d688552c1578153e16
// 5ad087d688552c1578153e17
// 5ad087d688552c1578153e18
// 5ad087d688552c1578153e19
// 5ad087d688552c1578153e1a
// 5ad087d688552c1578153e1b

let newPosts = [
  {
    title: 'first title',
    content: 'some content',
    comments: [
      '5ad087d688552c1578153e13', 
      '5ad087d688552c1578153e14', 
      '5ad087d688552c1578153e19',
      '5ad087d688552c1578153e1a'
    ]
  },
  {
    title: 'second title',
    content: 'some content',
    comments: [
      '5ad087d688552c1578153e15', 
      '5ad087d688552c1578153e16',
      '5ad087d688552c1578153e1b'
    ]
  },
  {
    title: 'third title',
    content: 'some content',
    comments: [
      '5ad087d688552c1578153e17', 
      '5ad087d688552c1578153e18'
    ]
  }
]

Post
  .find({})
  .populate('comments', 'text -_id')
  .exec()
  .then(resp => {
    console.log(JSON.stringify(resp, '', 2))
  })
  .catch(err => error(err))
