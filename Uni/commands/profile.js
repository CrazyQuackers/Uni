const Discord = require(`discord.js`)

exports.run = async (bot,message,args) => {
    console.log("hello")
    const q = require('../../data/q.json')
    let sm = q[message.guild.id].users[message.member.id]
    const db = require('../../data/db.json')
    let ez = db[message.guild.id].users[message.member.id]
    let other = message.mentions.members.first();
    let tag = message.member
    if(other){tag = other
        sm = q[message.guild.id].users[tag.id]
        ez = db[message.guild.id].users[tag.id]}
    const arr = [ez.pug,ez.fox,ez.cow,ez.pig,ez.mouse,ez.deer,ez.wolf,ez.duck,ez.unicorn,ez.bat,ez.jack,ez.bear,ez.cat,ez.cyborg,ez.horse,ez.fish,ez.chicken,ez.giraffe,ez.bob,ez.butterfly,ez.peacock,ez.tiger,ez.flamingo,ez.koala,ez.bot,ez.dino,ez.clownfish,ez.panda,ez.bee,ez.shark,ez.steve,ez.rabbit,ez.rex]
    let c = 0
    let i = 0
    for(i=0 ; i<arr.length ; i++){if(arr[i]){c++}}
    let u = ""
    let n = ""
    switch(sm.equipped){
        case "basic":
            u = "https://imgur.com/2uLSAQ4.png"
            n = "Basic"
            break;
        case "sky":
            u = "https://imgur.com/85XE61R.png"
            n = "Sky Surfer"
            break;
        case "feather":
            u = "https://imgur.com/kyuzhW6.png"
            n = "Feather Shock"
            break;
        case "oblivion":
            u = "https://imgur.com/Nsp9ixl.png"
            n = "Oblivion"
            break;
        case "varus":
            u = "https://imgur.com/6Y4PubN.png"
            n = "VARUS"
            break;
        case "chroma":
            u = "https://imgur.com/PC3qyZb.png"
            n = "Chroma Float"
            break;
        default:
            u = "https://imgur.com/RV975Lr.png"
            n = "None"

    }
    const embed = {
        color: 38977,
        author: {
            name: `${tag.username}'s Profile`,
            icon_url: tag.user.avatarURL(),
        },
        description: `📡 **Antenna Level:** ${ez.antenna}\n\n💀 **Bosses Defeated:** ${ez.defeated}\n\n<:pack:825122944204013588> **Pack Name:** ${ez.pack}\n\n🐶 **Number of Pets:** ${c}\n\n🗺️ **Questline:** Quest #${sm.quest} - Task #${sm.task}\n\n<:hoverboard:842713851585495070> **Equipped Hoverboard:** ${n}`,
        thumbnail: {
            url: u,
        },
        timestamp: new Date(),
        footer: {
            text: `${tag.username}'s Uni Profile`,
            icon_url: 'https://imgur.com/ASUc77V.png',
        },
    };
    message.channel.send({embed});
}
exports.help = {
    name: 'profile'
}