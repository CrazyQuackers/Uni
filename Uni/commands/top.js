exports.run = async (bot,message,args) => {
    if((args[0]!="antenna")&&(args[0]!="pack")&&(args[0]!="pets")&&(args[0]!="quest")){topInfo(message)}else{
        const db = require('../../data/db.json')
        const q = require('../../data/q.json')
        const guild = message.guild
        let ez = db[guild.id]
        let sm = q[guild.id]
        const membersArray = guild.members.cache.array()
        var notBots = []
        let i = 0
        let str = ""
        var topTen = []
        var removeUndefined = []
        var sorted = []
        let t = 0
        // membersArray.forEach(member => {if((!member.user.bot)&&(ez.users[member.user.id])){notBots[i] = member.user}
        //     i++})
        // go back to this ^ if the following for loop does not work
        for(i=0 ; i<membersArray.length ; i++){if((!membersArray[i].user.bot)&&(ez.users[membersArray[i].user.id])){notBots[i]=membersArray[i].user}}
        switch(args[0]){
            case "antenna":
                sorted = notBots.sort((a, b) => ez.users[b.id].antenna - ez.users[a.id].antenna)
                break;
            case "pack":
                sorted = notBots.sort((a, b) => parseInt(ez.users[b.id].capacity) - parseInt(ez.users[a.id].capacity))
                break;
            case "pets":
                sorted = notBots.sort((a, b) => countPets(b,ez) - countPets(a,ez))
                break;
            case "quest":
                sorted = notBots.sort((a , b) => sm.users[b.id].quest*100+sm.users[b.id].task - sm.users[a.id].quest*100+sm.users[a.id].task)
                break;
        }
        for(i=0 ; i<sorted.length ; i++){if(i<=9){removeUndefined[i]=sorted[i]}}
        for(i=0 ; i<removeUndefined.length ; i++){if(removeUndefined[i]!=undefined){topTen[i]=removeUndefined[i]}}
        switch(args[0]){
            case "antenna":
                for(i=0 ; i<topTen.length ; i++){str=str+`${i+1}. **${topTen[i].username}** - ${ez.users[topTen[i].id].antenna} 📡\n`}
                t = "Antenna Levels"
                break;
            case "pack":
                for(i=0 ; i<topTen.length ; i++){str=str+`${i+1}. **${topTen[i].username}** - ${ez.users[topTen[i].id].pack} <:pack:825122944204013588>\n`}
                t = "Packs"
                break;
            case "pets":
                for(i=0 ; i<topTen.length ; i++){str=str+`${i+1}. **${topTen[i].username}** - ${countPets(topTen[i],ez)} 🐶\n`}
                t = "Pets"
                break;
            case "quest":
                for(i=0 ; i<topTen.length ; i++){str=str+`${i+1}. **${topTen[i].username}** - Quest #${sm.users[topTen[i].id].quest}, Task#${sm.users[topTen[i].id].task} 📖\n`}
                t = "Quests"
                break;
        }
        createEmbeddedMessage(t,str,topTen,message,guild);
    }
}
exports.help = {
    name: 'top'
}

function createEmbeddedMessage(t,str,topTen,message,guild)
{
    const topEmbed = {
        color: 16777214,
        title: `🏆 ${guild.name}'s Top ${t}`,
        description: str,
        thumbnail: {
            url: topTen[0].avatarURL(),
        },
        footer: {
            text: `This command only lists the top 10 members`,
        },
    };
    message.channel.send({ embed: topEmbed });
}

function topInfo(message)
{
    const listEmbed = {
        color: 65280,
        title: "Uni Server Commands",
        description: "Use these commands to see who are the top members in this server for the following catagories!",
        thumbnail: {
            url: "https://imgur.com/ZJfZBkF.png",
        },
        fields: [
            {
                name: "Command",
                value: "• top antenna\n• top pack\n• top pets\n• top quest",
                inline: true,
            },
            {
                name: "Description",
                value: "• Lists the members with the highest antenna levels\n• Lists the members with the best packs\n• Lists the members with the most pets\n• Lists the members with the farthest quests",
                inline: true,
            },
        ],
        timestamp: new Date(),
    }
    message.channel.send({ embed: listEmbed });
}

function countPets(mem,ez2)
{
    const ez = ez2.users[mem.id]
    const arr = [ez.pug,ez.fox,ez.cow,ez.pig,ez.mouse,ez.deer,ez.wolf,ez.duck,ez.unicorn,ez.bat,ez.jack,ez.bear,ez.cat,ez.cyborg,ez.horse,ez.fish,ez.chicken,ez.giraffe,ez.bob,ez.butterfly,ez.peacock,ez.tiger,ez.flamingo,ez.koala,ez.bot,ez.dino,ez.clownfish,ez.panda,ez.bee,ez.shark,ez.steve,ez.rabbit,ez.rex]
    let c = 0
    let i = 0
    for(i=0 ; i<arr.length ; i++){if(arr[i]){c++}}
    return c;
}