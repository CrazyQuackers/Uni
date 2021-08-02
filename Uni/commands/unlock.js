exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const db = require('../../data/db.json')
    let ez = db[message.guild.id].users[message.member.id]
    if(!ez.constructionOpen){mainUnlockFunction("The 🏗️ Construction Site!",ez,message,"https://imgur.com/7n2Q3yp.png",fs,db,"https://imgur.com/U7rqkGV.png","https://imgur.com/jdFgVvO.png","https://imgur.com/EwTDV9f.png","https://imgur.com/hwsNzI6.png","https://imgur.com/IkrHJBk.png","https://imgur.com/PSyHjRx.png","https://imgur.com/hTtYVXn.png")}else{if(!ez.pyramidsOpen){mainUnlockFunction("The <:pyramid:825122937236357164> Pyramids!",ez,message,"https://i.imgur.com/QDKvubk.png",fs,db,"https://imgur.com/JndFjCc.png","https://imgur.com/V1daYDS.png","https://imgur.com/MCBWUsY.png","https://imgur.com/Wu4Ar21.png","https://imgur.com/4sf9J3c.png","https://imgur.com/sWvtcxh.png","https://imgur.com/l0rKdbj.png")}else{if(!ez.iceOpen){mainUnlockFunction("The 🧊 Ice Cave!",ez,message,"https://i.imgur.com/oDmEVJ7.png",fs,db,"https://i.imgur.com/ZPOcmya.png","https://i.imgur.com/X43U9jS.png","https://i.imgur.com/geU1NFl.png","https://i.imgur.com/8rJQz8h.png","https://i.imgur.com/6Difbkk.png","https://i.imgur.com/QuiCnFB.png","https://i.imgur.com/jOp1HVm.png")}}}
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
        const embed = {
            color: 16737095,
            description: `You've unlocked **${str}**`,
            author: {
                name: message.author.username,
                icon_url: message.author.avatarURL(),
            },
            thumbnail: {
                url: "https://imgur.com/ASUc77V.png",
            },
            image: {
                url: img,
            },
            timestamp: new Date(),
        };
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
        const embed2 = {
            color: 16737095,
            description: `You don't have enough items to unlock **${str}**`,
            author: {
                name: message.author.username,
                icon_url: message.author.avatarURL(),
            },
            thumbnail: {
                url: "https://imgur.com/ASUc77V.png",
            },
            image: {
                url: u,
            },
            timestamp: new Date(),
        };
        message.channel.send({ embed: embed2 });}
}