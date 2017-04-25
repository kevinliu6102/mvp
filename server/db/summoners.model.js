const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SummonerSchema = new Schema({
  name: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

let Summoner = mongoose.model('Summoner', SummonerSchema)
module.exports = Summoner;