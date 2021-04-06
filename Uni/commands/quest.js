exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const db = require('../data/db.json')
    const q = require('../data/q.json')
    let ez = db[message.guild.id].users[message.member.id]
    let sm = q[message.guild.id].users[message.member.id]
    let o1 = sm.obj1
    let o2 = sm.obj2
    if(args[0]=="done"){
        if(!sm.qStarted){
            message.react("❌")
            return;
        }
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
                    case 4:
                        if(ez.ectoTokens>=100){
                            message.react("✅")
                            createDoneMessage("\`Alright! Now you're rolling in the tokens! ..And, if that wasn't enough, here's some Gems as a reward!\`\n+**20** <:gems:825122942413045791>","https://imgur.com/2RJJI3F.png",20,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 5:
                        if((parseInt(ez.capacity))>50){
                            message.react("✅")
                            createDoneMessage("\`Now you got the coolest gear in town! ..Until you buy the next upgrade, then you're even cooler! Here's some Gems as a reward. Don't worry, you're almost done with all of my tasks!\`\n+**25** <:gems:825122942413045791>","https://imgur.com/2RJJI3F.png",25,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 6:
                        if(o1>=1){
                            message.react("✅")
                            createDoneMessage("\`Congrats! You got your first pet! Pets are used to fight bosses, but you'll need much more pets to do that... For now, take these Gems as a reward!\`\n+**30** <:gems:825122942413045791>","https://imgur.com/2RJJI3F.png",30,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 7:
                        if((ez.acorns>=3)&&(ez.parts>=3)){
                            message.react("✅")
                            createDoneMessage("\`You saved me so much time! Thanks! Oddly enough, these Acorns can be used in some cool technology. Oh right, you want a reward. Um... here! Have some extra Gems.\`\n+**35** <:gems:825122942413045791>","https://imgur.com/2RJJI3F.png",35,fs,db,q,ez,message,sm)
                        }else{message.react("❌")}
                        break;
                    case 8:
                        if(ez.antenna>=2){
                            message.react("✅")
                            createDoneMessage("\`Yeeeeees, you upgraded! Now you can visit the next biome, the City Biome! That's all the tasks I have for you. Your next quest will be with Ghost Hunter Adam in the City. Good luck, Ghost Hunter! Oh, and don't forget your reward before you go!\`\n+**35** <:gems:825122942413045791>","https://imgur.com/2RJJI3F.png",35,fs,db,q,ez,message,sm)
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
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #3/8__** : Prehistoric Mayhem\n\n\`Next up, special ghosts! Each biome has 2 different types of ghosts. The Forest, for example, has Fairies and Owls! The Fairies are regular ghosts and the Owls are special ghosts! The special ghosts are a bit harder to find but they fill up more space in your Pack so you can sell and get Ecto-Tokens much faster! Start by catching 1 Owl Ghost! Find me when you're done for a reward.\`\n\nHint: Use the command %biomes to learn more about each biome. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Vacuum **1** 🦉 Owl Ghost in the 🏕️ Forest: ${o1}/1`,message,sm,fs,q)
                        break;
                    case 4:
                        o1 = ez.ectoTokens
                        if(o1>100){o1=100}
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #4/8__** : Collection Day\n\n\`Your Pack probably fills up pretty fast, right? Time to get some upgrades! First you're going to need something to buy those upgrades with. Go collect 100 Ecto-Tokens and let me know when you're done.\`\n\nHint: Use the command %sell to sell your ghosts and receive Ecto-Tokens. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Obtain **100** <:ectotoken:825122939812315219> Ecto-Tokens: ${o1}/100`,message,sm,fs,q)
                        break;
                    case 5:
                        if((parseInt(ez.capacity))>50){o1=1}
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #5/8__** : The Coolest Gear In Town\n\n\`Now that you got some Ecto-Tokens, you can buy new Packs! This will help you collect more stuff easier and faster. Go upgrade your Pack once. Report back to me when you're done for a reward!\`\n\nHint: To upgrade your pack, use the command %pack up. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Upgrade your <:pack:825122944204013588> pack once: ${o1}/1`,message,sm,fs,q)
                        break;
                    case 6:
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #6/8__** : Your First Pet\n\n\`You're probably wondering... What are all these Gems I'm getting for?? Well, gems are used to unbox pets! You can use the gems you have to buy pet crates and then you will randomly receive pets! Use the command %pet crate 1 buy to unbox your first pet from Pet Crate #1! Come back to me after you got your first pet!\`\n\nHint: Learn more about pets and pet crates with the commands %pet and %pet crate. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Unbox a 🐶 pet from Pet Crate #1: ${o1}/1`,message,sm,fs,q)
                        break;
                    case 7:
                        o1 = ez.acorns
                        o2 = ez.parts
                        if(o1>3){o1=3}
                        if(o2>3){o2=3}
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #7/8__** : Stop, Thief!\n\n\`So... fun fact about ghosts, they love to steal stuff! The Forest ghosts took my Acorns and Parts! I know, it's weird... could you get them back? Find 3 Acorns and 3 Antenna Parts from Forest ghosts.\`\n\nHint: The command %inventory will display all of your collected items. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Obtain **3** <:acorn:825122942660509707> Acorns from the 🏕️ Forest: ${o1}/3\n• Obtain **3** 🔩 Antenna Parts: ${o2}/3`,message,sm,fs,q)
                        break;
                    case 8:
                        o1 = ez.antenna
                        if(o1>2){o1=2}
                        createQuestMessage("🗺️ Quest #1 - Ghost Hunter Gabe","📖 **__Task #8/8__** : Gotta Do the Upgrade\n\n\`Oh, those items you got me? You can use them to upgrade your Antenna, so you can explore new Biomes! To do this, use the command %antenna up. Talk to me after you upgrade, and I'll give you some Gems!\`\n\nHint: You can check your Antenna Level with the command %antenna. (Hints will only appear in the first quest)","https://imgur.com/2RJJI3F.png","📜 __Goals:__",`• Upgrade your 📡 Antenna to Level **2**: ${o1}/2`,message,sm,fs,q)
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
    if((sm.quest==1)&&(sm.task==8)){
        sm.quest = sm.quest + 1
        sm.task = 0
    }else{sm.task = sm.task + 1}
    sm.obj1 = 0
    sm.obj2 = 0
    sm.qStarted = false
    ez.gems = ez.gems + g
    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
    fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})
}