const mongoose = require('mongoose');
const DB_URL = 'mongodb://127.0.0.1:27017/imooc-chat'
mongoose.connect(DB_URL);

const models = {
  user: {
    'user': {'type': String, 'require': true},
    'pwd': {'type': String, 'require': true},
    'type': {'type': String, 'require': true},
    'avatar': {'type': String},
    'desc': {'type': String},
    'title': {'type': String},
    // 如果是boss 还需要下面两个字段
    'company': {'type': String},
    'money': {'type': String}
  },
  chat: {}
}
for(let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: (name) => {
    return mongoose.model(name)
  }
}