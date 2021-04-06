exports.run = async (bot,message,args) => {
    const db = require('../data/db.json')
    const fs = require("fs")
    let arr = message.content.split(' ');
    if((arr.length>1)&&(arr[1]=="up")){
        let ez2 = db[message.guild.id].users[message.member.id]
        let tag2 = message.member.id
        switch(ez2.antenna)
        {
            case 1:
                let p1 = 3-ez2.parts
                let p2 = 3-ez2.acorns
                if(p1<0){p1=0}
                if(p2<0){p2=0}
                if((ez2.parts>=3)&&(ez2.acorns>=3)){
                    message.react("✅")
                    ez2.parts = ez2.parts-3;
                    ez2.acorns = ez2.acorns-3;
                    ez2.antenna = ez2.antenna + 1;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                }
                else{message.channel.send(`<@${tag2}> You do not have enough 🪛 items to upgrade your 📡 antenna level!\nYou need **${p1}** more 🔩 antenna parts and **${p2}** more <:acorn:825122942660509707> acorns!`)}
                break;
            case 2:
                let p3 = 10-ez2.parts
                let p4 = 4-ez2.newspapers
                if(p3<0){p3=0}
                if(p4<0){p4=0}
                if((ez2.parts>=10)&&(ez2.newspapers>=5)){
                    message.react("✅")
                    ez2.parts = ez2.parts-10;
                    ez2.newspapers = ez2.newspapers-5;
                    ez2.antenna = ez2.antenna + 1;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                }
                else{message.channel.send(`<@${tag2}> You do not have enough 🪛 items to upgrade your 📡 antenna level!\nYou need **${p3}** more 🔩 antenna parts and **${p4}** more 📰 newspapers!`)}
                break;
            case 3:
                let p5 = 35-ez2.parts
                let p6 = 10-ez2.tires
                if(p5<0){p5=0}
                if(p6<0){p6=0}
                if((ez2.parts>=35)&&(ez2.tires>=10)){
                    message.react("✅")
                    ez2.parts = ez2.parts-35;
                    ez2.tires = ez2.tires-10;
                    ez2.antenna = ez2.antenna + 1;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                }
                else{message.channel.send(`<@${tag2}> You do not have enough 🪛 items to upgrade your 📡 antenna level!\nYou need **${p5}** more 🔩 antenna parts and **${p6}** more <:tire:825122944128385054> tires!`)}
                break;
            case 4:
                let p7 = 75-ez2.parts
                let p8 = 10-ez2.newspapers
                let p9 = 10-ez2.tires
                let p10 = 25-ez2.socks
                if(p7<0){p7=0}
                if(p8<0){p8=0}
                if(p9<0){p9=0}
                if(p10<0){p10=0}
                if((ez2.parts>=75)&&(ez2.newspapers>=10)&&(ez2.tires>=10)&&(ez2.socks>=25)){
                    message.react("✅")
                    ez2.parts = ez2.parts-75;
                    ez2.newspapers = ez2.newspapers-10;
                    ez2.tires = ez2.tires-10;
                    ez2.socks = ez2.socks-25;
                    ez2.antenna = ez2.antenna + 1;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                }
                else{message.channel.send(`<@${tag2}> You do not have enough 🪛 items to upgrade your 📡 antenna level!\nYou need **${p7}** more 🔩 antenna parts, **${p8}** more 📰 newspapers, **${p9}** more <:tire:825122944128385054> tires and **${p10}** more 🧦 socks!`)}
                break;
            case 5:
                let p11 = 150-ez2.parts
                let p12 = 30-ez2.badges
                if(p11<0){p11=0}
                if(p12<0){p12=0}
                if((ez2.parts>=150)&&(ez2.badges>=30)){
                    message.react("✅")
                    ez2.parts = ez2.parts-150;
                    ez2.badges = ez2.badges-30;
                    ez2.antenna = ez2.antenna + 1;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                }
                else{message.channel.send(`<@${tag2}> You do not have enough 🪛 items to upgrade your 📡 antenna level!\nYou need **${p11}** more 🔩 antenna parts and **${p12}** more <:sherrifbadge:825122941637230613> sherrif badges!`)}
                break;
            case 6:
                let p13 = 200-ez2.parts
                let p14 = 50-ez2.meteorites
                if(p13<0){p13=0}
                if(p14<0){p14=0}
                if((ez2.parts>=200)&&(ez2.meteorites>=50)){
                    message.react("✅")
                    ez2.parts = ez2.parts-200;
                    ez2.meteorites = ez2.meteorites-50;
                    ez2.antenna = ez2.antenna + 1;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                }
                else{message.channel.send(`<@${tag2}> You do not have enough 🪛 items to upgrade your 📡 antenna level!\nYou need **${p13}** more 🔩 antenna parts and **${p14}** more <:meteorite:825122930047320115> meteorites!`)}
                break;
            case 7:
                let p15 = 400-ez2.parts
                let p16 = 40-ez2.badges
                let p17 = 40-ez2.meteorites
                let p18 = 100-ez2.gold
                if(p15<0){p15=0}
                if(p16<0){p16=0}
                if(p17<0){p17=0}
                if(p18<0){p18=0}
                if((ez2.parts>=400)&&(ez2.badges>=40)&&(ez2.meteorites>=40)&&(ez2.gold>=100)){
                    message.react("✅")
                    ez2.parts = ez2.parts-400;
                    ez2.badges = ez2.badges-40;
                    ez2.meteorites = ez2.meteorites-40;
                    ez2.gold = ez2.gold-100;
                    ez2.antenna = ez2.antenna + 1;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                }
                else{message.channel.send(`<@${tag2}> You do not have enough 🪛 items to upgrade your 📡 antenna level!\nYou need **${p15}** more 🔩 antenna parts, **${p16}** more <:sherrifbadge:825122941637230613> sherrif badges, **${p17}** more <:meteorite:825122930047320115> meteorites and **${p18}** more <:goldbar:825122939006746625> gold bars!`)}
                break;
            case 8:
                let p19 = 1100-ez2.parts
                let p20 = 250-ez2.doubloons
                if(p19<0){p19=0}
                if(p20<0){p20=0}
                if((ez2.parts>=1100)&&(ez2.doubloons>=250)){
                    message.react("✅")
                    ez2.parts = ez2.parts-1100;
                    ez2.doubloons = ez2.doubloons-250;
                    ez2.antenna = ez2.antenna + 1;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                }
                else{message.channel.send(`<@${tag2}> You do not have enough 🪛 items to upgrade your 📡 antenna level!\nYou need **${p19}** more 🔩 antenna parts and **${p20}** more <:doubloon:825122941746151434> doubloons!`)}
                break;
            case 9:
                let p21 = 1500-ez2.parts
                let p22 = 300-ez2.pearls
                if(p21<0){p21=0}
                if(p22<0){p22=0}
                if((ez2.parts>=1500)&&(ez2.pearls>=300)){
                    message.react("✅")
                    ez2.parts = ez2.parts-1500;
                    ez2.pearls = ez2.pearls-300;
                    ez2.antenna = ez2.antenna + 1;
                    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                }
                else{message.channel.send(`<@${tag2}> You do not have enough 🪛 items to upgrade your 📡 antenna level!\nYou need **${p21}** more 🔩 antenna parts and **${p22}** more <:pearl:825122938457686057> pearls!`)}
                break;
            case 10:
                message.channel.send(`<@${tag2}> **You have reached max 📡 antenna level!**`)
                break;
        }
    }
    else{
        let other = message.mentions.members.first();
        let ez = db[message.guild.id].users[message.member.id]
        let tag = message.member.id
        if(other) {
            ez = db[message.guild.id].users[other.id]
            tag = other.id
            message.channel.send(`<@${tag}>'s 📡 antenna level is: **${ez.antenna}**`)
        }
        else{
            if(ez.antenna==10){message.channel.send(`<@${tag}> Your 📡 antenna level is: **${ez.antenna}**`)}
            else{message.channel.send(`<@${tag}> Your 📡 antenna level is: **${ez.antenna}**\nUpgrade your 📡 antenna level with **%antenna up** [${whatYouNeed(ez)}]`)}
        }
    }
}
exports.help = {
    name: 'antenna'
}

function whatYouNeed(ez)
{
    switch(ez.antenna)
    {
        case 1:
            return `\`${ez.parts}/3\`🔩\`${ez.acorns}/3\`<:acorn:825122942660509707>`
        case 2:
            return `\`${ez.parts}/10\`🔩\`${ez.newspapers}/5\`📰`
        case 3:
            return `\`${ez.parts}/35\`🔩\`${ez.tires}/10\`<:tire:825122944128385054>`
        case 4:
            return `\`${ez.parts}/75\`🔩\`${ez.newspapers}/10\`📰\`${ez.tires}/10\`<:tire:825122944128385054>\`${ez.socks}/25\`🧦`
        case 5:
            return `\`${ez.parts}/150\`🔩\`${ez.badges}/30\`<:sherrifbadge:825122941637230613>`
        case 6:
            return `\`${ez.parts}/200\`🔩\`${ez.meteorites}/50\`<:meteorite:825122930047320115>`
        case 7:
            return `\`${ez.parts}/400\`🔩\`${ez.badges}/40\`<:sherrifbadge:825122941637230613>\`${ez.meteorites}/40\`<:meteorite:825122930047320115>\`${ez.gold}/100\`<:goldbar:825122939006746625>`
        case 8:
            return `\`${ez.parts}/1100\`🔩\`${ez.doubloons}/250\`<:doubloon:825122941746151434>`
        case 9:
            return `\`${ez.parts}/1500\`🔩\`${ez.pearls}/300\`<:pearl:825122938457686057>`
    }
}