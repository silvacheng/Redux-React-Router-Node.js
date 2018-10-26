const express = require('express')

const mongoose = require('mongoose')
// 链接mogodb
// const DB_URL = 'mongodb://localhost:27017/'
const DB_URL = 'mongodb://127.0.0.1:27017/'

// mongoose.connect(DB_URL)
// mongoose.connection.on('connectedcd', function(err) {
//     if(err) {
//         console.log('connect error:' + err)
//     } else {
//         console.log(' connect mongodb success ')
//     }
// })

mongoose.connect(DB_URL, { useNewUrlParser: true }, function (err) {
    if (err) {
        console.log('connect error:' + err)
    } else {
        console.log(' mongodb connect  success ')
    }
})

const User = mongoose.model('user', new mongoose.Schema({
    user: { type: String, require: true },
    age: { type: Number, require: true }
}))

// 新增数据
// User.create({
//     user: 'xiaoli',
//     age: 10
// }, function (err, doc) {
//     if (!err) {
//         console.log(doc)
//     } else {
//         console.log(err)
//     }
// })

// 新建app
const app = express()

User.remove({ age: 10 }, function (err, doc) {
    if(!err) {
        console.log(doc)
    }
})
// User.update({ user: 'xiaoli' }, { '$set': { age: 26 } }, function (err, doc) {
//     if (!err) {
//         console.log(doc)
//     }
// })
app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>')
})

app.get('/data', function (req, res) {
    User.find({user: 'xiaoli'}, function (err, doc) {
        if (!err) {
            res.json(doc)
        }
    })
    // res.json({ name: 'silva asdal sadasdj ', type: 'IT' })
})

app.listen(9009, function () {
    console.log('Node app start at 9009 port')
})