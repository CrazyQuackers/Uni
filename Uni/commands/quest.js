exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const db = require('../../data/db.json')
    const q = require('../../data/q.json')
    let ez = db[message.guild.id].users[message.member.id]
    let sm = q[message.guild.id].users[message.member.id]
    let o1 = sm.obj1
    if(args[0]=="done"){
        switch(sm.quest)
        {
            case 1:
                switch(sm.task)
                {
                    case 1:
                        if(o1>=2){
                            message.react("✅")
                            createDoneMessage("\`Perfect! You're an expert already! Here's your reward! Some shiny Gems!\`\n+**5** <:gems:825122942413045791>","https://imgur.com/2RJJI3F.png",5,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                }
                break;
        }
    }else{
        switch(sm.quest)
        {
            case 1:
                switch(sm.task)
                {
                    case 1:
                        if(o1>2){o1=2}
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #1/8__** : Ghost Catching 101\n\n\`Well well well... What do we have here? Another Ghost Hunter to join our ranks! Welcome to our ghost infested world! Join hunters like me, Ghost Hunter Gabe, in fighting against the ghosts! We need all the help we can get! Just use the %catch command and start catching ghosts! Let's start you off easy, go catch 2 Forest Ghosts and use the %quest done command when you're done. I might just give you a reward for helping me...\`\n\nHint: Use the command **%catch forest** to catch ghosts in the forest. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Vacuum **2** 👻 ghosts in the 🏕️ Forest: ${o1}/2`,message,sm,fs,q)
                        break;
                }
                break;
        }
    }
}
exports.help = {
    name: 'quest'
}

function createQuestMessage(t,d,u,n,v,message,sm,fs,q)
{
    const questEmbed = {
        color: 16776960,
        title: t,
        author: {
            name: `${message.author.username}'s Questline`,
            icon_url: message.author.avatarURL(),
        },
        description: d,
        thumbnail: {
            url: u,
        },
        fields: [
            {
                name: n,
                value: v,
            },
        ],
    };
    message.channel.send({ embed: questEmbed });
    sm.qStarted = true
    fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})
}

function createDoneMessage(d,u,g,fs,db,q,ez,message,sm)
{
    const doneEmbed = {
        color: 255,
        title: `Quest #${sm.quest} - Task #${sm.task} - Done`,
        author: {
            name: `${message.author.username}'s Questline`,
            icon_url: message.author.avatarURL(),
        },
        description: d,
        thumbnail: {
            url: u,
        },
    };
    message.channel.send({ embed: doneEmbed });
    sm.task = sm.task + 1
    sm.qStarted = false
    ez.gems = ez.gems + g
    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
    fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})
}