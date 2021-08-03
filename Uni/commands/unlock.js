const Discord = require('discord.js')

exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const db = require('../../data/db.json')
    let ez = db[message.guild.id].users[message.member.id]
    if(!ez.constructionOpen){mainUnlockFunction("The 🏗️ Construction Site!",ez,message,"https://i.postimg.cc/vZVg06V7/unlock-cs-8.png",fs,db,"https://i.postimg.cc/8zDtGDm6/unlock-cs-1.png","https://i.postimg.cc/bJT2Qc2K/unlock-cs-2.png","https://i.postimg.cc/Vvk0gGq5/unlock-cs-3.png","https://i.postimg.cc/NFC9z6DD/unlock-cs-4.png","https://i.postimg.cc/ZK0yyQYM/unlock-cs-5.png","https://i.postimg.cc/T2tD1xxb/unlock-cs-6.png","https://i.postimg.cc/vHjx7vcH/unlock-cs-7.png")}else{if(!ez.pyramidsOpen){mainUnlockFunction("The <:pyramid:825122937236357164> Pyramids!",ez,message,"https://i.postimg.cc/CxGMZC82/unlock-p-8.png",fs,db,"https://i.postimg.cc/KvKRYgJX/unlock-p-1.png","https://i.postimg.cc/dtzDZtxh/unlock-p-2.png","https://i.postimg.cc/g0K07ykh/unlock-p-3.png","https://i.postimg.cc/j2BqfZvp/unlock-p-4.png","https://i.postimg.cc/2jtSgSm0/unlock-p-5.png","https://i.postimg.cc/L6Z8SF82/unlock-p-6.png","https://i.postimg.cc/vZFHH249/unlock-p-7.png")}else{if(!ez.iceOpen){mainUnlockFunction("The 🧊 Ice Cave!",ez,message,"https://i.postimg.cc/Y9nCrpFq/unlock-ic-8.png",fs,db,"https://i.postimg.cc/cJGK24Rp/unlock-ic-1.png","https://i.postimg.cc/jj6Wb0vL/unlock-ic-2.png","https://i.postimg.cc/66b8whVL/unlock-ic-3.png","https://i.postimg.cc/kgKGQ30f/unlock-ic-4.png","https://i.postimg.cc/FKvRGCmm/unlock-ic-5.png","https://i.postimg.cc/RFV0x3ND/unlock-ic-6.png","https://i.postimg.cc/2y183Pdd/unlock-ic-7.png")}else{message.channel.send(`<@${message.member.id}> You've already unlocked all the 🌐 **bonus biomes!**`)}}}
}
exports.help = {
    name: 'unlock'
}

function mainUnlockFunction(str,ez,message,img,fs,db,b1,b2,b3,b4,b5,b6,b7)
{
    let num = 0
    let u = ""
    switch(str){
        case "The 🏗️ Construction Site!":
            if(ez.newspapers>=10){num+=100}if(ez.tires>=10){num+=10}if(ez.socks>=10){num+=1}
            break;
        case "The <:pyramid:825122937236357164> Pyramids!":
            if(ez.badges>=25){num+=100}if(ez.meteorites>=25){num+=10}if(ez.gold>=25){num+=1}
            break;
        case "The 🧊 Ice Cave!":
            if(ez.doubloons>=50){num+=100}if(ez.pearls>=50){num+=10}if(ez.diamonds>=50){num+=1}}
    if(num==111){
        message.react("✅")
        const embed = new Discord.MessageEmbed()
        .setColor(16737095)
        .setAuthor(message.author.username,message.author.avatarURL())
        .setDescription(`You've unlocked **${str}**`)
        .setThumbnail("https://imgur.com/ASUc77V.png")
        .setImage(img)
        .setTimestamp()
        message.channel.send({embed});
        switch(str){
            case "The 🏗️ Construction Site!":
                ez.constructionOpen = true
                ez.newspapers = ez.newspapers - 10
                ez.tires = ez.tires - 10
                ez.socks = ez.socks - 10
                break;
            case "The <:pyramid:825122937236357164> Pyramids!":
                ez.pyramidsOpen = true
                ez.badges = ez.badges - 25
                ez.meteorites = ez.meteorites - 25
                ez.gold = ez.gold - 25
                break;
            case "The 🧊 Ice Cave!":
                ez.iceOpen = true
                ez.doubloons = ez.doubloons - 50
                ez.pearls = ez.pearls - 50
                ez.diamonds = ez.diamonds - 50}
        fs.writeFile("./data/db.json", JSON.stringify(db,null,4), function(error){if(error){let pog = 1}})}
    else{
        message.react("❌")
        switch(num){
            case 0:
                u = b1
                break;
            case 100:
                u = b2
                break;
            case 10:
                u = b3
                break;
            case 1:
                u = b4
                break;
            case 101:
                u = b5
                break;
            case 11:
                u = b6
                break;
            case 110:
                u = b7}
        const embed2 = new Discord.MessageEmbed()
        .setColor(16737095)
        .setAuthor(message.author.username,message.author.avatarURL())
        .setDescription(`You don't have enough items to unlock **${str}**`)
        .setThumbnail("https://imgur.com/ASUc77V.png")
        .setImage(u)
        .setTimestamp()
        message.channel.send({ embed: embed2 });}
}