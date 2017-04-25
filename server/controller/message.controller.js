const Summoner = require('../db/summoners.model')
const Message = require('../db/messages.model')

exports.fetchMessages = (req, res) => {
  Message.find({})
    .populate('targetUser')
    .populate('sender')
    .then((messages) => res.json(messages))
}

exports.addMessage = (req, res) => {
  console.log(req.body)
  let targetUserId;
  Summoner.findOne({ name: req.body.targetUser })
    .then((summonerModel) => (summonerModel) ? summonerModel : Summoner.create({ name: req.body.targetUser }))
    .then((summonerModel) => {
      targetUserId = summonerModel._id
      return Summoner.findOne({ name: req.body.sender })
    })
    .then((senderModel) => Message.create({ sender: senderModel._id,score: req.body.score, text: req.body.text, targetUser: targetUserId }) )
    .then((messageModel) => res.json({ success: true, model: messageModel }))
    .catch((e) => res.json({ success: false, err: e }))
}