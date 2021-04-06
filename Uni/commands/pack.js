exports.run = async (bot,message,args) => {
    const db = require('../data/db.json')
    const fs = require("fs")
    let arr = message.content.split(' ');
    let str = ""
    if((arr.length>1)&&(arr[1]=="up")){
        let ez2 = db[message.guild.id].users[message.member.id]
        let tag2 = message.member.id
        switch(ez2.pack){
            case "Starter Pack":
                if(ez2.ectoTokens>=50){
                    message.react("✅")
                    ez2.ectoTokens = ez2.ectoTokens-50;
                    ez2.pack = "Sub Pack";
                    ez2.capacity = "150";
                    ez2.sellTime = 20;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                    message.channel.send(`<@${tag2}> Check your new pack with **%pack**!`)
                }
                else{str = coinToStr(50-ez2.ectoTokens)
                    message.channel.send(`<@${tag2}> You do not have enough <:ectotoken:825122939812315219> ecto-tokens to upgrade your <:pack:825122944204013588> pack!\nYou need **${str}** more <:ectotoken:825122939812315219> ecto-tokens!`)}
                break;
            case "Sub Pack":
                if(ez2.ectoTokens>=200){
                    message.react("✅")
                    ez2.ectoTokens = ez2.ectoTokens-200;
                    ez2.pack = "R.I.P Pack";
                    ez2.capacity = "500";
                    ez2.sellTime = 30;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                    message.channel.send(`<@${tag2}> Check your new pack with **%pack**!`)
                }
                else{str = coinToStr(200-ez2.ectoTokens)
                    message.channel.send(`<@${tag2}> You do not have enough <:ectotoken:825122939812315219> ecto-tokens to upgrade your <:pack:825122944204013588> pack!\nYou need **${str}** more <:ectotoken:825122939812315219> ecto-tokens!`)}
                break;
            case "R.I.P Pack":
                if(ez2.ectoTokens>=1250){
                    message.react("✅")
                    ez2.ectoTokens = ez2.ectoTokens-1250;
                    ez2.pack = "8-Bit Pack";
                    ez2.capacity = "1,500";
                    ez2.sellTime = 40;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                    message.channel.send(`<@${tag2}> Check your new pack with **%pack**!`)
                }
                else{str = coinToStr(1250-ez2.ectoTokens)
                    message.channel.send(`<@${tag2}> You do not have enough <:ectotoken:825122939812315219> ecto-tokens to upgrade your <:pack:825122944204013588> pack!\nYou need **${str}** more <:ectotoken:825122939812315219> ecto-tokens!`)}
                break;
            case "8-Bit Pack":
                if(ez2.ectoTokens>=7750){
                    message.react("✅")
                    ez2.ectoTokens = ez2.ectoTokens-7750;
                    ez2.pack = "Hex Pack";
                    ez2.capacity = "4,000";
                    ez2.sellTime = 50;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                    message.channel.send(`<@${tag2}> Check your new pack with **%pack**!`)
                }
                else{str = coinToStr(7750-ez2.ectoTokens)
                    message.channel.send(`<@${tag2}> You do not have enough <:ectotoken:825122939812315219> ecto-tokens to upgrade your <:pack:825122944204013588> pack!\nYou need **${str}** more <:ectotoken:825122939812315219> ecto-tokens!`)}
                break;
            case "Hex Pack":
                if(ez2.ectoTokens>=47500){
                    message.react("✅")
                    ez2.ectoTokens = ez2.ectoTokens-47500;
                    ez2.pack = "Energized Pack";
                    ez2.capacity = "8,500";
                    ez2.sellTime = 60;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                    message.channel.send(`<@${tag2}> Check your new pack with **%pack**!`)
                }
                else{str = coinToStr(47500-ez2.ectoTokens)
                    message.channel.send(`<@${tag2}> You do not have enough <:ectotoken:825122939812315219> ecto-tokens to upgrade your <:pack:825122944204013588> pack!\nYou need **${str}** more <:ectotoken:825122939812315219> ecto-tokens!`)}
                break;
            case "Energized Pack":
                if(ez2.ectoTokens>=170000){
                    message.react("✅")
                    ez2.ectoTokens = ez2.ectoTokens-170000;
                    ez2.pack = "Charged Pack";
                    ez2.capacity = "19,000";
                    ez2.sellTime = 70;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                    message.channel.send(`<@${tag2}> Check your new pack with **%pack**!`)
                }
                else{str = coinToStr(170000-ez2.ectoTokens)
                    message.channel.send(`<@${tag2}> You do not have enough <:ectotoken:825122939812315219> ecto-tokens to upgrade your <:pack:825122944204013588> pack!\nYou need **${str}** more <:ectotoken:825122939812315219> ecto-tokens!`)}
                break;
            case "Charged Pack":
                if(ez2.ectoTokens>=475000){
                    message.react("✅")
                    ez2.ectoTokens = ez2.ectoTokens-475000;
                    ez2.pack = "Pack V.2.0";
                    ez2.capacity = "35,000";
                    ez2.sellTime = 80;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                    message.channel.send(`<@${tag2}> Check your new pack with **%pack**!`)
                }
                else{str = coinToStr(475000-ez2.ectoTokens)
                    message.channel.send(`<@${tag2}> You do not have enough <:ectotoken:825122939812315219> ecto-tokens to upgrade your <:pack:825122944204013588> pack!\nYou need **${str}** more <:ectotoken:825122939812315219> ecto-tokens!`)}
                break;
            case "Pack V.2.0":
                if(ez2.ectoTokens>=1400000){
                    message.react("✅")
                    ez2.ectoTokens = ez2.ectoTokens-1400000;
                    ez2.pack = "Turbine Pack";
                    ez2.capacity = "90,000";
                    ez2.sellTime = 90;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                    message.channel.send(`<@${tag2}> Check your new pack with **%pack**!`)
                }
                else{str = coinToStr(1400000-ez2.ectoTokens)
                    message.channel.send(`<@${tag2}> You do not have enough <:ectotoken:825122939812315219> ecto-tokens to upgrade your <:pack:825122944204013588> pack!\nYou need **${str}** more <:ectotoken:825122939812315219> ecto-tokens!`)}
                break;
            case "Turbine Pack":
                if(ez2.ectoTokens>=4500000){
                    message.react("✅")
                    ez2.ectoTokens = ez2.ectoTokens-4500000;
                    ez2.pack = "JETPAC";
                    ez2.capacity = "200,000";
                    ez2.sellTime = 100;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                    message.channel.send(`<@${tag2}> Check your new pack with **%pack**!`)
                }
                else{str = coinToStr(4500000-ez2.ectoTokens)
                    message.channel.send(`<@${tag2}> You do not have enough <:ectotoken:825122939812315219> ecto-tokens to upgrade your <:pack:825122944204013588> pack!\nYou need **${str}** more <:ectotoken:825122939812315219> ecto-tokens!`)}
                break;
            case "JETPAC":
                if(ez2.ectoTokens>=15000000){
                    message.react("✅")
                    ez2.ectoTokens = ez2.ectoTokens-15000000;
                    ez2.pack = "Scuba Pack";
                    ez2.capacity = "400,000";
                    ez2.sellTime = 110;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                    message.channel.send(`<@${tag2}> Check your new pack with **%pack**!`)
                }
                else{str = coinToStr(15000000-ez2.ectoTokens)
                    message.channel.send(`<@${tag2}> You do not have enough <:ectotoken:825122939812315219> ecto-tokens to upgrade your <:pack:825122944204013588> pack!\nYou need **${str}** more <:ectotoken:825122939812315219> ecto-tokens!`)}
                break;
            case "Scuba Pack":
                if(ez2.ectoTokens>=42500000){
                    message.react("✅")
                    ez2.ectoTokens = ez2.ectoTokens-42500000;
                    ez2.pack = "Void Pack";
                    ez2.capacity = "1,000,000";
                    ez2.sellTime = 120;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                    message.channel.send(`<@${tag2}> Check your new pack with **%pack**!`)
                }
                else{str = coinToStr(42500000-ez2.ectoTokens)
                    message.channel.send(`<@${tag2}> You do not have enough <:ectotoken:825122939812315219> ecto-tokens to upgrade your <:pack:825122944204013588> pack!\nYou need **${str}** more <:ectotoken:825122939812315219> ecto-tokens!`)}
                break;
            case "Void Pack":
                if(ez2.ectoTokens>=190000000){
                    message.react("✅")
                    ez2.ectoTokens = ez2.ectoTokens-190000000;
                    ez2.pack = "Chroma Pack";
                    ez2.capacity = "2,500,000";
                    ez2.sellTime = 130;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                    message.channel.send(`<@${tag2}> Check your new pack with **%pack**!`)
                }
                else{str = coinToStr(190000000-ez2.ectoTokens)
                    message.channel.send(`<@${tag2}> You do not have enough <:ectotoken:825122939812315219> ecto-tokens to upgrade your <:pack:825122944204013588> pack!\nYou need **${str}** more <:ectotoken:825122939812315219> ecto-tokens!`)}
                break;
            case "Chroma Pack":
                if(ez2.ectoTokens>=750000000){
                    message.react("✅")
                    ez2.ectoTokens = ez2.ectoTokens-750000000;
                    ez2.pack = "Distorted Pack";
                    ez2.capacity = "3,500,000";
                    ez2.sellTime = 140;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                    message.channel.send(`<@${tag2}> Check your new pack with **%pack**!`)
                }
                else{str = coinToStr(750000000-ez2.ectoTokens)
                    message.channel.send(`<@${tag2}> You do not have enough <:ectotoken:825122939812315219> ecto-tokens to upgrade your <:pack:825122944204013588> pack!\nYou need **${str}** more <:ectotoken:825122939812315219> ecto-tokens!`)}
                break;
            case "Distorted Pack":
                message.channel.send(`<@${tag2}> **Your <:pack:825122944204013588> pack is fully upgraded!**`)
                break;
        }
    }
    else{
        let storageStr = ""
        let other = message.mentions.members.first();
        let ez = db[message.guild.id].users[message.member.id]
        let tag = message.member.id
        if(other){
            ez = db[message.guild.id].users[other.id]
            tag = other.id
            storageStr = coinToStr(ez.storage)
            let c2 = 0;
            let i2 = ez.sellTime;
            for(i2 ; i2>59 ; i2-60){c2++}
            message.channel.send(`<@${tag}>**'s  <:pack:825122944204013588>  Pack:**\n\n❔ Name = ${ez.pack}\n🗂️ Capacity = ${storageStr}/${ez.capacity}\n⏰ Sell Time = \`${c2}h${i2}m\``)
        }
        else{
            storageStr = coinToStr(ez.storage)
            let c = 0;
            let i = ez.sellTime;
            for(i ; i>59 ; i-=60){c++}
            if(ez.pack=="Distorted Pack")
            {
                message.channel.send(`<@${tag}> **Your  <:pack:825122944204013588>  Pack:**\n\n❔ Name = **${ez.pack}**\n🗂️ Capacity = ${storageStr}/${ez.capacity}\n⏰ Sell Time = \`${c}h${i}m\``)
            }
            else
            {
                let ectoToUpgrade = whichPack(ez.sellTime)
                message.channel.send(`<@${tag}> **Your  <:pack:825122944204013588>  Pack:**\n\n❔ Name = **${ez.pack}**\n🗂️ Capacity = ${storageStr}/${ez.capacity}\n⏰ Sell Time = \`${c}h${i}m\`\n\nUpgrade your  <:pack:825122944204013588>  pack with **%pack up** [\`${ez.ectoTokens}/${ectoToUpgrade}\`<:ectotoken:825122939812315219>]`)
            }
        }
    }
}
exports.help = {
    name: 'pack'
}

function whichPack(time)
{
    switch(time)
    {
        case 10:
            return 50
        case 20:
            return 200
        case 30:
            return "1,250"
        case 40:
            return "7,750"
        case 50:
            return "47,500"
        case 60:
            return "170,000"
        case 70:
            return "475,000"
        case 80:
            return "1,400,000"
        case 90:
            return "4,500,000"
        case 100:
            return "15,000,000"
        case 110:
            return "42,500,000"
        case 120:
            return "190,000,000"
        case 130:
            return "750,000,000"
    }
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