const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')
const Schema = mongoose.Schema

const MessageSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  targetUser: {
    type: Number,
    ref: 'Summoner',
    required: true
  }
}, {
  timestamps: true
})

MessageSchema.plugin(autoIncrement.plugin, 'Message')

const Message = mongoose.model('Message', MessageSchema)
module.exports = Message;