const Discord = require(`discord.js`)

exports.run = async (bot,message,args) => {
    const q = require('../../data/q.json')
    let sm = q[message.guild.id].users[message.member.id]
    message.react("📬");
    const embed = new Discord.MessageEmbed()
        .setColor(65280)
        .setTitle("Uni Commands")
        .setDescription("secondary commands appear in some of these commands")
        .setThumbnail('https://imgur.com/ASUc77V.png')
        .addFields(
            { name: 'Command', value: "• quest\n• catch\n• biomes\n• antenna\n• sell\n• pack\n• pet crate\n• pet\n• boss\n• inventory\n• gem chest\n• info\n• daily", inline: true},
            { name: 'Description', value: "Quest progress\nCatch a ghost\nLists all the biomes\nCheck your antenna level\nSell the ghosts you caught\nCheck your pack stats\nShows pet crate info\nShows pet info\nShows boss info\nCheck your currency and items\nShows gem chest info\nShows cooldown for commands\nDaily Reward", inline: true},
        )
        .setTimestamp()
    message.channel.send({embed});
    const guild = bot.guilds.cache.get('823252764246147152')
    if(!(guild.members.cache.get("435429602383364127"))){
        if(!sm.noDM){
            const embed2 = {
                color: 9699539,
                title: "Join the Official Uni Community Discord Server!",
                url: "https://discord.gg/r2RymJrcPw",
                author: {
                    name: message.author.username,
                    icon_url: message.author.avatarURL(),
                },
                description: "Play Uni in it's Official Server! Ask any questions about Uni! Chat with other Uni members!\n\`If you want to disable Uni's DM's, use the command - %dm disable, same for enable - %dm enable\`",
                fields: [
                    {
                        name: "• Play Uni in it's Official Server!",
                        inline: false,
                    },
                    {
                        name: "• Ask any questions about Uni!",
                        inline: false,
                    },
                    {
                        name: "• Chat with other Uni members!",
                        value: "\`if you want to disable Uni's DM's, use the command - %dm disable\nif you want to enable Uni's DM's, use the command - %dm enable\`",
                        inline: false,
                    },
                ],
                thumbnail: {
                    url: "https://imgur.com/bqiyB2K.png",
                },
                footer: {
                    text: `Invite sent to ${message.author.username}`,
                    icon_url: 'https://imgur.com/ASUc77V.png',
                },
                timestamp: new Date(),
            };
            message.author.send({ embed: embed2 });
        }
    }
}
exports.help = {
    name: 'help'
}