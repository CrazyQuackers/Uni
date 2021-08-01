const Topgg = require("@top-gg/sdk")
const topgg = new Topgg.Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyMzI1MzA4NjQwNjk2NzM1NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE4MTQ2ODI5fQ.QgWEMQx9hltJGdZ49-aYjqND7eJCWYXN3CPj2NhxjDw")

exports.run = async (bot,message,args) => {
    let voted = await topgg.hasVoted(message.author.id)
    const db = require('../../data/db.json')
    const q = require('../../data/q.json')
    let other = message.mentions.members.first();
    let ez = db[message.guild.id].users[message.member.id]
    let sm = q[message.guild.id].users[message.member.id]
    let tag = message.member.user.tag
    let tagArr = tag.split('#');
    let str = `**${tagArr[0]}**, here is your info:`
    let time = ""
    if(other){
        ez = db[message.guild.id].users[other.id]
        tag = other.user.tag
        tagArr = tag.split('#');
        str = `**${tagArr[0]}**'s info:`
    }
    let vote = "⬆️ Your **\`vote\`** is ready! ✅"
    let daily = "🕐 Your **\`daily\`** is ready! ✅"
    let boss = "💀 Your **\`boss fight\`** is ready! ✅"
    let ctch = "👻 Your **\`catch\`** is ready! ✅"
    let gcSmall = "<:small:825134200482431007> Your **\`gem chest small\`** is locked! 🔒"
    let gcMedium = "<:medium:825134203821228032> Your **\`gem chest medium\`** is locked! 🔒"
    let gcLarge = "<:large:825134202127253514> Your **\`gem chest large\`** is locked! 🔒"
    if(voted){
        time = calcTime(ez.lastVote,12)
        vote = `⬆️ Your next **\`vote\`** is available in ${time} ❌`}
    if(Math.floor(new Date().getTime() - ez.lastClaim) / (1000 * 60 * 60 * 24) < 1){
        time = calcTime(ez.lastClaim,24)
        daily = `🕐 Your next **\`daily\`** is available in ${time} ❌`
    }
    if(Math.floor(new Date().getTime() - ez.lastBoss) / (1000 * 60 * 10) < 1){
        let m = (Math.round((new Date().getTime() - ez.lastBoss)/(1000 * 60)))
        boss = `💀 Your next **\`boss fight\`** is available in **0h ${m}m.** ❌`
    }
    if(Math.floor(new Date().getTime() - sm.lastSell) / (1000 * 60 * sm.sellWait) < 1){
        time = calcCtchTime(sm)
        ctch = `👻 Your next **\`catch\`** is available in ${time} ❌`
    }
    if(ez.constructionOpen){
        if(Math.floor(new Date().getTime() - ez.lastConstruction) / (1000 * 60 * 60) < 1){
            time = calcTime(ez.lastConstruction,1)
            gcSmall = `<:small:825134200482431007> Your next **\`gem chest small\`** is available in ${time} ❌`
        }
        else{gcSmall = "<:small:825134200482431007> Your **\`gem chest small\`** is ready! ✅"}
    }
    if(ez.pyramidsOpen){
        if(Math.floor(new Date().getTime() - ez.lastPyramids) / (1000 * 60 * 60 * 6) < 1){
            time = calcTime(ez.lastPyramids,6)
            gcMedium = `<:medium:825134203821228032> Your next **\`gem chest medium\`** is available in ${time} ❌`
        }
        else{gcMedium = "<:medium:825134203821228032> Your **\`gem chest medium\`** is ready! ✅"}
    }
    if(ez.iceOpen){
        if(Math.floor(new Date().getTime() - ez.lastIce) / (1000 * 60 * 60 * 12) < 1){
            time = calcTime(ez.lastIce,12)
            gcLarge = `<:large:825134202127253514> Your next **\`gem chest large\`** is available in ${time} ❌`
        }
        else{gcLarge = "<:large:825134202127253514> Your **\`gem chest large\`** is ready! ✅"}
    }
    message.channel.send(`${str}\n\n${vote}\n${daily}\n${boss}\n${ctch}\n${gcSmall}\n${gcMedium}\n${gcLarge}`)
}
exports.help = {
    name: 'info'
}

function calcTime(last,n)
{
    let h = (Math.floor((Math.abs(new Date().getTime() - last))/(1000 * 60 * 60)))
    let m = ((Math.floor((Math.abs(new Date().getTime() - last))/(1000 * 60)))%60)
    if(m!=0){
        h = n-1 - h
        m = 60 - m
    }
    else{h = n - h}
    return `**${h}h ${m}m.**`
}

function calcCtchTime(sm)
{
    let i = 0
    let c = 0
    let h = (Math.floor((Math.abs(new Date().getTime() - sm.lastSell))/(1000 * 60 * 60)))
    let m = (Math.round((new Date().getTime() - sm.lastSell)/(1000 * 60)))
    for(i = sm.sellWait ; i>59 ; i-=60){c++}
    if(i==0){
        h = c - h - 1
        m = 60 - m
    }else{
        if(i<m){
            h = c - h - 1
            m = 60 - m + i
        }else{
            h = c - h
            m = i - m
        }
    }
    return `**${h}h ${m}m.**`
}