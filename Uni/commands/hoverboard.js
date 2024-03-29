const Discord = require(`discord.js`)

exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const q = require('../../data/q.json')
    let sm = q[message.guild.id].users[message.member.id]
    const db = require('../../data/db.json')
    let ez = db[message.guild.id].users[message.member.id]
    if(args.length>0)
    {
        switch(args[0])
        {
            case "details":
                let u = ""
                switch(sm.equipped){
                    case "basic":
                        u = "https://imgur.com/2uLSAQ4.png"
                        break;
                    case "sky":
                        u = "https://imgur.com/85XE61R.png"
                        break;
                    case "feather":
                        u = "https://imgur.com/kyuzhW6.png"
                        break;
                    case "oblivion":
                        u = "https://imgur.com/Nsp9ixl.png"
                        break;
                    case "varus":
                        u = "https://imgur.com/6Y4PubN.png"
                        break;
                    case "chroma":
                        u = "https://imgur.com/PC3qyZb.png"
                        break;
                    case "champion":
                        u = "https://imgur.com/XGyBAAm.png"
                        break;
                    case "b-l-o-x":
                        u = "https://static.wikia.nocookie.net/ghost-simulator-roblox/images/4/40/B-L-O-X.png/revision/latest/scale-to-width-down/300?cb=20200318225349"
                        break;
                    case "atom":
                        u = "https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/b1/Atom_Surfer.png/revision/latest/scale-to-width-down/300?cb=20210208112002"
                        break;
                    default:
                        u = "https://imgur.com/RV975Lr.png"}
                const embed = new Discord.MessageEmbed()
                    .setColor(15787660)
                    .setTitle(`Hoverboard Details`)
                    .setThumbnail(u)
                    .addFields(
                        {name: "Hoverboard", value: `<:skysurfer:842713851522056204> Sky Surfer\n<:feathershock:842713851044823071> Feather Shock\n<:oblivion:842713851450753024> Oblivion\n<:varus:842713851481030666> VARUS\n<:chromafloat:842713850897236029> Chroma Float`, inline: true},
                        {name: "Cost", value: `<:gems:825122942413045791> 15,000\n<:gems:825122942413045791> 75,000\n<:gems:825122942413045791> 150,000\n<:gems:825122942413045791> 250,000\n<:gems:825122942413045791> 400,000`, inline: true},
                        {name: "Rarity", value: `💠 Uncommon\n💠 Uncommon\n💠 Rare\n💠 Rare\n💠 Legendary`, inline: true},
                    )
                    .setTimestamp()
                message.channel.send({embed});
                break;
            case "list":
                let other = message.mentions.members.first();
                let tag = message.member.id
                if(other){
                    tag = other.id
                    sm = q[message.guild.id].users[tag]}
                let hbArr = [sm.hbUnlocked,sm.sky,sm.feather,sm.oblivion,sm.varus,sm.chroma,sm.champion,sm.blox,sm.surfer]
                let nameArr = ["<:hoverboard:842713851585495070>  **Basic**","<:skysurfer:842713851522056204>  **Sky Surfer**","<:feathershock:842713851044823071>  **Feather Shock**","<:oblivion:842713851450753024>  **Oblivion**","<:varus:842713851481030666>  **VARUS**","<:chromafloat:842713850897236029>  **Chroma Float**","<:champion:844610527669911602> **Champion**","<:BLOX:871140025016930324> **B-L-O-X**","<:atomsurfer:875150132277039114> **Atom Surfer**"]
                let equipArr = ["basic","sky","feather","oblivion","varus","chroma","champion","b-l-o-x","atom"]
                let rarityArr = ["Common","Uncommon","Uncommon","Rare","Rare","Legendary","Godly","Godly","Mythical"]
                let str = `<@${tag}>**'s Hoverboards** \`${countHoverboards(hbArr)}/12\`\n\n`
                let i = 0
                let hb = ""
                let helper = str
                for(i ; i<hbArr.length ; i++){if(hbArr[i]){hb = nameArr[i]
                        if(equipArr[i]==sm.equipped){hb = hb + "  ⭐"}hb = hb + ` - 💠 _${rarityArr[i]}_`
                        str = str + `${hb}\n`}}
                if(str==helper){str = str + "*no hoverboards found*"}
                message.channel.send(str)
                break;
            case "buy":
                if(sm.hbUnlocked)
                {
                    if(args.length>1)
                    {
                        switch(args[1])
                        {
                            case "basic":
                                message.react("❌")
                                message.channel.send(`<@${message.member.id}> You already own this <:hoverboard:842713851585495070> Hoverboard!`)
                                break;
                            case "sky":
                                if((args.length>2)&&(args[2]=="surfer"))
                                {
                                    if(sm.sky)
                                    {
                                        message.react("❌")
                                        message.channel.send(`<@${message.member.id}> You already own this <:hoverboard:842713851585495070> Hoverboard!`)
                                    }
                                    else
                                    {
                                        if(ez.gems<15000)
                                        {
                                            message.react("❌")
                                            message.channel.send(`<@${message.member.id}> You don't have enough <:gems:825122942413045791> Gems to purchase this <:hoverboard:842713851585495070> Hoverboard!\nYou need **\`${coinToStr(15000-ez.gems)}\`** more <:gems:825122942413045791> Gems!`)
                                        }
                                        else
                                        {
                                            message.react("<:skysurfer:842713851522056204>")
                                            sm.sky = true
                                            ez.gems = ez.gems - 15000
                                            fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){let pog = 1}})
                                            fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})
                                            message.channel.send(`<@${message.member.id}> **Sky Surfer** successfully purchased! <:skysurfer:842713851522056204>`)
                                        }
                                    }
                                }
                                else
                                {
                                    notAHoverboardName(message)
                                }
                                break;
                            case "feather":
                                if((args.length>2)&&(args[2]=="shock"))
                                {
                                    if(sm.feather)
                                    {
                                        message.react("❌")
                                        message.channel.send(`<@${message.member.id}> You already own this <:hoverboard:842713851585495070> Hoverboard!`)
                                    }
                                    else
                                    {
                                        if(ez.gems<75000)
                                        {
                                            message.react("❌")
                                            message.channel.send(`<@${message.member.id}> You don't have enough <:gems:825122942413045791> Gems to purchase this <:hoverboard:842713851585495070> Hoverboard!\nYou need **\`${coinToStr(75000-ez.gems)}\`** more <:gems:825122942413045791> Gems!`)
                                        }
                                        else
                                        {
                                            message.react("<:feathershock:842713851044823071>")
                                            sm.feather = true
                                            ez.gems = ez.gems - 75000
                                            fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){let pog = 1}})
                                            fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})
                                            message.channel.send(`<@${message.member.id}> **Feather Shock** successfully purchased! <:feathershock:842713851044823071>`)
                                        }
                                    }
                                }
                                else
                                {
                                    notAHoverboardName(message)
                                }
                                break;
                            case "oblivion":
                                if(sm.oblivion)
                                {
                                    message.react("❌")
                                    message.channel.send(`<@${message.member.id}> You already own this <:hoverboard:842713851585495070> Hoverboard!`)
                                }
                                else
                                {
                                    if(ez.gems<150000)
                                    {
                                        message.react("❌")
                                        message.channel.send(`<@${message.member.id}> You don't have enough <:gems:825122942413045791> Gems to purchase this <:hoverboard:842713851585495070> Hoverboard!\nYou need **\`${coinToStr(150000-ez.gems)}\`** more <:gems:825122942413045791> Gems!`)
                                    }
                                    else
                                    {
                                        message.react("<:oblivion:842713851450753024>")
                                        sm.oblivion = true
                                        ez.gems = ez.gems - 150000
                                        fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){let pog = 1}})
                                        fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})
                                        message.channel.send(`<@${message.member.id}> **Oblivian** successfully purchased! <:oblivion:842713851450753024>`)
                                    }
                                }
                                break;
                            case "varus":
                                if(sm.varus)
                                {
                                    message.react("❌")
                                    message.channel.send(`<@${message.member.id}> You already own this <:hoverboard:842713851585495070> Hoverboard!`)
                                }
                                else
                                {
                                    if(ez.gems<250000)
                                    {
                                        message.react("❌")
                                        message.channel.send(`<@${message.member.id}> You don't have enough <:gems:825122942413045791> Gems to purchase this <:hoverboard:842713851585495070> Hoverboard!\nYou need **\`${coinToStr(250000-ez.gems)}\`** more <:gems:825122942413045791> Gems!`)
                                    }
                                    else
                                    {
                                        message.react("<:varus:842713851481030666>")
                                        sm.varus = true
                                        ez.gems = ez.gems - 250000
                                        fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){let pog = 1}})
                                        fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})
                                        message.channel.send(`<@${message.member.id}> **VARUS** successfully purchased! <:varus:842713851481030666>`)
                                    }
                                }
                                break;
                            case "chroma":
                                if((args.length>2)&&(args[2]=="float"))
                                {
                                    if(sm.chroma)
                                    {
                                        message.react("❌")
                                        message.channel.send(`<@${message.member.id}> You already own this <:hoverboard:842713851585495070> Hoverboard!`)
                                    }
                                    else
                                    {
                                        if(ez.gems<400000)
                                        {
                                            message.react("❌")
                                            message.channel.send(`<@${message.member.id}> You don't have enough <:gems:825122942413045791> Gems to purchase this <:hoverboard:842713851585495070> Hoverboard!\nYou need **\`${coinToStr(400000-ez.gems)}\`** more <:gems:825122942413045791> Gems!`)
                                        }
                                        else
                                        {
                                            message.react("<:chromafloat:842713850897236029>")
                                            sm.chroma = true
                                            ez.gems = ez.gems - 400000
                                            fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){let pog = 1}})
                                            fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})
                                            message.channel.send(`<@${message.member.id}> **Chroma Float** successfully purchased! <:chromafloat:842713850897236029>`)
                                        }
                                    }
                                }
                                else
                                {
                                    notAHoverboardName(message)
                                }
                                break;
                            case "champion":
                                message.channel.send(`<@${message.member.id}> You cannot purchase The <:champion:844610527669911602> Champion Hoverboard.`)
                                break;
                            case "b-l-o-x":
                                message.channel.send(`<@${message.member.id}> You cannot purchase The <:BLOX:871140025016930324> B-L-O-X Hoverboard.`)
                                break;
                            case "atom":
                                if((args.length>2)&&(args[2]=="surfer"))
                                {
                                    message.channel.send(`<@${message.member.id}> You cannot purchase The <:atomsurfer:875150132277039114> Atom Surfer Hoverboard.`)
                                }
                                else
                                {
                                    notAHoverboardName(message)
                                }
                                break;
                            default:
                                notAHoverboardName(message)
                                break;
                        }
                    }
                    else
                    {
                        message.react("❌")
                        message.channel.send(`<@${message.member.id}> You need to specify a <:hoverboard:842713851585495070> Hoverboard's name in order to purchase it.\nHere is the correct syntax for this command: **%hoverboard buy <hoverboard name>**\nIf you forgot the name, use this command: **%hoverboard details**`)
                    }
                }
                else
                {
                    message.react("❌")
                    message.channel.send(`<@${message.member.id}> You have yet to unlock <:hoverboard:842713851585495070> Hoverboards!\nTo do so, complete Ghost Hunter Adam's questline! (**%quest**)`)
                }
                break;
            case "equip":
                if(sm.hbUnlocked)
                {
                    if(args.length>1)
                    {
                        switch(args[1])
                        {
                            case "basic":
                                equipHoverboard(message,args[1],fs,q,"Basic","<:hoverboard:842713851585495070>",sm)
                                break;
                            case "sky":
                                if((args.length>2)&&(args[2]=="surfer"))
                                {
                                    if(sm.sky)
                                    {
                                        equipHoverboard(message,args[1],fs,q,"Sky Surfer","<:skysurfer:842713851522056204>",sm)
                                    }
                                    else
                                    {
                                        dontOwnThisHoverboard(message)
                                    }
                                }
                                else
                                {
                                    notAHoverboardName(message)
                                }
                                break;
                            case "feather":
                                if((args.length>2)&&(args[2]=="shock"))
                                {
                                    if(sm.feather)
                                    {
                                        equipHoverboard(message,args[1],fs,q,"Feather Shock","<:feathershock:842713851044823071>",sm)
                                    }
                                    else
                                    {
                                        dontOwnThisHoverboard(message)
                                    }
                                }
                                else
                                {
                                    notAHoverboardName(message)
                                }
                                break;
                            case "oblivion":
                                if(sm.oblivion)
                                {
                                    equipHoverboard(message,args[1],fs,q,"Oblivion","<:oblivion:842713851450753024>",sm)
                                }
                                else
                                {
                                    dontOwnThisHoverboard(message)
                                }
                                break;
                            case "varus":
                                if(sm.feather)
                                {
                                    equipHoverboard(message,args[1],fs,q,"VARUS","<:varus:842713851481030666>",sm)
                                }
                                else
                                {
                                    dontOwnThisHoverboard(message)
                                }
                                break;
                            case "chroma":
                                if((args.length>2)&&(args[2]=="float"))
                                {
                                    if(sm.feather)
                                    {
                                        equipHoverboard(message,args[1],fs,q,"Chroma Float","<:chromafloat:842713850897236029>",sm)
                                    }
                                    else
                                    {
                                        dontOwnThisHoverboard(message)
                                    }
                                }
                                else
                                {
                                    notAHoverboardName(message)
                                }
                                break;
                            case "champion":
                                if(sm.champion)
                                {
                                    equipHoverboard(message,args[1],fs,q,"Champion","<:champion:844610527669911602>",sm)
                                }
                                else
                                {
                                    dontOwnThisHoverboard(message)
                                }
                                break;
                            case "b-l-o-x":
                                if(sm.blox)
                                {
                                    equipHoverboard(message,args[1],fs,q,"B-L-O-X","<:BLOX:871140025016930324>",sm)
                                }
                                else
                                {
                                    dontOwnThisHoverboard(message)
                                }
                                break;
                            case "atom":
                                if((args.length>2)&&(args[2]=="surfer"))
                                {
                                    if(sm.surfer)
                                    {
                                        equipHoverboard(message,args[1],fs,q,"Atom Surfer","<:atomsurfer:875150132277039114>",sm)
                                    }
                                    else
                                    {
                                        dontOwnThisHoverboard(message)
                                    }
                                }
                                else
                                {
                                    notAHoverboardName(message)
                                }
                                break;
                            default:
                                notAHoverboardName(message)
                        }
                    }
                    else
                    {
                        message.react("❌")
                        message.channel.send(`<@${message.member.id}> You need to specify a <:hoverboard:842713851585495070> Hoverboard's name in order to equip it.\nHere is the correct syntax for this command: **%hoverboard equip <hoverboard name>**\nIf you forgot the name, use this command: **%hoverboard details**`)
                    }
                }
                else
                {
                    message.react("❌")
                    message.channel.send(`<@${message.member.id}> You have yet to unlock <:hoverboard:842713851585495070> Hoverboards!\nTo do so, complete Ghost Hunter Adam's questline! (**%quest**)`)
                }
                break;
        }
    }
    else
    {
        message.channel.send(`<@${message.member.id}>\n\n<:hoverboard:842713851585495070> **hoverboard commands** <:hoverboard:842713851585495070>\n\n**•** %hoverboard details - Displays all the <:hoverboard:842713851585495070> hoverboards and their <:gems:825122942413045791> cost.\n**•** %hoverboard list - Displays all of your Hoverboards with a ⭐ next to your equipped Hoverboard.\n**•** %hoverboard buy <hoverboard name> - Buy a Hoverboard. (Cannot buy the same hoverboard twice)\n**•** %hoverboard equip <hoverboard name> - Equip a Hoverboard. (Your equipped hoverboard appears in your profile)\n\n<:chromafloat:842713850897236029> **hoverboard advantages** <:chromafloat:842713850897236029>\n\nHoverboards do **NOTHING**. It is just another item you can buy and show off in your profile.`)
    }
}
exports.help = {
    name: 'hoverboard'
}

function notAHoverboardName(message)
{
    message.react("❌")
    message.channel.send(`<@${message.member.id}> hoverboard not found.\nIf you forgot the name, use this command: **%hoverboard details**`)
}

function dontOwnThisHoverboard(message)
{
    message.react("❌")
    message.channel.send(`<@${message.member.id}> You can't equip a <:hoverboard:842713851585495070> hoverboard you don't own!`)
}

function equipHoverboard(message,str,fs,q,hb,emoji,sm)
{
    message.react("✅")
    sm.equipped = str
    fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})
    message.channel.send(`<@${message.member.id}> **${hb}** successfully equipped! ${emoji} ⭐`)
}

function countHoverboards(arr)
{
    let c = 0
    for(let i=0 ; i<arr.length ; i++){if(arr[i]){c++}}return c
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