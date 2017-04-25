const request = require('request-promise')
const ctrlHelpers = require('./ctrlHelpers')

exports.fetchMatchDetails = (req, res) => {
  request.get(ctrlHelpers.genReqOptions(`https://na.api.riotgames.com/api/lol/NA/v2.2/match/${req.params.matchId}`))
    .then((matchData) => res.json(matchData))
}