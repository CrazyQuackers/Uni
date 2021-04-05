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
                    case 2:
                        if(o1>=1){
                            message.react("✅")
                            createDoneMessage("\`You sold it? Great! ..You want a reward for that? Fiiiine... but only because you're new. You can have some Gems.\`\n+**10** <:gems:825122942413045791>","https://imgur.com/2RJJI3F.png",10,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 3:
                        if(o1>=1){
                            message.react("✅")
                            createDoneMessage("\`Oh boy... that's a pretty cool ghost! I guess you want your reward now, right? Here's some more Gems.\`\n+**15** <:gems:825122942413045791>","https://imgur.com/2RJJI3F.png",15,fs,db,q,ez,message,sm)
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
                    case 2:
                        if(o1>1){o1=1}
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #2/8__** : The Ghost Market\n\n\`Okay, so you may have noticed your Pack will start to get full after you collect ghosts. You can sell the Ghosts you've collected for Ecto-Tokens by using the command %sell. After using the sell command, your pack will be empty and you will be able to catch ghosts again after the sell cooldown time is over. Check your sell cooldown time by using the command %pack. Anyways, go sell your ghosts now and come back to me after you finish.\`\n\nHint: After completing any quest, use the command %quest done to continue to new ones. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Sell the 👻 ghosts in your <:pack:825122944204013588> Pack: ${o1}/1`,message,sm,fs,q)
                        break;
                    case 3:
                        if(o1>1){o1=1}
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #3/8__** : Prehistoric Mayhem\n\n\`Next up, special ghosts! Each biome has 2 different types of ghosts. The Forest, for example, has Fairies and Owls! The Fairies are regular ghosts and the Owls are special ghosts! The special ghosts are a bit harder to find but they fill up more space in your Pack so you can sell and get Ecto-Tokens much faster! Start by catching 1 Owl Ghost! Find me when you're done for a reward.\`\n\nHint: Use the command %biomes to learn more about each biome. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Vacuum **1** Owl Ghost in the Forest: ${o1}/1`,message,sm,fs,q)
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
    sm.obj1 = 0
    sm.qStarted = false
    ez.gems = ez.gems + g
    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
    fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})
}