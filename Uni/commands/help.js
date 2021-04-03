const Discord = require(`discord.js`)

exports.run = async (bot,message,args) => {
    message.react("📬");
    const embed = new Discord.MessageEmbed()
        .setColor(65280)
        .setTitle("Uni Commands")
        .setDescription("secondary commands appear in some of these commands")
        .setThumbnail('https://imgur.com/ASUc77V.png')
        .addFields(
            { name: 'Command', value: "• quest\n• catch\n• biomes\n• antenna\n• sell\n• pack\n• pet crate\n• pet\n• boss\n• inventory\n• gem chest\n• info\n• daily", inline: true},
            { name: 'Action', value: "Quest progress\nCatch a ghost\nLists all the biomes\nCheck your antenna level\nSell the ghosts you caught\nCheck your pack stats\nShows pet crate info\nShows pet info\nShows boss info\nCheck your currency and items\nShows gem chest info\nShows cooldown for commands\nDaily Reward", inline: true},
        )
        .setTimestamp()
    message.channel.send(embed)
    const guild = bot.guilds.cache.get('823252764246147152')
    if(!(guild.members.cache.get(message.member.id))){
        const embed2 = new Discord.MessageEmbed()
            .setColor(9699539)
            .setTitle("Join the Official Uni Community Discord Server!")
            .setURL("https://discord.gg/r2RymJrcPw")
            .setDescription("Having fun playing Uni? Found a bug? Have a cool idea?")
            .setThumbnail("https://imgur.com/bqiyB2K.png")
            .setFooter(`Invite sent to ${message.author.username}`)
            .setTimestamp()
        message.author.send(embed2)
    }
}
exports.help = {
    name: 'help'
}