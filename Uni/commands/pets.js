exports.run = async (bot,message,args) => {
    const db = require('../../data/db.json')
    const q = require('../../data/q.json')
    let other = message.mentions.members.first();
    let ez = db[message.guild.id].users[message.member.id]
    let sm = q[message.guild.id].users[message.member.id]
    let tag = message.member.id
    if(other){tag = other.id
        ez = db[message.guild.id].users[tag]
        sm = q[message.guild.id].users[tag]}
    let petArr1 = [ez.pug,ez.fox,ez.cow,ez.pig,ez.mouse,ez.deer,ez.wolf,ez.duck,ez.unicorn,ez.bat,ez.jack];
    let petArr2 = [ez.bear,ez.cat,ez.cyborg,ez.horse,ez.fish,ez.chicken,ez.giraffe,ez.bob,ez.butterfly,ez.peacock,ez.tiger];
    let petArr3 = [ez.flamingo,ez.koala,ez.bot,ez.dino,ez.clownfish,ez.panda,ez.bee,ez.shark,ez.steve,ez.rabbit,ez.rex];
    let petArr4 = [sm.hypno,sm.tree,sm.george,sm.sludge,sm.subject,sm.king,sm.mag];
    let c1 = countPets(petArr1)
    let c2 = countPets(petArr2)
    let c3 = countPets(petArr3)
    let c4 = countPets(petArr4)
    let str1 = `<@${tag}>**'s Pets**  \`${(c1+c2+c3+c4)}/40\`\n\n__Pet Crate 1__  \`${c1}/11\`\n`
    let str2 = `\n\n__Pet Crate 2__  \`${c2}/11\`\n`
    let str3 = `\n\n__Pet Crate 3__  \`${c3}/11\`\n`
    let str4 = `\n\n__Questline & Boss Pets__\n  \`${c4}/7\``
    str1 = createMessage(petArr1,1,str1)
    str2 = createMessage(petArr2,2,str2)
    str3 = createMessage(petArr3,3,str3)
    str4 = createMessage(petArr4,4,str4)
    message.channel.send(`${str1}${str2}${str3}${str4}`)
}
exports.help = {
    name: 'pets'
}

function countPets(arr)
{
    let c = 0
    for(let i=0 ; i<arr.length ; i++){if(arr[i]){c++}}
    return c;
}

function createMessage(arr,n,str)
{
    let i = 0
    let pet = ""
    let helper = str
    for(i ; i<arr.length ; i++)
    {
        if(arr[i])
        {
            pet = findPet(i,n)
            str = str+`\n${pet}`
        }
    }
    if(str==helper)
    {
        str = str+"\n*no pets found*"
    }
    return str;
}

function findPet(i,n)
{
    switch(n)
    {
        case 1:
            switch(i)
            {
                case 0:
                    return "<:pug:825122919789232169> **Pug** ( 1 ⚔️ <:ghastlytree:825122934221307955> )  💠  _Common_"
                case 1:
                    return "🦊 **Fox** ( 1 ⚔️ <:georgethegorilla:825122935081664632> )  💠  _Common_"
                case 2:
                    return "🐮 **Cow** ( 1 ⚔️ <:sludge:825122930471075880> )  💠  _Common_"
                case 3:
                    return "🐷 **Pig** ( 1 ⚔️ <:subjectone:825122932815691847> )  💠  _Common_"
                case 4:
                    return "🐭 **Mouse** ( 3 ⚔️ <:kingkrab:825122934183559239> )  💠  _Uncommon_"
                case 5:
                    return "🦌 **Deer** ( 3 ⚔️ <:magmoraug:825122942768644136> )  💠  _Uncommon_"
                case 6:
                    return "🐺 **Wolf** ( 3 ⚔️ <:georgethegorilla:825122935081664632> )  💠  _Uncommon_"
                case 7:
                    return "<:quackers:825122927547908137> **Duck** ( 5 ⚔️ <:kingkrab:825122934183559239><:sludge:825122930471075880> )  💠  _Rare_"
                case 8:
                    return "<:uni:825122929778884658> **Unicorn** ( 5 ⚔️ <:subjectone:825122932815691847><:magmoraug:825122942768644136> )  💠  _Rare_"
                case 9:
                    return "🦇 **Bat** ( 7 ⚔️ <:magmoraug:825122942768644136><:ghastlytree:825122934221307955> )  💠  _Legendary_"
                case 10:
                    return "🎃 **Jack-O-Lantern** ( 10 ⚔️ <:ghastlytree:825122934221307955><:georgethegorilla:825122935081664632><:sludge:825122930471075880> )  💠  _Godly_"
            }
        case 2:
            switch(i)
            {
                case 0:
                    return "🐻 **Bear** ( 1 ⚔️ <:kingkrab:825122934183559239> )  💠  _Common_"
                case 1:
                    return "🐱 **Cat** ( 1 ⚔️ <:magmoraug:825122942768644136> )  💠  _Common_"
                case 2:
                    return "<:cyborg:825122930836111441> **Cyborg** ( 1 ⚔️ <:subjectone:825122932815691847> )  💠  _Common_"
                case 3:
                    return "🐴 **Horse** ( 1 ⚔️ <:sludge:825122930471075880> )  💠  _Common_"
                case 4:
                    return "🐟 **Fish** ( 3 ⚔️ <:subjectone:825122932815691847> )  💠  _Uncommon_"
                case 5:
                    return "🐔 **Chicken** ( 3 ⚔️ <:ghastlytree:825122934221307955><:kingkrab:825122934183559239> )  💠  _Uncommon_"
                case 6:
                    return "🦒 **Giraffe** ( 3 ⚔️ <:sludge:825122930471075880><:magmoraug:825122942768644136> )  💠  _Uncommon_"
                case 7:
                    return "<:bob:825122926873411604> **Bob** ( 5 ⚔️ <:ghastlytree:825122934221307955><:subjectone:825122932815691847> )  💠  _Rare_"
                case 8:
                    return "🦋 **Butterfly** ( 5 ⚔️ <:georgethegorilla:825122935081664632><:sludge:825122930471075880> )  💠  _Rare_"
                case 9:
                    return "🦚 **Peacock** ( 7 ⚔️ <:ghastlytree:825122934221307955><:georgethegorilla:825122935081664632> )  💠  _Legendary_"
                case 10:
                    return "🐯 **Tiger** ( 10 ⚔️ <:subjectone:825122932815691847><:kingkrab:825122934183559239><:magmoraug:825122942768644136> )  💠  _Godly_"
            }
        case 3:
            switch(i)
            {
                case 0:
                    return "🦩 **Flamingo** ( 1 ⚔️ <:kingkrab:825122934183559239> )  💠  _Common_"
                case 1:
                    return "🐨 **Koala** ( 1 ⚔️ <:georgethegorilla:825122935081664632> )  💠  _Common_"
                case 2:
                    return "<:bot:825139488962379787> **Bot** ( 1 ⚔️ <:magmoraug:825122942768644136> )  💠  _Common_"
                case 3:
                    return "🦕 **Dino** ( 1 ⚔️ <:ghastlytree:825122934221307955> )  💠  _Common_"
                case 4:
                    return "<:clownfish:825122930211684402> **Clownfish** ( 3 ⚔️ <:magmoraug:825122942768644136><:georgethegorilla:825122935081664632> )  💠  _Uncommon_"
                case 5:
                    return "🐼 **Panda** ( 3 ⚔️ <:kingkrab:825122934183559239><:subjectone:825122932815691847> )  💠  _Uncommon_"
                case 6:
                    return "🐝 **Bee** ( 3 ⚔️ <:subjectone:825122932815691847><:sludge:825122930471075880> )  💠  _Uncommon_"
                case 7:
                    return "🦈 **Shark** ( 5 ⚔️ <:sludge:825122930471075880><:ghastlytree:825122934221307955> )  💠  _Rare_"
                case 8:
                    return "<:steve:825122936469192705> **Steve** ( 5 ⚔️ <:georgethegorilla:825122935081664632><:kingkrab:825122934183559239> )  💠  _Rare_"
                case 9:
                    return "<:magicrabbit:825122932484341760> **Magic Rabbit** ( 7 ⚔️ <:georgethegorilla:825122935081664632><:subjectone:825122932815691847><:magmoraug:825122942768644136> )  💠  _Legendary_"
                case 10:
                    return "🦖 **T-Rex** ( 10 ⚔️ <:ghastlytree:825122934221307955><:sludge:825122930471075880><:kingkrab:825122934183559239> )  💠  _Godly_"
            }
        case 4:
            switch(i)
            {
                case 0:
                    return "<:hypnotize:843489441724628992> **Hypnotize** ( 5 ⚔️ <:ghastlytree:825122934221307955><:georgethegorilla:825122935081664632><:sludge:825122930471075880><:subjectone:825122932815691847><:kingkrab:825122934183559239><:magmoraug:825122942768644136> )  💠  _Godly_"
                case 1:
                    return "<:ghastlytree:825122934221307955> **Mini Ghast** ( 2 ⚔️ <:ghastlytree:825122934221307955> )  💠  _Mythical_"
                case 2:
                    return "<:georgethegorilla:825122935081664632> **Mini George** ( 2 ⚔️ <:georgethegorilla:825122935081664632> )  💠  _Mythical_"
                case 3:
                    return "<:sludge:825122930471075880> **Mini Sludge** ( 2 ⚔️ <:sludge:825122930471075880> )  💠  _Mythical_"
                case 4:
                    return "<:subjectone:825122932815691847> **Mini One** ( 2 ⚔️ <:subjectone:825122932815691847> )  💠  _Mythical_"
                case 5:
                    return "<:kingkrab:825122934183559239> **Mini Krab** ( 2 ⚔️ <:kingkrab:825122934183559239> )  💠  _Mythical_"
                case 6:
                    return "<:magmoraug:825122942768644136> **Mini Mag** ( 2 ⚔️ <:magmoraug:825122942768644136> )  💠  _Mythical_"
            }
    }
}