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
                const embed = new Discord.MessageEmbed()
                    .setColor(15787660)
                    .setTitle(`Hoverboard Details`)
                    .setThumbnail('https://imgur.com/QCLuNbe.png')
                    .addFields(
                        {name: "Hoverboard", value: `     <:skysurfer:842713851522056204>\n     <:feathershock:842713851044823071>\n     <:oblivion:842713851450753024>\n     <:varus:842713851481030666>\n     <:chromafloat:842713850897236029>`, inline: true},
                        {name: "Name", value: "Sky Surfer\nFeather Shock\nOblivion\nVARUS\nChroma Float", inline: true},
                        {name: "Cost", value: `<:gems:825122942413045791> 15,000\n<:gems:825122942413045791> 75,000\n<:gems:825122942413045791> 150,000\n<:gems:825122942413045791> 250,000\n<:gems:825122942413045791> 400,000`, inline: true},
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
                let hbArr = [sm.hbUnlocked,sm.sky,sm.feather,sm.oblivion,sm.varus,sm.chroma]
                let nameArr = ["<:hoverboard:842713851585495070>  **Basic**","<:skysurfer:842713851522056204>  **Sky Surfer**","<:feathershock:842713851044823071>  **Feather Shock**","<:oblivion:842713851450753024>  **Oblivion**","<:varus:842713851481030666>  **VARUS**","<:chromafloat:842713850897236029>  **Chroma Float**"]
                let equipArr = ["basic","sky","feather","oblivion","varus","chroma"]
                let str = `<@${tag}>**'s Hoverboards**\n\n`
                let i = 0
                let hb = ""
                let helper = str
                for(i ; i<hbArr.length ; i++){if(hbArr[i]){hb = nameArr[i]
                        if(equipArr[i]==sm.equipped){hb = hb + "  ⭐"}
                        str = str + `${hb}\n`}}
                if(str==helper){str = str + "*no hoverboards found*"}
                message.channel.send(str)
                break;
            case "buy":
                if(sm.hbUnlocked){
                    if(args.length>1){
                        switch(args[1]){
                            case "basic":
                                message.react("❌")
                                message.channel.send(`<@${message.member.id}> You already own this <:hoverboard:842713851585495070> Hoverboard!`)
                                break;
                            case "sky":
                                if((args.length>2)&&(args[2]=="surfer")){if(sm.sky){message.react("❌")
                                        message.channel.send(`<@${message.member.id}> You already own this <:hoverboard:842713851585495070> Hoverboard!`)}else{if(ez.gems<15000){message.react("❌")
                                            message.channel.send(`<@${message.member.id}> You don't have enough <:gems:825122942413045791> Gems to purchase this <:hoverboard:842713851585495070> Hoverboard!`)}else{message.react("✅")
                                            sm.sky = true
                                            ez.gems = ez.gems - 15000
                                            fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                                            fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})
                                            message.channel.send(`<@${message.member.id}> **Sky Surfer** successfully purchased! <:skysurfer:842713851522056204>`)}}}
                                else{notAHoverboardName(message)}
                                break;
                            case "feather":
                                if((args.length>2)&&(args[2]=="shock")){if(sm.feather){message.react("❌")
                                        message.channel.send(`<@${message.member.id}> You already own this <:hoverboard:842713851585495070> Hoverboard!`)}else{if(ez.gems<75000){message.react("❌")
                                            message.channel.send(`<@${message.member.id}> You don't have enough <:gems:825122942413045791> Gems to purchase this <:hoverboard:842713851585495070> Hoverboard!`)}else{message.react("✅")
                                            sm.feather = true
                                            ez.gems = ez.gems - 75000
                                            fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                                            fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})
                                            message.channel.send(`<@${message.member.id}> **Feather Shock** successfully purchased! <:feathershock:842713851044823071>`)}}}
                                else{notAHoverboardName(message)}
                                break;
                            case "oblivion":
                                if(sm.oblivion){message.react("❌")
                                    message.channel.send(`<@${message.member.id}> You already own this <:hoverboard:842713851585495070> Hoverboard!`)}else{if(ez.gems<150000){message.react("❌")
                                        message.channel.send(`<@${message.member.id}> You don't have enough <:gems:825122942413045791> Gems to purchase this <:hoverboard:842713851585495070> Hoverboard!`)}else{message.react("✅")
                                        sm.oblivion = true
                                        ez.gems = ez.gems - 150000
                                        fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                                        fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})
                                        message.channel.send(`<@${message.member.id}> **Oblivian** successfully purchased! <:oblivion:842713851450753024>`)}}
                                break;
                            case "varus":
                                if(sm.varus){message.react("❌")
                                    message.channel.send(`<@${message.member.id}> You already own this <:hoverboard:842713851585495070> Hoverboard!`)}else{if(ez.gems<250000){message.react("❌")
                                        message.channel.send(`<@${message.member.id}> You don't have enough <:gems:825122942413045791> Gems to purchase this <:hoverboard:842713851585495070> Hoverboard!`)}else{message.react("✅")
                                        sm.varus = true
                                        ez.gems = ez.gems - 250000
                                        fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                                        fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})
                                        message.channel.send(`<@${message.member.id}> **VARUS** successfully purchased! <:varus:842713851481030666>`)}}
                                break;
                            case "chroma":
                                if((args.length>2)&&(args[2]=="float")){if(sm.chroma){message.react("❌")
                                        message.channel.send(`<@${message.member.id}> You already own this <:hoverboard:842713851585495070> Hoverboard!`)}else{if(ez.gems<400000){message.react("❌")
                                            message.channel.send(`<@${message.member.id}> You don't have enough <:gems:825122942413045791> Gems to purchase this <:hoverboard:842713851585495070> Hoverboard!`)}else{message.react("✅")
                                            sm.chroma = true
                                            ez.gems = ez.gems - 400000
                                            fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                                            fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})
                                            message.channel.send(`<@${message.member.id}> **Chroma Float** successfully purchased! <:chromafloat:842713850897236029>`)}}}
                                else{notAHoverboardName(message)}
                                break;
                            default:
                                notAHoverboardName(message)}
                    }else{message.react("❌")
                        message.channel.send(`<@${message.member.id}> You need to specify a <:hoverboard:842713851585495070> Hoverboard's name in order to purchase it.\nHere is the correct syntax for this command: **%hoverboard buy <hoverboard name>**\nIf you forgot the name, use this command: **%hoverboard details**`)}
                }else{message.react("❌")
                    message.channel.send(`<@${message.member.id}> You have yet to unlock <:hoverboard:842713851585495070> Hoverboards!\nTo do so, complete Ghost Hunter Adam's questline! (**%quest**)`)}
                break;
            case "equip":
                if(sm.hbUnlocked){
                    if(args.length>1){
                        switch(args[1]){
                            case "basic":
                                equipHoverboard(message,args[1],fs,q,"Basic","<:hoverboard:842713851585495070>")
                                break;
                            case "sky":
                                if((args.length>2)&&(args[2]=="surfer")){
                                    if(sm.sky){equipHoverboard(message,args[1],fs,q,"Sky Surfer","<:skysurfer:842713851522056204>")}else{dontOwnThisHoverboard(message)}
                                }else{notAHoverboardName(message)}
                                break;
                            case "feather":
                                if((args.length>2)&&(args[2]=="shock")){
                                    if(sm.feather){equipHoverboard(message,args[1],fs,q,"Feather Shock","<:feathershock:842713851044823071>")}else{dontOwnThisHoverboard(message)}
                                }else{notAHoverboardName(message)}
                                break;
                            case "oblivion":
                                if(sm.oblivion){equipHoverboard(message,args[1],fs,q,"Oblivion","<:oblivion:842713851450753024>")}else{dontOwnThisHoverboard(message)}
                                break;
                            case "varus":
                                if(sm.feather){equipHoverboard(message,args[1],fs,q,"VARUS","<:varus:842713851481030666>")}else{dontOwnThisHoverboard(message)}
                                break;
                            case "chroma":
                                if((args.length>2)&&(args[2]=="float")){
                                    if(sm.feather){equipHoverboard(message,args[1],fs,q,"Chroma Float","<:chromafloat:842713850897236029>")}else{dontOwnThisHoverboard(message)}
                                }else{notAHoverboardName(message)}
                                break;
                            default:
                                notAHoverboardName(message)
                        }
                    }else{message.react("❌")
                        message.channel.send(`<@${message.member.id}> You need to specify a <:hoverboard:842713851585495070> Hoverboard's name in order to equip it.\nHere is the correct syntax for this command: **%hoverboard equip <hoverboard name>**\nIf you forgot the name, use this command: **%hoverboard details**`)}
                }else{message.react("❌")
                    message.channel.send(`<@${message.member.id}> You have yet to unlock <:hoverboard:842713851585495070> Hoverboards!\nTo do so, complete Ghost Hunter Adam's questline! (**%quest**)`)}
                break;
        }
    }
    else
    {
        message.channel.send(`<@${message.member.id}>\n\n**Hoverboard Commands** <:hoverboard:842713851585495070>\n\n**•** %hoverboard details - Displays all the Hoverboard 👕 Skins and their <:gems:825122942413045791> Gem cost.\n**•** %hoverboard list - Displays all of your Hoverboards with a ⭐ next to your equipped Hoverboard.\n**•** %hoverboard buy <hoverboard name> - Buy a Hoverboard. (Cannot buy the same Hoverboard twice)\n**•** %hoverboard equip <hoverboard name> - Equip a Hoverboard. (Your equipped Hoverboard appears in your profile)\n\n**Hoverboard Advantages** <:chromafloat:842713850897236029>\n\nHoverboard do **NOTHING**. It is just another item you can buy and show off in your profile.`)
    }
}
exports.help = {
    name: 'hoverboard'
}

function notAHoverboardName(message)
{
    message.react("❌")
    message.channel.send(`<@${message.member.id}> Hoverboard not found.\nIf you forgot the name, use this command: **%hoverboard details**`)
}

function dontOwnThisHoverboard(message)
{
    message.react("❌")
    message.channel.send(`<@${message.member.id}> You can't equip a <:hoverboard:842713851585495070> Hoverboard you don't own!`)
}

function equipHoverboard(message,str,fs,q,hb,emoji)
{
    message.react("✅")
    sm.equipped = str
    fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})
    message.channel.send(`<@${message.member.id}> **${hb}** successfully equipped! ${emoji} ⭐`)
}