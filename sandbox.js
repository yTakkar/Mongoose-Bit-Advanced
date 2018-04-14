// const User = require('./models/User')

// let newUser = {
//   username: 'f',
//   email: 'ff@gmail.com',
//   favCities: ['B', 'N'],
//   d: 'd'
// }
// User.create(newUser, () => {
//   console.log('created!!')

// })

// User.find({})
//   // .select('username favCities')
//   // .select('-email')
//   .sort({ _id: -1 })
//   // .sort('-id')
//   // .where('email').in([ 'takkar@gmail.com', 't@gmail.com' ])
//   .limit(10)
//   .exec((err, docs) => {
//     if (err) console.log(err)
    
//     Diff.create({ whatDiff: 'okay' }, err => {
//       err ? console.log(err) : null
//       console.log('did')
//     })
//   })

// User
//   .find({})
//   .populate('diff')
//   .exec((err, docs) => {
//     if (err) console.log(err)
//     console.log(docs)
//   })