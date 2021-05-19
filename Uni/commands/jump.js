exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const q = require('../../data/q.json')
    let sm = q[message.guild.id].users[message.member.id]
    if((sm.quest==4)&&(sm.task==7)&&(sm.qStarted)&&(sm.obj1==0)){if(sm.obj2==1){message.react("✅")
            message.channel.send(`<@${message.member.id}> You've jumped through The 🟢 **Green Ring**!`)
            sm.obj1=1
            fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})}else{message.react("❌")
            message.channel.send(`<@${message.member.id}> You have to **%find** the 🟢 green ring before you can **%jump** through it!`)}}
}
exports.help = {
    name: 'jump'
}