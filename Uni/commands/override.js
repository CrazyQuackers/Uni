exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const q = require('../../data/q.json')
    let sm = q[message.guild.id].users[message.member.id]
    const db = require('../../data/db.json')
    let ez = db[message.guild.id].users[message.member.id]
    if(message.author.id==352558373016698881)
    {
        if(args.length > 0){
            if(args[0]=="t"){sm.task++;}else{sm.quest++
                sm.task = 1}
            sm.obj1 = 0
            sm.obj2 = 0 
            sm.obj3 = 0
            sm.obj4 = 0
            sm.obj5 = 0
            sm.obj6 = 0
            sm.qStarted = false
            fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})
            return;
        }
        message.react("✅")
        ez.gems = 50000
        ez.ectoTokens = 1000000000
        ez.antenna = 10
        ez.pack = "Distorted Pack"
        ez.capacity = 3500000
        ez.sellTime = 140
        ez.duck = true
        ez.cat = true
        ez.dino = true
        ez.unicorn = true
        ez.cow = true
        ez.deer = true
        ez.cyborg = true
        ez.panda = true
        sm.hypno = true
        ez.rex = true
        ez.shark = true
        ez.jack = true
        sm.quest = 11
        sm.task = 1
        sm.converter = 3
        ez.constructionOpen = true
        ez.pyramidsOpen = true
        ez.iceOpen = true
        sm.hbUnlocked = true
        sm.champion = true
        sm.equipped = "basic"
        sm.blox = true
        sm.sky = true
        sm.surfer = true
        sm.atom = true
        sm.petLuck = true
        sm.bossLuck = true
        sm.badge = true
        fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){let pog = 1}})
        fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})
    }
}
exports.help = {
    name: 'override'
}