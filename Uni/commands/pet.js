exports.run = async (bot,message,args) => {
    message.channel.send(`<@${message.member.id}>\n\n**Pets Info** 🐶\n\nThere are 5 different pet rarities:\n\n• Common - **60%** chance of unboxing - **1** ⚔️ attack\n• Uncommon - **27%** chance of unboxing - **3** ⚔️ attack\n• Rare - **10%** chance of unboxing - **5** ⚔️ attack\n• Legendary - **2.6%** chance of unboxing - **7** ⚔️ attack\n• Godly - **0.4%** chance of unboxing - **10** ⚔️ attack\n\n**Pet Advantages** 🐵\n\nYour pets fight the 💀 bosses you encounter in the game.\nEach pet can fight **1-3** different types of bosses, depending from which pet crate they were unboxed and their rarity.\nThe more pets you have, the more <:ectotoken:825122939812315219> ecto-tokens you will recieve when you **%sell** your 👻 ghosts.\n\nHaving duplicate pets **does not** effect the game in any way.\nCheck all your pets with the command **%pets**.`)
}
exports.help = {
    name: 'pet'
}