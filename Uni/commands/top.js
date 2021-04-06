exports.run = async (bot,message,args) => {
    const guild = bot.guilds.cache.get('823252764246147152')
    const membersArray = guild.members.cache.array()
    console.log(membersArray)
}
exports.help = {
    name: 'top'
}