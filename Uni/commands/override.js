exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const q = require('../../data/q.json')
    let sm = q[message.guild.id].users[message.member.id]
    const db = require('../../data/db.json')
    let ez = db[message.guild.id].users[message.member.id]
    if(message.author.id==352558373016698881)
    {
        message.react("✅")
        ez.gems = 50000
        ez.ectoTokens = 50000
        ez.antenna = 5
        ez.pack = "Distorted Pack"
        ez.capacity = 1000000000000
        ez.sellTime = 140
        ez.duck = true
        ez.unicorn = true
        ez.cow = true
        ez.deer = true
        ez.cyborg = true
        ez.panda = true
        sm.hypno = true
        ez.rex = true
        ez.shark = true
        ez.jack = true
        sm.quest = 4
        sm.task = 1
        ez.constructionOpen = true
        sm.hbUnlocked = true
        sm.equipped = "basic"
        fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log()}})
        fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log()}})
    }
}
exports.help = {
    name: 'override'
}