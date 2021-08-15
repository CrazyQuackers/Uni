exports.run = async (bot,message,args) => {
    if(args[0]=="hb"){args[0]="hoverboard"}
    if((args[0]!="antenna")&&(args[0]!="pack")&&(args[0]!="pet")&&(args[0]!="quest")&&(args[0]!="boss")&&(args[0]!="hoverboard")&&(args[0]!="ghost")){topInfo(message)}else{
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
        for(i=0 ; i<membersArray.length ; i++){if((!membersArray[i].user.bot)&&(ez.users[membersArray[i].user.id])){notBots[i]=membersArray[i].user}}
        switch(args[0]){
            case "antenna":
                sorted = notBots.sort((a, b) => ez.users[b.id].antenna - ez.users[a.id].antenna)
                break;
            case "pack":
                sorted = notBots.sort((a, b) => ez.users[b.id].capacity - ez.users[a.id].capacity)
                break;
            case "pet":
                sorted = notBots.sort((a, b) => countPets(b,ez,sm) - countPets(a,ez,sm))
                break;
            case "hoverboard":
                sorted = notBots.sort((a, b) => countHoverboards(b,sm) - countHoverboards(a,sm))
                break;
            case "boss":
                sorted = notBots.sort((a, b) => ez.users[b.id].defeated - ez.users[a.id].defeated)
                break;
            case "ghost":
                sorted = notBots.sort((a, b) => ez.users[b.id].caught - ez.users[a.id].caught)
                break;
            case "quest":
                sorted = notBots.sort((a , b) => getQuestNumber(b,sm) - getQuestNumber(a,sm))
                break;
        }
        for(i=0 ; i<sorted.length ; i++){if(sorted[i]!=undefined){removeUndefined[i]=sorted[i]}}
        for(i=0 ; i<removeUndefined.length ; i++){if(i<=9){topTen[i]=removeUndefined[i]}}
        switch(args[0]){
            case "antenna":
                for(i=0 ; i<topTen.length ; i++){str=str+`${i+1}. **${topTen[i].username}** - ${ez.users[topTen[i].id].antenna} 📡\n`}
                t = "Antenna Levels"
                break;
            case "pack":
                for(i=0 ; i<topTen.length ; i++){str=str+`${i+1}. **${topTen[i].username}** - ${ez.users[topTen[i].id].pack} <:pack:825122944204013588>\n`}
                t = "Packs"
                break;
            case "pet":
                for(i=0 ; i<topTen.length ; i++){str=str+`${i+1}. **${topTen[i].username}** - ${countPets(topTen[i],ez,sm)} 🐶\n`}
                t = "Pets"
                break;
            case "hoverboard":
                for(i=0 ; i<topTen.length ; i++){str=str+`${i+1}. **${topTen[i].username}** - ${countHoverboards(topTen[i],sm)} <:hoverboard:842713851585495070>\n`}
                t = "Hoverboards"
                break;
            case "boss":
                for(i=0 ; i<topTen.length ; i++){str=str+`${i+1}. **${topTen[i].username}** - ${ez.users[topTen[i].id].defeated} 💀\n`}
                t = "Bosses"
                break;
            case "ghost":
                for(i=0 ; i<topTen.length ; i++){str=str+`${i+1}. **${topTen[i].username}** - ${ez.users[topTen[i].id].caught} 👻\n`}
                t = "Ghosts"
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
        color: 16777214,
        author: {
            name: message.guild.name,
            icon_url: message.guild.iconURL(),
        },
        title: "Uni Top Server Commands",
        description: "use these commands to see who are the top members in this server for the following catagories!",
        thumbnail: {
            url: "https://imgur.com/ZJfZBkF.png",
        },
        fields: [
            {
                name: "%top antenna",
                value: "Lists the members with the highest antenna levels",
                inline: false,
            },
            {
                name: "%top pack",
                value: "Lists the members with the best packs",
                inline: false,
            },
            {
                name: "%top pet",
                value: "Lists the members with the most pets",
                inline: false,
            },
            {
                name: "%top hoverboard",
                value: "Lists the members with the most hoverboards",
                inline: false,
            },
            {
                name: "%top ghost",
                value: "Lists the members with the most ghosts caught",
                inline: false,
            },
            {
                name: "%top boss",
                value: "Lists the members with the most bosses defeated",
                inline: false,
            },
            {
                name: "%top quest",
                value: "Lists the members with the farthest quests",
                inline: false,
            },
        ],
    }
    message.channel.send({ embed: listEmbed });
}

function countPets(mem,ez2,sm2)
{
    const ez = ez2.users[mem.id]
    const sm = sm2.users[mem.id]
    const arr = [ez.pug,ez.fox,ez.cow,ez.pig,ez.mouse,ez.deer,ez.wolf,ez.duck,ez.unicorn,ez.bat,ez.jack,ez.bear,ez.cat,ez.cyborg,ez.horse,ez.fish,ez.chicken,ez.giraffe,ez.bob,ez.butterfly,ez.peacock,ez.tiger,ez.flamingo,ez.koala,ez.bot,ez.dino,ez.clownfish,ez.panda,ez.bee,ez.shark,ez.steve,ez.rabbit,ez.rex,sm.hypno,sm.atom,sm.tree,sm.george,sm.sludge,sm.subject,sm.king,sm.mag,sm.rainwave]
    let c = 0
    let i = 0
    for(i=0 ; i<arr.length ; i++){if(arr[i]){c++}}
    return c;
}

function countHoverboards(mem,sm2)
{
    const sm = sm2.users[mem.id]
    const arr = [sm.hbUnlocked,sm.sky,sm.feather,sm.oblivion,sm.varus,sm.chroma,sm.champion,sm.blox,sm.surfer]
    let c = 0
    let i = 0
    for(i=0 ; i<arr.length ; i++){if(arr[i]){c++}}
    return c;
}

function getQuestNumber(mem,sm2)
{
    const sm = sm2.users[mem.id]
    let num = ((sm.quest*100) + sm.task)
    console.log(num)
    return num
}