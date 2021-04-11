const Topgg = require("@top-gg/sdk")
const topgg = new Topgg.Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyMzI1MzA4NjQwNjk2NzM1NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE4MTQ2ODI5fQ.QgWEMQx9hltJGdZ49-aYjqND7eJCWYXN3CPj2NhxjDw")

exports.run = async (bot,message,args) => {
    let voted = await topgg.hasVoted(message.author.id)
    if(!voted){message.channel.send("You didn't vote me")}else{message.channel.send("you voted me!")}
}
exports.help = {
    name: 'vote'
}