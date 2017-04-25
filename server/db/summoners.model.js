const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')
const Schema = mongoose.Schema

const SummonerSchema = new Schema({
  name: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

SummonerSchema.plugin(autoIncrement.plugin, 'Summoner')

const Summoner = mongoose.model('Summoner', SummonerSchema)
module.exports = Summoner;