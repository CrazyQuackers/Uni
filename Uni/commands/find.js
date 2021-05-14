exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const q = require('../../data/q.json')
    let sm = q[message.guild.id].users[message.member.id]
    if((sm.quest==2)&&(sm.task==6)&&(sm.qStarted)&&(sm.obj1==0)){if((args.length==2)&&(args[0]=="walkie")&&(args[1]=="talkie")){message.react("✅")
            message.channel.send(`<@${message.member.id}> You've found 📞 **Adam's Walkie Talkie**!`)
            sm.obj1=1
            fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})}else{message.react("❌")}}
}
exports.help = {
    name: 'find'
}