const Router = require('express').Router()
const matchCtrl = require('../controller/match.controller')
const sumCtrl = require('../controller/summoner.controller')

Router.get('/summoner/:name', sumCtrl.fetchMatchHistory)
Router.get('/match/:matchId', matchCtrl.fetchMatchDetails)

module.exports = Router