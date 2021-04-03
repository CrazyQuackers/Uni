exports.run = async (bot,message,args) => {
    const db = require('../../data/db.json')
    const fs = require("fs")
    let ez = db[message.guild.id].users[message.member.id]
    let arr = message.content.split(' ')
    let num = 0
    if(arr[0]=="%pc"){num=1}else{num=2}
    if(arr.length>num){
        if(arr[num]=="1"){
            if((arr.length>num+1)&&(arr[num+1]=="buy")){
                mainPetFunction(message,500,ez,fs,db)
            }
            else{
                pcStats(message,1,500,"<:pug:825122919789232169>  Pug","🦊  Fox","🐮  Cow","🐷  Pig","🐭  Mouse","🦌  Deer","🐺  Wolf","<:quackers:825122927547908137>  Duck","<:uni:825122929778884658>  Unicorn","🦇  Bat","🎃  Jack-O-Lantern","<:ghastlytree:825122934221307955>","<:georgethegorilla:825122935081664632>","<:sludge:825122930471075880>","<:subjectone:825122932815691847>","<:kingkrab:825122934183559239>","<:magmoraug:825122942768644136>","<:georgethegorilla:825122935081664632>","<:kingkrab:825122934183559239> , <:sludge:825122930471075880>","<:subjectone:825122932815691847> , <:magmoraug:825122942768644136>","<:magmoraug:825122942768644136> , <:ghastlytree:825122934221307955> ","<:ghastlytree:825122934221307955> , <:georgethegorilla:825122935081664632> , <:sludge:825122930471075880>")
            }
        }
        else{
            if(arr[num]=="2"){
                if((arr.length>num+1)&&(arr[num+1]=="buy")){
                    mainPetFunction(message,2000,ez,fs,db)
                }
                else{
                    pcStats(message,2,"2,000","🐻  Bear","🐱  Cat","<:cyborg:825122930836111441>  Cyborg","🐴  Horse","🐟  Fish","🐔  Chicken","🦒  Giraffe","<:bob:825122926873411604>  Bob","🦋  Butterfly","🦚  Peacock","🐯  Tiger","<:kingkrab:825122934183559239>","<:magmoraug:825122942768644136>","<:subjectone:825122932815691847>","<:sludge:825122930471075880>","<:subjectone:825122932815691847>","<:ghastlytree:825122934221307955> , <:kingkrab:825122934183559239>","<:sludge:825122930471075880> , <:magmoraug:825122942768644136>","<:ghastlytree:825122934221307955> , <:subjectone:825122932815691847>","<:georgethegorilla:825122935081664632> , <:sludge:825122930471075880>","<:ghastlytree:825122934221307955> , <:georgethegorilla:825122935081664632> ","<:subjectone:825122932815691847> , <:kingkrab:825122934183559239> , <:magmoraug:825122942768644136>")
                }
            }
            else{
                if(arr[num]=="3"){
                    if((arr.length>num+1)&&(arr[num+1]=="buy")){
                        mainPetFunction(message,7500,ez,fs,db)
                    }
                    else{
                        pcStats(message,3,"7,500","🦩  Flamingo","🐨  Koala","<:bot:825139488962379787>  Bot","🦕  Dino","<:clownfish:825122930211684402>  Clownfish","🐼  Panda","🐝  Bee","🦈  Shark","<:steve:825122936469192705>  Steve","<:magicrabbit:825122932484341760>  Magic Rabbit","🦖  T-Rex","<:kingkrab:825122934183559239>","<:georgethegorilla:825122935081664632>","<:magmoraug:825122942768644136>","<:ghastlytree:825122934221307955>","<:magmoraug:825122942768644136> , <:georgethegorilla:825122935081664632>","<:kingkrab:825122934183559239> , <:subjectone:825122932815691847>","<:subjectone:825122932815691847> , <:sludge:825122930471075880>","<:sludge:825122930471075880> , <:ghastlytree:825122934221307955>","<:georgethegorilla:825122935081664632> , <:kingkrab:825122934183559239>","<:georgethegorilla:825122935081664632> , <:subjectone:825122932815691847> ,  <:magmoraug:825122942768644136>","<:ghastlytree:825122934221307955> , <:sludge:825122930471075880> , <:kingkrab:825122934183559239>")
                    }
                }
                else{
                    pcDetails(message)
                }
            }
        }
    }
    else{
        pcDetails(message)
    }
}
exports.help = {
    name: 'pc'
}

function pcDetails(message)
{
    message.channel.send(`<@${message.member.id}>\n\n**Pet Crates Info** <:gems:825122942413045791>\n\nThere are 3 different pet crates:\n\n• Pet Crate 1\n• Pet Crate 2\n• Pet Crate 3\n\n__Details and Stats__ 🗒️\n\n**%pet crate <number>**\n\n__Buy Pet Crates__ 📦\n\n**%pet crate <number> buy**`)
}

function pcStats(message,w,c,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11)
{
    message.channel.send({embed: {
        color: 16711680,
        title: `Pet Crate ${w}  [Cost ${c} <:gems:825122942413045791> Gems]`,
        fields: [
            {name: "Pet", value: `${p1}\n${p2}\n${p3}\n${p4}\n${p5}\n${p6}\n${p7}\n${p8}\n${p9}\n${p10}\n${p11}`, inline: true},
            {name: "Rarity", value: "**1** ⚔️ - C\n**1** ⚔️ - C\n**1** ⚔️ - C\n**1** ⚔️ - C\n**3** ⚔️ - U\n**3** ⚔️ - U\n**3** ⚔️ - U\n**5** ⚔️ - R\n**5** ⚔️ - R\n**7** ⚔️ - L\n**10** ⚔️ - G", inline: true},
            {name: "Effective on Boss Type", value: `${b1}\n${b2}\n${b3}\n${b4}\n${b5}\n${b6}\n${b7}\n${b8}\n${b9}\n${b10}\n${b11}`, inline: true}
        ]
      } 
    });
}

function unboxedPetMessage(message,rarity,pet,attack,effective)
{
    message.channel.send(`<@${message.member.id}> You've unboxed ${rarity} ${pet}!\nThis pet has **${attack}** ⚔️ Attack and is effective against ${effective}!`)
}

function mainPetFunction(message,c,ez,fs,db)
{
    if(ez.gems>=c){
        ez.gems = ez.gems - c;
        let object = (Math.round(Math.random()*1000))+1;
        let whatPet = 0
        if(object<=600){
            whatPet = (Math.round(Math.random()*4))+1;
            switch(whatPet){
                case 1:
                    switch(c){
                        case 500:
                            unboxedPetMessage(message,"a common","<:pug:825122919789232169> **Pug**",1,"<:ghastlytree:825122934221307955> Ghastly Tree")
                            ez.pug = true;
                            break;
                        case 2000:
                            unboxedPetMessage(message,"a common","🐻 **Bear**",1,"<:kingkrab:825122934183559239> King Krab")
                            ez.bear = true;
                            break;
                        case 7500:
                            unboxedPetMessage(message,"a common","🦩 **Flamingo**",1,"<:kingkrab:825122934183559239> King Krab")
                            ez.flamingo = true;
                            break;
                    }
                    break;
                case 2:
                    switch(c){
                        case 500:
                            unboxedPetMessage(message,"a common","🦊 **Fox**",1,"<:georgethegorilla:825122935081664632> George the Gorilla")
                            ez.fox = true;
                            break;
                        case 2000:
                            unboxedPetMessage(message,"a common","🐱 **Cat**",1,"<:magmoraug:825122942768644136> Magmoraug")
                            ez.cat = true;
                            break;
                        case 7500:
                            unboxedPetMessage(message,"a common","🐨 **Koala**",1,"<:georgethegorilla:825122935081664632> George the Gorilla")
                            ez.koala = true;
                            break;
                    }
                    break;
                case 3:
                    switch(c){
                        case 500:
                            unboxedPetMessage(message,"a common","🐮 **Cow**",1,"<:sludge:825122930471075880> Sludge")
                            ez.cow = true;
                            break;
                        case 2000:
                            unboxedPetMessage(message,"a common","<:cyborg:825122930836111441> **Cyborg**",1,"<:subjectone:825122932815691847> Subject One")
                            ez.cyborg = true;
                            break;
                        case 7500:
                            unboxedPetMessage(message,"a common","<:bot:825139488962379787> **Bot**",1,"<:magmoraug:825122942768644136> Magmoraug")
                            ez.bot = true;
                            break;
                    }
                    break;
                case 4:
                    switch(c){
                        case 500:
                            unboxedPetMessage(message,"a common","🐷 **Pig**",1,"<:subjectone:825122932815691847> Subject One")
                            ez.pig = true;
                            break;
                        case 2000:
                            unboxedPetMessage(message,"a common","🐴 **Horse**",1,"<:sludge:825122930471075880> Sludge")
                            ez.horse = true;
                            break;
                        case 7500:
                            unboxedPetMessage(message,"a common","🦕 **Dino**",1,"<:ghastlytree:825122934221307955> Ghastly Tree")
                            ez.dino = true;
                            break;
                    }
                    break;
            }
        }
        else{
            if(object<=870){
                whatPet = (Math.round(Math.random()*3))+1;
                switch(whatPet){
                    case 1:
                        switch(c){
                            case 500:
                                unboxedPetMessage(message,"an uncommon","🐭 **Mouse**",3,"<:kingkrab:825122934183559239> King Krab")
                                ez.mouse = true;
                                break;
                            case 2000:
                                unboxedPetMessage(message,"an uncommon","🐟 **Fish**",3,"<:subjectone:825122932815691847> Subject One")
                                ez.fish = true;
                                break;
                            case 7500:
                                unboxedPetMessage(message,"an uncommon","<:clownfish:825122930211684402> **Clownfish**",3,"<:magmoraug:825122942768644136> Magmoraug and <:georgethegorilla:825122935081664632> George the Gorilla")
                                ez.clownfish = true;
                                break;
                        }
                        break;
                    case 2:
                        switch(c){
                            case 500:
                                unboxedPetMessage(message,"an uncommon","🦌 **Deer**",3,"<:magmoraug:825122942768644136> Magmoraug")
                                ez.deer = true;
                                break;
                            case 2000:
                                unboxedPetMessage(message,"an uncommon","🐔 **Chicken**",3,"<:ghastlytree:825122934221307955> Ghastly Tree and <:kingkrab:825122934183559239> King Krab")
                                ez.chicken = true;
                                break;
                            case 7500:
                                unboxedPetMessage(message,"an uncommon","🐼 **Panda**",3,"<:kingkrab:825122934183559239> King Krab and <:subjectone:825122932815691847> Subject One")
                                ez.panda = true;
                                break;
                        }
                        break;
                    case 3:
                        switch(c){
                            case 500:
                                unboxedPetMessage(message,"an uncommon","🐺 **Wolf**",3,"<:georgethegorilla:825122935081664632> George the Gorilla")
                                ez.wolf = true;
                                break;
                            case 2000:
                                unboxedPetMessage(message,"an uncommon","🦒 **Giraffe**",3,"<:subjectone:825122932815691847> Subject One and <:magmoraug:825122942768644136> Magmoraug")
                                ez.giraffe = true;
                                break;
                            case 7500:
                                unboxedPetMessage(message,"an uncommon","🐝 **Bee**",3,"<:subjectone:825122932815691847> Subject One and <:sludge:825122930471075880> Sludge")
                                ez.bee = true;
                                break;
                        }
                        break;
                }
            }
            else{
                if(object<=970){
                    whatPet = (Math.round(Math.random()*2))+1;
                    switch(whatPet){
                        case 1:
                            switch(c){
                                case 500:
                                    unboxedPetMessage(message,"a rare","<:quackers:825122927547908137> **Duck**",5,"<:kingkrab:825122934183559239> King Krab and <:sludge:825122930471075880> Sludge")
                                    ez.duck = true;
                                    break;
                                case 2000:
                                    unboxedPetMessage(message,"a rare","<:bob:825122926873411604> **Bob**",5,"<:ghastlytree:825122934221307955> Ghastly Tree and <:subjectone:825122932815691847> Subject One")
                                    ez.bob = true;
                                    break;
                                case 7500:
                                    unboxedPetMessage(message,"a rare","🦈 **Shark**",5,"<:sludge:825122930471075880> Sludge and <:ghastlytree:825122934221307955> Ghastly Tree")
                                    ez.shark = true;
                                    break;
                            }
                            break;
                        case 2:
                            switch(c){
                                case 500:
                                    unboxedPetMessage(message,"a rare","<:uni:825122929778884658> **Unicorn**",5,"<:subjectone:825122932815691847> Subject One and <:magmoraug:825122942768644136> Magmoraug")
                                    ez.unicorn = true;
                                    break;
                                case 2000:
                                    unboxedPetMessage(message,"a rare","🦋 **Butterfly**",5,"<:georgethegorilla:825122935081664632> George the Gorilla and <:sludge:825122930471075880> Sludge")
                                    ez.butterfly = true;
                                    break;
                                case 7500:
                                    unboxedPetMessage(message,"a rare","<:steve:825122936469192705> **Steve**",5,"<:georgethegorilla:825122935081664632> George the Gorilla and <:kingkrab:825122934183559239> King Krab")
                                    ez.steve = true;
                                    break;
                            }
                            break;
                    }
                }
                else{
                    if(object<=996){
                        switch(c){
                            case 500:
                                unboxedPetMessage(message,"a legendary","🦇 **Bat**",7,"<:magmoraug:825122942768644136> Magmoraug and <:ghastlytree:825122934221307955> Ghastly Tree")
                                ez.bat = true;
                                break;
                            case 2000:
                                unboxedPetMessage(message,"a legendary","🦚 **Peacock**",7,"<:ghastlytree:825122934221307955> Ghastly Tree and <:georgethegorilla:825122935081664632> George the Gorilla")
                                ez.peacock = true;
                                break;
                            case 7500:
                                unboxedPetMessage(message,"a legendary","<:magicrabbit:825122932484341760> **Magic Rabbit**",7,"<:georgethegorilla:825122935081664632> George the Gorilla, <:subjectone:825122932815691847> Subject One and <:magmoraug:825122942768644136> Magmoraug")
                                ez.rabbit = true;
                                break;
                        }
                    }
                    else{
                        switch(c){
                            case 500:
                                unboxedPetMessageGodly(message,"🎃 **Jack-O-Lantern**","<:ghastlytree:825122934221307955> Ghastly Tree, <:georgethegorilla:825122935081664632> George the Gorilla and <:sludge:825122930471075880> Sludge")
                                ez.jack = true;
                                break;
                            case 2000:
                                unboxedPetMessageGodly(message,"🐯 **Tiger**","<:subjectone:825122932815691847> Subject One, <:kingkrab:825122934183559239> King Krab and <:magmoraug:825122942768644136> Magmoraug")
                                ez.tiger = true;
                                break;
                            case 7500:
                                unboxedPetMessageGodly(message,"🦖 **T-Rex**","<:ghastlytree:825122934221307955> Ghastly Tree, <:sludge:825122930471075880> Sludge and <:kingkrab:825122934183559239> King Krab")
                                ez.rex = true;
                                break;
                        }
                    }
                }
            }
        }
        fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
    }
    else{
        let gemStr = coinToStr(c-ez.gems)
        message.channel.send(`<@${message.member.id}> You do not have enough <:gems:825122942413045791> gems to open this pet crate!\nYou need **${gemStr}** more <:gems:825122942413045791> gems!`)
    }
}

function unboxedPetMessageGodly(message,pet,effective)
{
    message.channel.send(`<@${message.member.id}> YOU'VE UNBOXED A GODLY ${pet}! AMAZING!\nThis pet has **10** ⚔️ Attack and is effective against ${effective}!`)
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