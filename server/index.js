require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const apiRouter = require('./routers/api.router')
const autoIncrement = require('mongoose-auto-increment')
const mongoose = require('mongoose')
mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PW}@ds117271.mlab.com:17271/lol-critic`)
  .then(() => console.log('Connected to mLab'))
  .catch((e) => console.log('Error connecting to mLab', e))
autoIncrement.initialize(mongoose.connection)

const Summoner = require('./db/summoners.model')
const msgCtrl = require('./controller/message.controller')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(express.static('build'))
app.use('/api', apiRouter)

app.post('/user', (req, res) => {
  Summoner.findOne({ name: req.body.name })
    .then((summonerModel) => (summonerModel) ? summonerModel : Summoner.create({ name: req.body.name }) )
    .catch((e) => console.log('user post route error: ', e))
})

app.get('/message', msgCtrl.fetchMessages)
app.post('/message', msgCtrl.addMessage)

app.listen(process.env.PORT, () => console.log(`Listening at http://localhost:${process.env.PORT}`))