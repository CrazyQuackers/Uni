exports.run = async (bot,message,args) => {
    const db = require('../../data/db.json')
    let ez = db[message.guild.id]
    const guild = bot.guilds.cache.get('823252764246147152')
    const membersArray = guild.members.cache.array()
    var notBots = []
    let i = 0
    let str = ""
    var topTen = []
    membersArray.forEach(member => {if((!member.user.bot)&&(ez.users[member.user.id])){notBots[i] = member.user}
        i++})
    var sorted = notBots.sort((a, b) => ez.users[b.id].antenna - ez.users[a.id].antenna)
    for(i=0 ; i<sorted.length ; i++){if(i<=9){topTen[i]=sorted[i]}}
    for(i=0 ; i<topTen.length ; i++){str=str+`${i+1}. **${topTen[i].username}** - ${ez.users[topTen[i].id].antenna} 📡\n`}
    const topEmbed = {
        color: 16777215,
        title: `🏆 ${message.name}'s Top Antenna Level`,
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
exports.help = {
    name: 'top'
}