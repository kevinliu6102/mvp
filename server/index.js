require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const sumCtrl = require('./controller/summoner.controller')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(express.static('build'))

app.get('/summoner/:name', sumCtrl.fetchMatchHistory)

app.listen(process.env.PORT, () => console.log(`Listening at http://localhost:${process.env.PORT}`))