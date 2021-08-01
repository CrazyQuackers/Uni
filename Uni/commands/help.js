const Discord = require(`discord.js`)

exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const q = require('../../data/q.json')
    let sm = q[message.guild.id].users[message.member.id]
    const embed = new Discord.MessageEmbed()
        .setColor(65280)
        .setTitle("Uni Commands")
        .setDescription("secondary commands appear in some of these commands")
        .setThumbnail('https://imgur.com/ASUc77V.png')
        .addFields(
            { name: 'Command', value: "• quest\n• catch\n• biomes\n• unlock\n• sell\n• antenna\n• pack\n• inventory\n• convert\n• pet crate\n• pet\n• hoverboard\n• boss\n• gem chest\n• game\n• daily\n• top\n• info\n• profile\n• vote", inline: true},
            { name: 'Description', value: "Quest progress\nCatch a ghost\nLists all the biomes\nUnlocks bonus biomes\nSell the ghosts you caught\nCheck your antenna level\nCheck your pack stats\nCheck your currency and items\nConvert your ecto-tokens to gems\nShows pet crate info\nShows pet info\nShows hoverboard info\nShows boss info\nShows gem chest info\nAbout Uni\nDaily reward\nUni top server commands\nShows cooldown for commands\nShows your Uni profile\nVote for Uni", inline: true},
        )
        .setTimestamp()
    message.channel.send({embed});
    const guild = bot.guilds.cache.get('823252764246147152')
    if(!(guild.members.cache.get(message.member.id))){
        if(sm.lastDM%3==0){
            message.react("📬")
            const embed2 = {
                color: 9699539,
                title: "Join the Official Uni Community Server!",
                url: "https://discord.gg/r2RymJrcPw",
                author: {
                    name: message.author.username,
                    icon_url: message.author.avatarURL(),
                },
                description: "**• Chat with other Uni members!**\n\n**• Ask any questions about Uni!**\n\n**• Play Uni in it's Official Community Discord Server!**",
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
        sm.lastDM++;
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log()}})
    }
}
exports.help = {
    name: 'help'
}