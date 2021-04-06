const Discord = require(`discord.js`)

exports.run = async (bot,message,args) => {
    const db = require('./data/db.json')
    let other = message.mentions.members.first();
    let ez = db[message.guild.id].users[message.member.id]
    let tl = message.member.user.tag
    if(other) {
        ez = db[message.guild.id].users[other.id]
        tl = other.user.tag
    }
    let strCoins = coinToStr(ez.ectoTokens)
    let strGems = coinToStr(ez.gems)
    let tlArray = tl.split('#');
    let tlNew = tlArray[0];
    const embed = new Discord.MessageEmbed()
        .setColor(65535)
        .setTitle(`${tlNew}'s Inventory`)
        .setThumbnail("https://imgur.com/8ECyipu.png")
        .addFields(
            {name: "Item", value: "<:ectotoken:825122939812315219>  Ecto-Tokens\n<:gems:825122942413045791>  Gems\n🔩  Antenna Parts\n<:acorn:825122942660509707>  Acorns\n📰  Newspapers\n<:tire:825122944128385054>  Tires\n🧦  Socks\n🔨  Hammers\n<:sherrifbadge:825122941637230613>  Sherrif Badges\n<:meteorite:825122930047320115>  Meteorites\n<:goldbar:825122939006746625>  Gold Bars\n<:artifact:825122914210414592>  Artifacts\n<:doubloon:825122941746151434>  Doubloons\n<:pearl:825122938457686057>  Pearls\n💎  Diamonds\n<:tusk:825122936927027289>  Ancient Tusks", inline: true},
            {name: "Amount", value: `${strCoins}\n${strGems}\n${ez.parts}\n${ez.acorns}\n${ez.newspapers}\n${ez.tires}\n${ez.socks}\n${ez.hammers}\n${ez.badges}\n${ez.meteorites}\n${ez.gold}\n${ez.artifacts}\n${ez.doubloons}\n${ez.pearls}\n${ez.diamonds}\n${ez.tusks}`, inline: true},
        )
        .setTimestamp()
    message.channel.send({embed});
}
exports.help = {
    name: 'inventory'
}

function coinToStr(n)
{
    let strC = n.toString()
    let digits = strC.length
    let i = 0;
    let newStrC = "";
    let num = 0;
    for(i ; i<digits ; i++)
    {
        newStrC = newStrC + strC[i];
        num = digits-i-1;
        if((num!=0)&&(num%3==0))
        {
            newStrC = newStrC + ",";
        }
    }
    return newStrC
}