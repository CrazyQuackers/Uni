const Discord = require(`discord.js`)

exports.run = async (bot,message,args) => {
    const embed = new Discord.MessageEmbed()
        .setColor(8421504)
        .setTitle("Uni is currently under maintenance...")
        .setURL("https://discord.gg/r2RymJrcPw")
        .setDescription("To learn more, join the Official Uni Community Discord Server")
        .setThumbnail("https://imgur.com/bqiyB2K.png")
        .setTimestamp()
    message.channel.send({embed});
}
exports.help = {
    name: 'maintenance'
}