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
            sm.gemDrop += (bonusGemReward/100)
            let selectedPerk = ""
            switch(args[0])
            {
                case "token":
                    sm.tokenConversion += 0.1
                    message.react("<:ectotoken:825122939812315219>")
                    selectedPerk = "<:ectotoken:825122939812315219>  Token Convertion\n\u200B"
                    break;
                case "pet":
                    if(sm.petEvolve==3)
                    {
                        message.react("❌")
                        message.channel.send(`<@${message.member.id}> You have already picked the 🐶 **Pet Evolution 🪵 Perk** 3 times.\nTry picking a different 🪵 perk.`)
                        return;
                    }
                    sm.petEvolve++
                    message.react("🐶")
                    selectedPerk = "🐶  Pet Evolution\n\u200B"
                    break;
                case "quest":
                    break;
                case "superstar":
                    break;
                case "frostslayer":
                    break;
                case "chance":
            }
            resetData(ez,sm)
            const rebirthMessage = new Discord.MessageEmbed()
            .setColor(4915330)
            .setAuthor(message.author.username,message.author.avatarURL())
            .setTitle("♻️  You have Rebirthed!  ♻️")
            .setDescription("\u200B\n\`As you feel yourself fading away, you hear a small voice: 'I can't wait to play with you again'...\`\n\u200B")
            .setThumbnail("https://static.wikia.nocookie.net/ghost-simulator-roblox/images/0/0a/Rebirth_NPC.png/revision/latest?cb=20210313001925")
            .addFields(
                {name: "🪵  Perk", value: selectedPerk},
                {name: "<:gems:825122942413045791>  Bonus Gem Reward", value: `Increased ghost gem drops by ${bonusGemReward}%\n\u200B`},
            )
            .setTimestamp()
            message.channel.send({ embed: rebirthMessage });
            fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){let pog = 1}})
            fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})
        }
        else
        {
            message.react("📬")
            const rebirthInfo = new Discord.MessageEmbed()
            .setColor(4915330)
            .setTitle("♻️  __Rebirth__  ♻️")
            .setDescription("\u200B\n\`You've reached the end of this world... the Final Void, but your adventure is not over yet... The choices you make here will determine the next version of your journey. Choose wisely as you may have access to certain content or advantages based on your choice. These options will always be available for you, but it may be a while before we meet again. When you choose, you will be reborn into the world of Uni, but you may notice that some things are not quite the same. This is my game after all... Do you wish to rebirth and start again?\`\n\u200B")
            .setThumbnail("https://static.wikia.nocookie.net/ghost-simulator-roblox/images/0/0a/Rebirth_NPC.png/revision/latest?cb=20210313001925")
            .addFields(
                {name: "🪵  __Perks:__", value: "\u200B"},
                {name: "<:ectotoken:825122939812315219>  Token Convertion", value: "Improves your conversion rate for Ecto-Tokens by 10%.\nCan be selected mutiple times."},
                {name: "🐶  Pet Evolution", value: "Increases all current and future pet's attack number by 1.\nCan be selected up to 3 times."},
                {name: "🔖  Quest Jump", value: "Skips an entire questline when used.\nCan be selected multiple times."},
                {name: "<:superstar:876231821254348810>  Superstar Hoverboard", value: "Adds the selected Hoverboard to your inventory.\nCan only be selected once."},
                {name: "<:frostslayer:876231821216600084>  Frostslayer Hoverboard", value: "Adds the selected Hoverboard to your inventory.\nCan only be selected once."},
                {name: "<:chance:876231820914622464>  Chance Hoverboard", value: "Adds the selected Hoverboard to your inventory.\nCan only be selected once.\n\u200B"},
                {name: "ℹ️  __Information:__", value: "\u200B"},
                {name: "What resets when you rebirth", value: "📖  Quests\n🪛  Items\n<:pack:825122944204013588>  Packs\n<:gems:825122942413045791>  Gems\n<:ectotoken:825122939812315219>  Ecto-Tokens\n📡  Antenna Level\n\u200B", inline: true},
                {name: "What stays when you rebirth", value: "🐶  Pets\n<:hoverboard:842713851585495070>  Hoverboards\n🍀  Quest Unlocks\n🪵  Perks", inline: true},
                {name: "<:gems:825122942413045791>  __Bonus Gem Reward:__", value: "Ghosts will drop more Gems when caught.\nThe Gem bonus is given based on how many Gems you have when you rebirth.\n\u200B"},
                {name: "♻️  __How To Rebirth:__", value: "%rebirth <perk name>\n\u200B"},
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

function resetData(ez,sm)
{
    ez.ectoTokens = 0
    ez.gems = 0
    ez.parts = 0
    ez.acorns = 0
    ez.newspapers = 0
    ez.tires = 0
    ez.socks = 0
    ez.hammers = 0
    ez.badges = 0
    ez.meteorites = 0
    ez.gold = 0
    ez.artifacts = 0
    ez.doubloons = 0
    ez.pearls = 0
    ez.diamonds = 0
    ez.tusks = 0
    ez.antenna = 1
    ez.pack = "Starter Pack"
    ez.capacity = 50
    ez.storage = 0
    ez.sellTime = 10
    ez.constructionOpen = false
    ez.pyramidsOpen = false
    ez.iceOpen = false
    ez.lastBoss = 0
    sm.lastSell = 0
    sm.sellWait = 10
    sm.quest = 1
    sm.task = 1
    sm.obj1 = 0
    sm.obj2 = 0
    sm.obj3 = 0
    sm.obj4 = 0
    sm.obj5 = 0
    sm.obj6 = 0
    sm.qStarted = false
    sm.converter = 0
}