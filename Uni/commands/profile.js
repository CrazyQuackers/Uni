exports.run = async (bot,message,args) => {
    const q = require('../../data/q.json')
    let sm = q[message.guild.id].users[message.member.id]
    const db = require('../../data/db.json')
    let ez = db[message.guild.id].users[message.member.id]
    let other = message.mentions.members.first();
    let tag = message.member
    if(other){tag = other
        sm = q[message.guild.id].users[tag.id]
        ez = db[message.guild.id].users[tag.id]}
    const arr = [ez.pug,ez.fox,ez.cow,ez.pig,ez.mouse,ez.deer,ez.wolf,ez.duck,ez.unicorn,ez.bat,ez.jack,ez.bear,ez.cat,ez.cyborg,ez.horse,ez.fish,ez.chicken,ez.giraffe,ez.bob,ez.butterfly,ez.peacock,ez.tiger,ez.flamingo,ez.koala,ez.bot,ez.dino,ez.clownfish,ez.panda,ez.bee,ez.shark,ez.steve,ez.rabbit,ez.rex,sm.hypno,sm.atom,sm.tree,sm.george,sm.sludge,sm.subject,sm.king,sm.mag,sm.rainwave]
    let c = 0
    let i = 0
    for(i=0 ; i<arr.length ; i++){if(arr[i]){c++}}
    let titleText = `__Profile__`
    if(sm.badge){titleText = titleText + " <:ghosthunterbadge:874405583959228477>"}
    const embed = {
        color: 38977,
        author: {
            name: `${tag.user.username}'s`,
            icon_url: tag.user.avatarURL(),
        },
        title: titleText,
        description: `📡 **Antenna Level:** ${ez.antenna}\n\n<:pack:825122944204013588> **Pack Name:** ${ez.pack}\n\n🗺️ **Questline:** ${getQuest(sm.quest,sm.task)}\n\n🐶 **Number of Pets:** ${c}\n\n<:hoverboard:842713851585495070> **Number of Hoverboards:** ${countHoverboards(sm)}\n\n👻 **Ghosts caught:** ${ez.caught}\n\n💀 **Bosses Defeated:** ${ez.defeated}`,
        thumbnail: {
            url: getThumbnail(sm.equipped),
        },
        timestamp: new Date(),
        footer: {
            icon_url: 'https://imgur.com/ASUc77V.png',
        },
    };
    message.channel.send({embed});
}
exports.help = {
    name: 'profile'
}

function getQuest(quest,task)
{
    if(quest==11){return "Rebirth ♻️"}else{return `Quest #${quest}, Task #${task} 📖`}
}

function getThumbnail(equipped)
{
    switch(sm.equipped)
    {
        case "basic":
            return "https://imgur.com/2uLSAQ4.png"
        case "sky":
            return "https://imgur.com/85XE61R.png"
        case "feather":
            return "https://imgur.com/kyuzhW6.png"
        case "oblivion":
            return "https://imgur.com/Nsp9ixl.png"
        case "varus":
            return "https://imgur.com/6Y4PubN.png"
        case "chroma":
            return "https://imgur.com/PC3qyZb.png"
        case "champion":
            return "https://imgur.com/XGyBAAm.png"
        case "b-l-o-x":
            return "https://static.wikia.nocookie.net/ghost-simulator-roblox/images/4/40/B-L-O-X.png/revision/latest/scale-to-width-down/300?cb=20200318225349"
        case "atom":
            return "https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/b1/Atom_Surfer.png/revision/latest/scale-to-width-down/300?cb=20210208112002"

    }
    return "https://imgur.com/RV975Lr.png"
}

function countHoverboards(sm)
{
    const arr = [sm.hbUnlocked,sm.sky,sm.feather,sm.oblivion,sm.varus,sm.chroma,sm.champion,sm.blox,sm.surfer]
    let c = 0
    let i = 0
    for(i=0 ; i<arr.length ; i++){if(arr[i]){c++}}
    return c;
}