require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const matchCtrl = require('./controller/match.controller')
const sumCtrl = require('./controller/summoner.controller')

const connection = mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PW}@ds117271.mlab.com:17271/lol-critic`)
  .then(() => console.log('Connected to mLab'))
  .catch((e) => console.log('Error connecting to mLab', e))

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(express.static('build'))

app.get('/summoner/:name', sumCtrl.fetchMatchHistory)
app.get('/match/:matchId', matchCtrl.fetchMatchDetails)

app.listen(process.env.PORT, () => console.log(`Listening at http://localhost:${process.env.PORT}`))