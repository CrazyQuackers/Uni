const Discord = require(`discord.js`)

exports.run = async (bot,message,args) => {
    const db = require('../../data/db.json')
    const q = require('../../data/q.json')
    let other = message.mentions.members.first();
    let ez = db[message.guild.id].users[message.member.id]
    let sm = q[message.guild.id].users[message.member.id]
    let tl = message.member.user.tag
    let pp = message.member
    if(other) {pp = other
        ez = db[message.guild.id].users[other.id]
        sm = q[message.guild.id].users[other.id]
        tl = other.user.tag
    }
    let strCoins = decreaseNumberLength(ez.ectoTokens)
    let strGems = decreaseNumberLength(ez.gems)
    let tlArray = tl.split('#');
    let tlNew = tlArray[0];
    let titleText = `Inventory`
    if(sm.badge){titleText = titleText + " <:ghosthunterbadge:874405583959228477>"}
    const embed = new Discord.MessageEmbed()
        .setColor(65535)
        .setAuthor(`${tlNew}'s`,pp.user.avatarURL())
        .setTitle(titleText)
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

function decreaseNumberLength(n)
{
    if(n>=1000)
    {
        if(n>=1000000)
        {
            if(n>=1000000000)
            {
                if(n>=1000000000000)
                {
                    if(n>=1000000000000000)
                    {
                        n/=1000000000000000;
                        return(`${accountForDecimal(n)}Q`);
                    }
                    n/=1000000000000;
                    return(`${accountForDecimal(n)}T`);
                }
                n/=1000000000;
                return(`${accountForDecimal(n)}B`);
            }
            n/=1000000;
            return(`${accountForDecimal(n)}M`);
        }
        n/=1000;
        return(`${accountForDecimal(n)}K`);
    }
    return(`${n}`);
}

function accountForDecimal(n)
{
    let str = n.toString()
    let arr = str.split('.')
    arr[0] = coinToStr(arr[0])
    if(arr.length>1){arr[1] = removeAfter2(arr[1])
        return(`${arr[0]}.${arr[1]}`)}
    return arr[0];
}

function removeAfter2(str)
{
    if(str[1]){return(`${str[0]}${str[1]}`)}return(`${str[0]}`)
}