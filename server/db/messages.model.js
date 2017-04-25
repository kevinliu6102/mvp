const mongoose = require('mongoose')
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

let Message = mongoose.model('Message', MessageSchema)
module.exports = Message;