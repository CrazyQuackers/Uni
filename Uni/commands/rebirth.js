const Discord = require('discord.js')

exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const q = require('../../data/q.json')
    const db = require('../../data/db.json')
    let sm = q[message.guild.id].users[message.member.id]
    let ez = db[message.guild.id].users[message.member.id]
    if(sm.quest!=11){let questsLeft = 11 - sm.quest
        message.react("❌")
        message.channel.send(`<@${message.member.id}> You can't ♻️ **Rebirth** at the moment.\nYou need to complete **\`${questsLeft}\`** more 📖 **Quest** before you can ♻️ **Rebirth**.`)}
    else
    {
        if(((args[0]=="token")&&(args[1]=="convertion"))||((args[0]=="pet")&&(args[1]=="evolution"))||((args[0]=="quest")&&(args[1]=="jump"))||((args[0]=="superstar")&&(args[1]=="hoverboard"))||((args[0]=="frostslayer")&&(args[1]=="hoverboard"))||((args[0]=="chance")&&(args[1]=="hoverboard")))
        {
            let bonusGemReward = ez.gems/2400000
            bonusGemReward = Math.floor(bonusGemReward)
            if(bonusGemReward>10){bonusGemReward=10}
            //rebirth sure
        }
        else
        {
            message.react("📬")
            const rebirthInfo = new Discord.MessageEmbed()
            .setColor(4915330)
            .setTitle("\u200B\n♻️ Rebirth ♻️")
            .setDescription("\`You've reached the end of this world... the Final Void, but your adventure is not over yet... The choices you make here will determine the next version of your journey. Choose wisely as you may have access to certain content or advantages based on your choice. These options will always be available for you, but it may be a while before we meet again. When you choose, you will be reborn into the world of Uni, but you may notice that some things are not quite the same. This is my game after all... Do you wish to rebirth and start again?\`")
            .setThumbnail("https://static.wikia.nocookie.net/ghost-simulator-roblox/images/0/0a/Rebirth_NPC.png/revision/latest?cb=20210313001925")
            .addFields(
                {name: "🪵 **__Perks:__**", value: "\u200B"},
                {name: "\u200B", value: "<:ectotoken:825122939812315219> Token Convertion"},
                {name: "\u200B", value: "Improves your conversion rate for Ecto-Tokens by 10%. Can be selected mutiple times", inline: true},
                {name: "\u200B", value: "🐶 Pet Evolution"},
                {name: "\u200B", value: "Increases all current and future pet's attack number by 1. Can be selected up to 3 times", inline: true},
                {name: "\u200B", value: "🔖 Quest Jump"},
                {name: "\u200B", value: "Skips an entire questline when used. Can be selected multiple times", inline: true},
                {name: "\u200B", value: "<:superstar:876231821254348810> Superstar Hoverboard"},
                {name: "\u200B", value: "Adds the selected Hoverboard to your inventory. Can only be selected once", inline: true},
                {name: "\u200B", value: "<:frostslayer:876231821216600084> Frostslayer Hoverboard"},
                {name: "\u200B", value: "Adds the selected Hoverboard to your inventory. Can only be selected once", inline: true},
                {name: "\u200B", value: "<:chance:876231820914622464> Chance Hoverboard"},
                {name: "\u200B", value: "Adds the selected Hoverboard to your inventory. Can only be selected once", inline: true},
                {name: "🪵 **__Information:__**", value: "\u200B"},
                {name: "What resets when you rebirth", value: "📖 Quests\n🪛 Items\n<:pack:825122944204013588> Packs\n<:gems:825122942413045791> Gems\n<:ectotoken:825122939812315219> Ecto-Tokens\n📡 Antenna Level", inline: true},
                {name: "What stays when you rebirth", value: "🐶 Pets\n<:hoverboard:842713851585495070> Hoverboards\n🍀 Quest Unlocks\n🪵 Perks", inline: true},
                {name: "<:gems:825122942413045791> **__Bonus Gem Reward:__**", value: "Ghosts will drop more Gems when caught.\nThe Gem bonus is given based on how many Gems you have when you rebirth."},
                {name: "♻️ **__How To Rebirth__**", value: "%rebirth <perk name>"},
                {name: "\u200B", value: "\u200B"},
            )
            .setFooter("Rebirth Info Tab",message.author.avatarURL())
            .setTimestamp()
            message.author.send({ embed: rebirthInfo });
        }
    }
}
exports.help = {
    name: 'rebirth'
}