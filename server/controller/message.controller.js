const Summoner = require('../db/summoners.model')
const Message = require('../db/messages.model')

exports.fetchMessages = (req, res) => {
  Message.find({})
    .populate('targetUser')
    .then((messages) => res.json(messages))
}

exports.addMessage = (req, res) => {
  console.log(req.body)
  Summoner.findOne({ name: req.body.targetUser })
    .then((summonerModel) => (summonerModel) ? summonerModel : Summoner.create({ name: req.body.targetUser }) )
    .then((summonerModel) => Message.create({ text: req.body.text, targetUser: summonerModel._id }))
    .then((messageModel) => res.json({ success: true, model: messageModel }))
    .catch((e) => res.json({ success: false, err: e }))
}