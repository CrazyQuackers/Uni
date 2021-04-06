exports.run = async (bot,message,args) => {
    const db = require('../data/db.json')
    const fs = require("fs")
    let ez = db[message.guild.id].users[message.member.id]
    if(Math.floor(new Date().getTime() - ez.lastClaim) / (1000 * 60 * 60 * 24) < 1){
        let h = (Math.floor((Math.abs(new Date().getTime() - ez.lastClaim))/(1000 * 60 * 60)))
        let m = ((Math.floor((Math.abs(new Date().getTime() - ez.lastClaim))/(1000 * 60)))%60)
        if(m!=0){
            h = 23 - h
            m = 60 - m
        }
        else{h = 24 - h}
        if(h<10){h = `0${h}`}
        if(m<10){m = `0${m}`}
        let str = `\`${h}h${m}m\``
        message.channel.send(`<@${message.member.id}> You have already claimed today's daily reward.\nIt will be available to you again in 🕐 ${str}`)
    }
    else{
        let g = (Math.floor(Math.random()*301))+200;
        let a = (Math.floor(Math.random()*11))+10;
        ez.gems = ez.gems + g;
        ez.parts = ez.parts + a;
        let s = (Math.floor(Math.random()*13))+1;
        let i = (Math.floor(Math.random()*6))+5;
        let si = ""
        switch(s)
        {
            case 1:
                si = "<:acorn:825122942660509707> acorns."
                ez.acorns = ez.acorns + i;
                break;
            case 2:
                si = "📰 newspapers."
                ez.newspapers = ez.newspapers + i;
                break;
            case 3:
                si = "<:tire:825122944128385054> tires."
                ez.tires = ez.tires + i;
                break;
            case 4:
                si = "🧦 socks."
                ez.socks = ez.socks + i;
                break;
            case 5:
                si = "🔨 hammers."
                ez.hammers = ez.hammers + i;
                break;
            case 6:
                si = "<:sherrifbadge:825122941637230613> sherrif badges."
                ez.badges = ez.badges + i;
                break;
            case 7:
                si = "<:meteorite:825122930047320115> meteorites."
                ez.meteorites = ez.meteorites + i;
                break;
            case 8:
                si = "<:goldbar:825122939006746625> gold bars."
                ez.gold = ez.gold + i;
                break;
            case 9:
                si = "<:artifact:825122914210414592> artifacts."
                ez.artifacts = ez.artifacts + i;
                break;
            case 10:
                si = "<:doubloon:825122941746151434> doubloons."
                ez.doubloons = ez.doubloons + i;
                break;
            case 11:
                si = "<:pearl:825122938457686057> pearls."
                ez.pearls = ez.pearls + i;
                break;
            case 12:
                si = "💎 diamonds."
                ez.diamonds = ez.diamonds + i;
                break;
            case 13:
                si = "<:tusk:825122936927027289> ancient tusks."
                ez.tusks = ez.tusks + i;
        }
        ez.lastClaim = new Date().getTime()
        fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
        let str1 = `<@${message.member.id}>\n**▬▬▬** 🥳 DAILY REWARD 🥳 **▬▬▬**`
        let str2 = str1+`\n+ **${g}** <:gems:825122942413045791> gems.`
        let str3 = str2+`\n+ **${a}** 🔩 antenna parts.`
        let str4 = str3+`\n+ **${i}** ${si}`
        let str5 = str4+`\n**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**`
        message.channel.send(str1).then((msg) => {
            setTimeout(function(){
                msg.edit(str2).then((msg) => {
                    setTimeout(function(){
                        msg.edit(str3).then((msg) => {
                            setTimeout(function(){
                                msg.edit(str4).then((msg) => {
                                    setTimeout(function(){
                                        msg.edit(str5)
                                    }, 1000)
                                })
                            }, 1000)
                        })
                    }, 1000)
                })
            }, 1000)
        })
    }
}
exports.help = {
    name: 'daily'
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