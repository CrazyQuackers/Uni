exports.run = async (bot,message,args) => {
    const q = require('../../data/q.json')
    const fs = require("fs")
    let sm = q[message.guild.id].users[message.member.id]
    switch(args[0])
    {
        case "enable":
            sm.noDM = false
            message.react("✅");
            break;
        case "disable":
            sm.noDM = true
            message.react("✅");
            break;
    }
    fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})
}
exports.help = {
    name: 'dm'
}