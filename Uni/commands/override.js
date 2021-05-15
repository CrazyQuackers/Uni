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
        ez.pack = "Distorted Pack"
        ez.capacity = 3500000
        ez.sellTime = 140
        ez.duck = true
        ez.unicorn = true
        sm.quest = 2
        sm.task = 10
        ez.constructionOpen = true
        fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
        fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})
    }
}
exports.help = {
    name: 'override'
}