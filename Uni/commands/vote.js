const Topgg = require("@top-gg/sdk")
const topgg = new Topgg.Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyMzI1MzA4NjQwNjk2NzM1NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE4MTQ2ODI5fQ.QgWEMQx9hltJGdZ49-aYjqND7eJCWYXN3CPj2NhxjDw")

exports.run = async (bot,message,args) => {
    const db = require('../../data/db.json')
    const fs = require("fs")
    let ez = db[message.guild.id].users[message.member.id]
    let voted = await topgg.hasVoted(message.author.id)
    if(voted){sendMessage(message,`**${message.author.username},** you can't vote at the moment.`)}else{sendMessage(message,`**${message.author.username},** you can vote now!`)
        ez.lastVote = new Date().getTime()
        let g = (Math.floor(Math.random()*601))+400;
        ez.gems+=g
        message.author.send(`${message.member.id} You recieved **${g}** <:gems:825122942413045791> Gems for voting!\nCome back in 🕛 **12 hours** to vote again!`)
        fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){let pog = 1}})}
}
exports.help = {
    name: 'vote'
}

function sendMessage(message,change)
{
    message.channel.send(`🎩 **Top.gg isn't related to Uni and there are no options for the bot owner to disable the ads.**\n⬆️ Voting this bot will help Uni grow in population!\n<:gems:825122942413045791> You will also recieve some Gems for voting!\n🙌 Thanks for helping!\n\n${change}\nhttps://top.gg/bot/823253086406967356/vote`)
}