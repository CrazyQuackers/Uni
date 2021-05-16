exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const q = require('../../data/q.json')
    let sm = q[message.guild.id].users[message.member.id]
    const db = require('../../data/db.json')
    let ez = db[message.guild.id].users[message.member.id]
    if(message.author.id==352558373016698881)
    {
        message.react("✅")
        ez.gems = 500
        ez.ectoTokens = 500
        ez.antenna = 4
        ez.pack = "Starter Pack"
        ez.capacity = 50
        ez.storage = 50
        ez.sellTime = 10
        //ez.duck = true
        //ez.unicorn = true
        sm.hypno = true
        sm.quest = 4
        sm.task = 1
        ez.constructionOpen = true
        sm.hbUnlocked = true
        sm.equipped = "basic"
        fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
        fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})
    }
}
exports.help = {
    name: 'override'
}