exports.run = async (bot,message,args) => {
    const db = require('../../data/db.json')
    const q = require('../../data/q.json')
    const fs = require("fs")
    let ez = db[message.guild.id].users[message.member.id]
    let sm = q[message.guild.id].users[message.member.id]
    let arr = message.content.split(' ');
    if(((arr.length>1)&&(arr[1]=="fight"))||(arr[0]=="%bf")){
        if(Math.floor(new Date().getTime() - ez.lastBoss) / (1000 * 60 * 60 * 2) < 1)
        {
            let h = (Math.floor((Math.abs(new Date().getTime() - ez.lastBoss))/(1000 * 60 * 60)))
            let m = ((Math.floor((Math.abs(new Date().getTime() - ez.lastBoss))/(1000 * 60)))%60)
            if(m!=0){
                h = 1 - h
                m = 60 - m
            }
            else{h = 2 - h}
            if(h<10){h = `0${h}`}
            if(m<10){m = `0${m}`}
            let str = `**\`${h}h${m}m\`**`
            message.channel.send(`<@${message.member.id}> You have to wait 🕐 ${str} before you can fight another 💀 boss!`)
            return;
        }
        ez.lastBoss = new Date().getTime()
        fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
        let type = (Math.floor(Math.random()*7));
        let hp = (Math.round(Math.random()*11))+10;
        let hpLeft = hp;
        let str = `<@${message.member.id}>\n\n`
        let boss = ""
        if(type==6){type=5}
        switch(type)
        {
            case 0:
                str = str+`**A WILD <:ghastlytree:825122934221307955> GHASTLY TREE <:ghastlytree:825122934221307955> APPEARS!** \`${hpLeft}/${hp}\`♥️`
                boss = "<:ghastlytree:825122934221307955> Ghastly Tree"
                break;
            case 1:
                str = str+`**<:georgethegorilla:825122935081664632> GEORGE THE GORILLA <:georgethegorilla:825122935081664632> APPEARS!** \`${hpLeft}/${hp}\`♥️`
                boss = "<:georgethegorilla:825122935081664632> George the Gorilla"
                break;
            case 2:
                str = str+`**A WILD <:sludge:825122930471075880> SLUDGE <:sludge:825122930471075880> APPEARS!** \`${hpLeft}/${hp}\`♥️`
                boss = "<:sludge:825122930471075880> Sludge"
                break;
            case 3:
                str = str+`**A WILD <:subjectone:825122932815691847> SUBJECT ONE <:subjectone:825122932815691847> APPEARS!** \`${hpLeft}/${hp}\`♥️`
                boss = "<:subjectone:825122932815691847> Subject One"
                break;
            case 4:
                str = str+`**A WILD <:kingkrab:825122934183559239> KING KRAB <:kingkrab:825122934183559239> APPEARS!** \`${hpLeft}/${hp}\`♥️`
                boss = "<:kingkrab:825122934183559239> King Krab"
                break;
            case 5:
                str = str+`**A WILD <:magmoraug:825122942768644136> MAGMORAUG <:magmoraug:825122942768644136> APPEARS!** \`${hpLeft}/${hp}\`♥️`
                boss = "<:magmoraug:825122942768644136> Magmoraug"
                break;
        }
        let petArr = [ez.pug,ez.fox,ez.cow,ez.pig,ez.mouse,ez.deer,ez.wolf,ez.duck,ez.unicorn,ez.bat,ez.jack,ez.bear,ez.cat,ez.cyborg,ez.horse,ez.fish,ez.chicken,ez.giraffe,ez.bob,ez.butterfly,ez.peacock,ez.tiger,ez.flamingo,ez.koala,ez.bot,ez.dino,ez.clownfish,ez.panda,ez.bee,ez.shark,ez.steve,ez.rabbit,ez.rex,sm.hypno];
        let strArr = ["pug","fox","cow","pig","mouse","deer","wolf","duck","unicorn","bat","jack","bear","cat","cyborg","horse","fish","chicken","giraffe","bob","butterfly","peacock","tiger","flamingo","koala","bot","dino","clownfish","panda","bee","shark","steve","rabbit","rex","hypno"];
        let i = 0
        let j = 0
        var mainArr = []
        for(i ; i<petArr.length ; i++)
        {
            if((isPet(i,type))&&(petArr[i])){
                mainArr[j] = strArr[i]
                j++
            }
        }
        i = 0
        let g = 0
        message.channel.send(str).then((msg) => {
            setTimeout(function(){
                str = str+"\n\n**▬▬▬▬▬▬▬**「FIGHT」**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n"
                msg.edit(str).then((msg) => {
                    setTimeout(function(){
                        if(mainArr.length==0)
                        {
                            str = str+"\n*you have no pets that are capable to attack this boss*\n\n**▬▬▬▬▬▬▬**「RESULT」**▬▬▬▬▬▬▬▬▬▬▬▬▬▬**"
                            msg.edit(str).then((msg) => {
                                setTimeout(function(){
                                    str = str+`\n\n👑 Winner : ${boss}\n💀 Defeated : <@${message.member.id}>`
                                    msg.edit(str)
                                }, 1000)
                            })
                        }
                        else
                        {
                            for(i = 0 ; i<mainArr.length ; i++)
                            {
                                let str2 = fightMessage(mainArr[i]);
                                let helpArr = str2.split('**');
                                hpLeft = hpLeft - helpArr[3];
                                if(hpLeft<0){hpLeft=0}
                                str2 = str2+` \`${hpLeft}/${hp}\`♥️`
                                str = str+str2
                                msg.edit(str)
                                if(hpLeft==0){i = mainArr.length}
                            }
                            msg.edit(str).then((msg) => {
                                setTimeout(() =>{
                                    if(hpLeft==0)
                                    {
                                        g = (Math.floor(Math.random()*301))+200;
                                        ez.gems = ez.gems + g
                                        ez.defeated = ez.defeated + 1
                                        checkQuests(sm,fs,q)
                                        if((sm.quest==4)&&(sm.task==18)&&(sm.qStarted)){sm.obj1=1}
                                        fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
                                        str = str+`\n\n**▬▬▬▬▬▬▬**「RESULT」**▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n\n👑 Winner : <@${message.member.id}>\n💀 Defeated : ${boss}\n\n**▬▬▬▬▬**「YOUR EARNINGS」**▬▬▬▬▬▬▬▬▬▬▬▬**\n\n+ **${g}** <:gems:825122942413045791> gems!`
                                    }
                                    else
                                    {
                                        str = str+`\n\n**▬▬▬▬▬▬▬**「RESULT」**▬▬▬▬▬▬▬▬▬▬▬▬▬▬**\n\n👑 Winner : ${boss}\n💀 Defeated : <@${message.member.id}>`
                                    }
                                    msg.edit(str)
                                }, 1000)
                            })
                        }
                    }, 1000)
                })
            }, 1000)
        })
    }
    else{
        message.channel.send(`<@${message.member.id}>\n\n**Bosses Info** 💀\n\n__Types of bosses__ 📊\n\n<:ghastlytree:825122934221307955>  Ghastly Tree\n<:georgethegorilla:825122935081664632>  George the Gorilla\n<:sludge:825122930471075880>  Sludge\n<:subjectone:825122932815691847>  Subject One\n<:kingkrab:825122934183559239>  King Krab\n<:magmoraug:825122942768644136>  Magmoraug\n\nBosses spawn with **10-20** ♥️ health.\nFight a random boss with the command **%boss fight**.`)
    }
}
exports.help = {
    name: 'boss'
}

function fightMessage(str)
{
    switch(str)
    {
        case "pug":
            return "\nYour <:pug:825122919789232169> **pug** does **1** ⚔️ attack!"
        case "fox":
            return "\nYour 🦊 **fox** does **1** ⚔️ attack!"
        case "cow":
            return "\nYour 🐮 **cow** does **1** ⚔️ attack!"
        case "pig":
            return "\nYour 🐷 **pig** does **1** ⚔️ attack!"
        case "mouse":
            return "\nYour 🐭 **mouse** does **3** ⚔️ attack!"
        case "deer":
            return "\nYour 🦌 **deer** does **3** ⚔️ attack!"
        case "wolf":
            return "\nYour 🐺 **wolf** does **3** ⚔️ attack!"
        case "duck":
            return "\nYour <:quackers:825122927547908137> **duck** does **5** ⚔️ attack!"
        case "unicorn":
            return "\nYour <:uni:825122929778884658> **unicorn** does **5** ⚔️ attack!"
        case "bat":
            return "\nYour 🦇 **bat** does **7** ⚔️ attack!"
        case "jack":
            return "\nYour 🎃 **jack-o-lantern** does **10** ⚔️ attack!"
        case "bear":
            return "\nYour 🐻 **bear** does **1** ⚔️ attack!"
        case "cat":
            return "\nYour 🐱 **cat** does **1** ⚔️ attack!"
        case "cyborg":
            return "\nYour <:cyborg:825122930836111441> **cyborg** does **1** ⚔️ attack!"
        case "horse":
            return "\nYour 🐴 **horse** does **1** ⚔️ attack!"
        case "fish":
            return "\nYour 🐟 **fish** does **3** ⚔️ attack!"
        case "chicken":
            return "\nYour 🐔 **chicken** does **3** ⚔️ attack!"
        case "giraffe":
            return "\nYour 🦒 **giraffe** does **3** ⚔️ attack!"
        case "bob":
            return "\nYour <:bob:825122926873411604> **bob** does **5** ⚔️ attack!"
        case "butterfly":
            return "\nYour 🦋 **butterfly** does **5** ⚔️ attack!"
        case "peacock":
            return "\nYour 🦚 **peacock** does **7** ⚔️ attack!"
        case "tiger":
            return "\nYour 🐯 **tiger** does **10** ⚔️ attack!"
        case "flamingo":
            return "\nYour 🦩 **flamingo** does **1** ⚔️ attack!"
        case "koala":
            return "\nYour 🐨 **koala** does **1** ⚔️ attack!"
        case "bot":
            return "\nYour <:bot:825139488962379787> **bot** does **1** ⚔️ attack!"
        case "dino":
            return "\nYour 🦕 **dino** does **1** ⚔️ attack!"
        case "clownfish":
            return "\nYour <:clownfish:825122930211684402> **clownfish** does **3** ⚔️ attack!"
        case "panda":
            return "\nYour 🐼 **panda** does **3** ⚔️ attack!"
        case "bee":
            return "\nYour 🐝 **bee** does **3** ⚔️ attack!"
        case "shark":
            return "\nYour 🦈 **shark** does **5** ⚔️ attack!"
        case "steve":
            return "\nYour <:steve:825122936469192705> **steve** does **5** ⚔️ attack!"
        case "rabbit":
            return "\nYour <:magicrabbit:825122932484341760> **magic rabbit** does **7** ⚔️ attack!"
        case "rex":
            return "\nYour 🦖 **t-rex** does **10** ⚔️ attack!"
        case "hypno":
            return "\nYour <:hypnotize:843489441724628992> **hypnotize** does **5** ⚔️ attack!"
    }
}

function isPet(i,type)
{
    let check = false
    switch(i)
    {
        case 0:
            if(type==0){check = true}
            break;
        case 1:
            if(type==1){check = true}
            break;
        case 2:
            if(type==2){check = true}
            break;
        case 3:
            if(type==3){check = true}
            break;
        case 4:
            if(type==4){check = true}
            break;
        case 5:
            if(type==5){check = true}
            break;
        case 6:
            if(type==1){check = true}
            break;
        case 7:
            if((type==4)||(type==2)){check = true}
            break;
        case 8:
            if((type==3)||(type==5)){check = true}
            break;
        case 9:
            if((type==5)||(type==0)){check = true}
            break;
        case 10:
            if((type==0)||(type==1)||(type==2)){check = true}
            break;
        case 11:
            if(type==4){check = true}
            break;
        case 12:
            if(type==5){check = true}
            break;
        case 13:
            if(type==3){check = true}
            break;
        case 14:
            if(type==2){check = true}
            break;
        case 15:
            if(type==3){check = true}
            break;
        case 16:
            if((type==0)||(type==4)){check = true}
            break;
        case 17:
            if((type==2)||(type==5)){check = true}
            break;
        case 18:
            if((type==0)||(type==3)){check = true}
            break;
        case 19:
            if((type==1)||(type==2)){check = true}
            break;
        case 20:
            if((type==0)||(type==1)){check = true}
            break;
        case 21:
            if((type==3)||(type==4)||(type==5)){check = true}
            break;
        case 22:
            if(type==4){check = true}
            break;
        case 23:
            if(type==1){check = true}
            break;
        case 24:
            if(type==5){check = true}
            break;
        case 25:
            if(type==0){check = true}
            break;
        case 26:
            if((type==5)||(type==1)){check = true}
            break;
        case 27:
            if((type==4)||(type==3)){check = true}
            break;
        case 28:
            if((type==3)||(type==2)){check = true}
            break;
        case 29:
            if((type==2)||(type==0)){check = true}
            break;
        case 30:
            if((type==1)||(type==4)){check = true}
            break;
        case 31:
            if((type==1)||(type==3)||(type==5)){check = true}
            break;
        case 32:
            if((type==0)||(type==2)||(type==4)){check = true}
            break;
        case 33:
            check = true
    }
    return check;
}

function checkQuests(sm,fs,q)
{
    if((sm.quest==4)&&(sm.task==18)&&(sm.qStarted)){sm.obj1=1}
    fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})
}