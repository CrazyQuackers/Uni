exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const q = require('../../data/q.json')
    let sm = q[message.guild.id].users[message.member.id]
    if((sm.quest==4)&&(sm.task==7)&&(sm.qStarted)&&(sm.obj1==0)){if(sm.obj2==1){message.react("✅")
        message.channel.send(`<@${message.member.id}> You've jumped through The 🟢 **Green Ring**!`)
        sm.obj1=1
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")
        message.channel.send(`<@${message.member.id}> You have to **%find** the 🟢 green ring before you can **%jump** through it!`)}}
    if((sm.quest==5)&&(sm.task==4)&&(sm.qStarted)&&(sm.obj2==0)){if(sm.obj1==1){message.react("✅")
        message.channel.send(`<@${message.member.id}> You've jumped through The 🔴 **Red Ring**!`)
        sm.obj2=1
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")
        message.channel.send(`<@${message.member.id}> You have to **%find** the 🔴 red ring before you can **%jump** through it!`)}}
    if((sm.quest==6)&&(sm.task==8)&&(sm.qStarted)&&(sm.obj2==0)){if(sm.obj1==1){message.react("✅")
        message.channel.send(`<@${message.member.id}> You've jumped through The 🔵 **Blue Ring**!`)
        sm.obj2=1
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")
        message.channel.send(`<@${message.member.id}> You have to **%find** the 🔵 blue ring before you can **%jump** through it!`)}}
    if((sm.quest==7)&&(sm.task==12)&&(sm.qStarted)&&(sm.obj2==0)){if(sm.obj1==1){message.react("✅")
        message.channel.send(`<@${message.member.id}> You've jumped through The 🟡 **Yellow Ring**!`)
        sm.obj2=1
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")
        message.channel.send(`<@${message.member.id}> You have to **%find** the 🟡 yellow ring before you can **%jump** through it!`)}}
}
exports.help = {
    name: 'jump'
}