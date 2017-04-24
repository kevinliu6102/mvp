const request = require('request-promise')
const Promise = require('bluebird')

const genReqOptions = (uri) => {
  return {
    uri: uri,
    qs: {
      api_key: process.env.API_KEY
    },
    json: true
  }
};

// exports.fetchPlayerInfo = (...args) => {
//   request.get(genReqOptions(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.params.name}`))
// }

exports.fetchMatchHistory = (req, res) => {
  // get summoner ID with summoner name lookup
  request.get(genReqOptions(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.params.name}`))
  // get last 10 recent games with summoner ID lookup
  .then((data) => request.get(genReqOptions(`https://na.api.riotgames.com/api/lol/NA/v1.3/game/by-summoner/${data.id}/recent`)))
  // .catch((e) => console.log('error fetching summoner info', e))
  .then((data) => {
    let games = data.games.slice(0, 4);
    // loop over first 4 games and map out array of player.summonerIds
    let playerIdsArr = games.map((game) => game.fellowPlayers.map((player) => player.summonerId).toString())
    // loop over each game.fellowPlayers and add summoner name by looking up with summonerID from each fellowPlayer obj
    Promise.all(playerIdsArr.map((playerIds) => request.get(genReqOptions(`https://na.api.riotgames.com/api/lol/NA/v1.4/summoner/${playerIds}`))))
      .then((summonerData) => {
        games.forEach((game, gIdx) => {
          game.fellowPlayers.forEach((player, pIdx) => {
            player.summonerName = summonerData[gIdx][player.summonerId].name
          })
        })
        res.json(games)
      });
  })
  // .then((data) => res.json(data))
  .catch((e) => res.json(e))
}