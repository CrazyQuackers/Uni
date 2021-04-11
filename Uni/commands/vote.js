const Topgg = require("@top-gg/sdk")
const topgg = new Topgg.Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyMzI1MzA4NjQwNjk2NzM1NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE4MTQ2ODI5fQ.QgWEMQx9hltJGdZ49-aYjqND7eJCWYXN3CPj2NhxjDw")

exports.run = async (bot,message,args) => {
    const q = require('../../data/q.json')
    let sm = q[message.guild.id].users[message.member.id]
    let voted = await topgg.hasVoted(message.author.id)
    if(voted){
        if(sm.lastVote==0){sendMessage(message,`**${message.author.username},** you can't vote at the moment.`)}else{
            let h = (Math.floor((Math.abs(new Date().getTime() - sm.lastVote))/(1000 * 60 * 60)))
            let m = ((Math.floor((Math.abs(new Date().getTime() - sm.lastVote))/(1000 * 60)))%60)
            if(m!=0){
                h = 11 - h
                m = 60 - m
            }
            else{h = 12 - h}
            if(h<10){h = `0${h}`}
            if(m<10){m = `0${m}`}
            let str = `**${h} hours and ${m} minutes**`
            sendMessage(message,`**${message.author.username},** you can't vote at the moment.\nYou'll be able to vote again in ${str}.`)}
    }else{sendMessage(message,`**${message.author.username},** you can vote now!`)}
}
exports.help = {
    name: 'vote'
}

function sendMessage(message,change)
{
    message.channel.send(`⏩ **Top.gg isn't related to Uni and there are no options for the bot owner to disable the ads.**\n⬆️ Voting this bot will help Uni grow in population!\n🙌 Thanks for voting!\n\n${change}\nhttps://top.gg/bot/823253086406967356/vote`)
}