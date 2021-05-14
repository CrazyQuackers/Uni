exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const db = require('../../data/db.json')
    const q = require('../../data/q.json')
    let ez = db[message.guild.id].users[message.member.id]
    let sm = q[message.guild.id].users[message.member.id]
    if((sm.quest==2)&&(sm.task==9)&&(sm.qStarted)&&(!ez.constructionOpen)&&(ez.newspapers>=10)&&(ez.tires>=10)&&(ez.socks>=10)){
        message.react("✅")
        message.channel.send(`<@${message.member.id}> You've unlocked The 🏗️ **Construction Site**!`)
        ez.constructionOpen = true
        ez.newspapers = ez.newspapers - 10
        ez.tires = ez.tires - 10
        ez.socks = ez.socks - 10
        fs.writeFile("./data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})}else{message.react("❌")}
}
exports.help = {
    name: 'unlock'
}