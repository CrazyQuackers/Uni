const Discord = require('discord.js')

exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const db = require('../../data/db.json')
    const q = require('../../data/q.json')
    let sm = q[message.guild.id].users[message.member.id]
    let ez = db[message.guild.id].users[message.member.id]
    let arr = message.content.split(' ')
    let num = 0
    if(arr[0]=="%gc"){num=1}else{num=2}
    if(arr.length>num){
        if(arr[num]=="small"){
            if(ez.constructionOpen)
            {
                if(Math.floor(new Date().getTime() - ez.lastConstruction) / (1000 * 60 * 60) < 1)
                {
                    let m = 60 - (Math.round((new Date().getTime() - ez.lastConstruction)/(1000 * 60)))
                    if(m<10){m = `0${m}`}
                    let str = `\`${m}\``
                    message.channel.send(`<@${message.member.id}> You have to wait 🕐 ${str} **more minutes** before you can open this gem chest again!`)
                }
                else
                {
                    let num = (Math.floor(Math.random()*501))+500;
                    ez.gems = ez.gems + num;
                    ez.lastConstruction = new Date().getTime();
                    message.channel.send(`<@${message.member.id}>\nYou found **${coinToStr(num)} <:gems:825122942413045791> gems** in a <:small:825134200482431007> **small gem chest!**`)
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){let pog = 1}})
                    checkQuests(sm,fs,q,1)
                }
            }
            else
            {
                message.channel.send(`<@${message.member.id}> You have to unlock the 🏗️ **Construction Site** 🏗️ before you can open the <:small:825134200482431007> **small gem chest!**`)
            }
        }
        else{
            if(arr[num]=="medium"){
                if(ez.pyramidsOpen)
                {
                    if(Math.floor(new Date().getTime() - ez.lastPyramids) / (1000 * 60 * 60 * 6) < 1)
                    {
                        let h = (Math.floor((Math.abs(new Date().getTime() - ez.lastPyramids))/(1000 * 60 * 60)))
                        let m = ((Math.floor((Math.abs(new Date().getTime() - ez.lastPyramids))/(1000 * 60)))%60)
                        if(m!=0){
                            h = 5 - h
                            m = 60 - m
                        }
                        else{h = 6 - h}
                        if(h<10){h = `0${h}`}
                        if(m<10){m = `0${m}`}
                        let str = `\`${h}h${m}m\``
                        message.channel.send(`<@${message.member.id}> You have to wait 🕐 ${str} before you can open this gem chest again!`)
                    }
                    else
                    {
                        let num = (Math.floor(Math.random()*2001))+1000;
                        ez.gems = ez.gems + num;
                        ez.lastPyramids = new Date().getTime();
                        message.channel.send(`<@${message.member.id}>\nYou found **${coinToStr(num)} <:gems:825122942413045791> gems** in a <:medium:825134203821228032> **medium gem chest!**`)
                        fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){let pog = 1}})
                        checkQuests(sm,fs,q,2)
                    }
                }
                else
                {
                    message.channel.send(`<@${message.member.id}> You have to unlock the <:pyramid:825122937236357164> **Pyramids** <:pyramid:825122937236357164> before you can open the <:medium:825134203821228032> **medium gem chest!**`)
                }
            }
            else{
                if(arr[num]=="large"){
                    if(ez.iceOpen)
                    {
                        if(Math.floor(new Date().getTime() - ez.lastIce) / (1000 * 60 * 60 * 12) < 1)
                        {
                            let h = (Math.floor((Math.abs(new Date().getTime() - ez.lastIce))/(1000 * 60 * 60)))
                            let m = ((Math.floor((Math.abs(new Date().getTime() - ez.lastIce))/(1000 * 60)))%60)
                            if(m!=0){
                                h = 11 - h
                                m = 60 - m
                            }
                            else{h = 12 - h}
                            if(h<10){h = `0${h}`}
                            if(m<10){m = `0${m}`}
                            let str = `\`${h}h${m}m\``
                            message.channel.send(`<@${message.member.id}> You have to wait 🕐 ${str} before you can open this gem chest again!`)
                        }
                        else
                        {
                            let num = (Math.floor(Math.random()*5001))+5000;
                            ez.gems = ez.gems + num;
                            ez.lastIce = new Date().getTime();
                            message.channel.send(`<@${message.member.id}>\nYou found **${coinToStr(num)} <:gems:825122942413045791> gems** in a <:large:825134202127253514> **large gem chest!**`)
                            fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){let pog = 1}})
                            checkQuests(sm,fs,q,3)
                        }
                    }
                    else{
                        message.channel.send(`<@${message.member.id}> You have to unlock the 🧊 **Ice Cave** 🧊 before you can open the <:large:825134202127253514> **large gem chest!**`)
                    }
                }
                else{
                    gcDetails(message,ez)
                }
            }
        }
    }
    else{
        gcDetails(message,ez)
    }
}
exports.help = {
    name: 'gc'
}

function gcDetails(message,ez)
{
    let str1 = "🔒"
    let str2 = "🔒"
    let str3 = "🔒"
    if(ez.constructionOpen){str1="🔓"}
    if(ez.pyramidsOpen){str2="🔓"}
    if(ez.iceOpen){str3="🔓"}
    const embed = new Discord.MessageEmbed()
        .setColor(16711935)
        .setTitle("Gem Chests")
        .setDescription("<:small:825134200482431007> Small Gem Chest\n<:medium:825134203821228032> Medium Gem Chest\n<:large:825134202127253514> Large Gem Chest")
        .setThumbnail("https://imgur.com/rFimjAJ.png")
        .addFields(
            {name: "Requirement", value: `${str1} Construction Site\n${str2} Pyramids\n${str3} Ice Cave`, inline: true},
            {name: "Cooldown", value: "⏲️ 1 hour\n⏲️ 6 hours\n⏲️ 12 hours", inline: true},
            {name: "Amount", value: "<:gems:825122942413045791> 500-1,000\n<:gems:825122942413045791> 1,000-3,000\n<:gems:825122942413045791> 5,000-10,000", inline: true},
        )
        .setFooter("Open a Gem Chest with %gem chest <size>")
        .setTimestamp()
    message.channel.send({embed});
}

function checkQuests(sm,fs,q,num)
{
    if((sm.quest==7)&&(sm.task==9)&&(sm.qStarted)){if(num==1){sm.obj1++}if(num==2){sm.obj2++}if(num==3){sm.obj3++}}
    fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})
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