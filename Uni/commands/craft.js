exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const q = require('../../data/q.json')
    let sm = q[message.guild.id].users[message.member.id]
    if((sm.quest==7)&&(sm.task==15)&&(sm.qStarted)&&(sm.obj1==0)){message.react("✅")
        sm.obj1=1
        fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log()}})}
}
exports.help = {
    name: 'craft'
}