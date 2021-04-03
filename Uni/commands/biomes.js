exports.run = async (bot,message,args) => {
    message.channel.send("Here is a list of **Uni's 🌐 Biomes.**\n\n🏕️  Forest\n🏙️  City\n💡  Junkyard\n<:manhole:825122943133941821>  Sewers\n🏗️  Construction Site\n🏜️  Wild West\n☄️  Area 51\n⛏️  Mine\n<:pyramid:825122937236357164>  Pyramids\n🏖️  Beach\n💦  Underwater\n🌋  Volcano\n🧊  Ice Cave\n\nUse **%<biome>** to see more information about each 🌐 biome.");
}
exports.help = {
    name: 'biomes'
}