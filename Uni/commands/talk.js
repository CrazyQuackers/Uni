const Discord = require('discord.js')

exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const q = require('../../data/q.json')
    let sm = q[message.guild.id].users[message.member.id]
    if((args.length>2)&&(args[0]=="ghost")&&(args[1]=="hunter"))
    {
        switch(args[2])
        {
            case "gabe":
                talkToCharacter(message,sm,fs,q,1,"him","Gabe","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/1/19/Gabe.png/revision/latest?cb=20210727014508")
                break;
            case "adam":
                talkToCharacter(message,sm,fs,q,2,"him","Adam","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/9/94/Adam.png/revision/latest?cb=20210727172954")
                break;
            case "liz":
                talkToCharacter(message,sm,fs,q,3,"her","Liz","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/6/67/Liz.png/revision/latest?cb=20210727173213")
                break;
            case "jesse":
                talkToCharacter(message,sm,fs,q,4,"him","Jesse","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/7/78/Jesse.png/revision/latest?cb=20210727175810")
                break;
            case "hans":
                talkToCharacter(message,sm,fs,q,5,"him","Hans","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/9/95/Ghost_Hunter_Hans.png/revision/latest?cb=20210727180608")
                break;
            case "finsley":
                talkToCharacter(message,sm,fs,q,6,"him","Captain Finsley","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/5/57/Captain_Finsley.png/revision/latest?cb=20200502102004")
                break;
            case "shelly":
                talkToCharacter(message,sm,fs,q,7,"her","Shelly","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/7/72/Screen_Shot_2020-02-12_at_4.47.13_PM.png/revision/latest?cb=20200503093253")
                break;
            case "riley":
                talkToCharacter(message,sm,fs,q,8,"her","Riley","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/5/58/Riley.png/revision/latest?cb=20200508190227")
                break;
            case "luna":
                talkToCharacter(message,sm,fs,q,9,"her","Luna","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/3/32/Ghost_Hunter_Luna.png/revision/latest?cb=20210727014952")
                break;
            case "blaze":
                talkToCharacter(message,sm,fs,q,10,"him","Blaze","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bd/Blaze.png/revision/latest?cb=20200503095526")
                break;
            case "uwu":
                characterNotInUni(message,"Uwu","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/d/d4/Ghost_Hunter_Uwu.png/revision/latest?cb=20210731120656")
                break;
            case "dylan":
                characterNotInUni(message,"Dylan","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/7/72/Dylan.png/revision/latest?cb=20210727015251")
                break;
            case "morgan":
                characterNotInUni(message,"Morgan","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/7/76/Ghost_Hunter_Morgan.png/revision/latest?cb=20210727173423")
                break;
            case "hu-man":
                characterNotInUni(message,"Hu-man","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/1/1a/Hu-man.png/revision/latest?cb=20210727180321")
                break;
            case "archie":
                characterNotInUni(message,"Archie","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/4/4e/Ghost_Hunter_Archie.png/revision/latest?cb=20210717212725")
                break;
            case "jylan":
                characterNotInUni(message,"Jylan","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/a/a5/Jylan.png/revision/latest?cb=20191221185031")
                break;
            case "victor":
                characterNotInUni(message,"Victor","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/6/69/Image0_%281%29-0.png/revision/latest?cb=20200126011122")
                break;
            case "ace":
                characterNotInUni(message,"Ace","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/c/c3/Image1.png/revision/latest?cb=20200126011525")
                break;
            case "joven":
                characterNotInUni(message,"Joven","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/c/c8/Joven.png/revision/latest?cb=20200503093340")
                break;
            case "leo":
                characterNotInUni(message,"Leo","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/1/1d/Leo.png/revision/latest?cb=20200228120658")
                break;
            case "yoko":
                characterNotInUni(message,"Yoko","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/5/50/Image4.png/revision/latest?cb=20200126011838")
                break;
            case "fern":
                characterNotInUni(message,"Fern","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/a/ad/Fern1.png/revision/latest?cb=20200426184241")
                break;
            case "gatekeeper":
                characterNotInUni(message,"Gatekeeper","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/e/ee/Image2.png/revision/latest?cb=20200126015531")
                break;
            case "jax":
                characterNotInUni(message,"Jax","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/c/cc/Image3.png/revision/latest?cb=20200126020357")
                break;
            case "gab3":
                characterNotInUni(message,"Gab3","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/2/24/Image0-0.png/revision/latest?cb=20200126020551")
                break;
            case "billy":
                characterNotInUni(message,"Billy","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/9/95/Billy.png/revision/latest?cb=20200507211807")
                break;
            case "rowan":
                characterNotInUni(message,"Rowan","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/1/14/Rowan1.png/revision/latest?cb=20200426044857")
                break;
            case "wylan":
                characterNotInUni(message,"Wylan","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/e/e7/Ghost_Hunter_Wylan.png/revision/latest?cb=20210718131304")
                break;
            case "boven":
                characterNotInUni(message,"Boven","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/c/cf/Ghost_Hunter_Boven.png/revision/latest?cb=20210723180227")
                break;
            case "allie":
                characterNotInUni(message,"Allie","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/6/65/Allie.png/revision/latest?cb=20200704013144")
                break;
            case "julian":
                characterNotInUni(message,"Julian","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/a/ad/Screencap_Julian.jpg/revision/latest?cb=20210407043925")
                break;
            case "bo":
                characterNotInUni(message,"Bo","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/a/ac/Golden_Turkey_Bo.png/revision/latest?cb=20201120232315")
                break;
            case "da-vid":
                characterNotInUni(message,"Da-vid","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/b/bc/Ghost_Hunter_Da-vid.png/revision/latest?cb=20210727143247")
                break;
            case "covenk":
                characterNotInUni(message,"CovenK","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/6/66/Void_NPC_CovenK.png/revision/latest?cb=20210228065439")
                break;
            case "didi1147":
                characterNotInUni(message,"Didi1147","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/6/66/Void_NPC_Didi1147.png/revision/latest?cb=20210228065444")
                break;
            case "makkiemon":
                characterNotInUni(message,"MakkieMon","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/2/26/Void_NPC_MakkieMon.png/revision/latest?cb=20210228065454")
                break;
            case "thexz":
                characterNotInUni(message,"Thexz","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/2/20/Void_NPC_Thexz.png/revision/latest?cb=20210228065459")
                break;
            case "goro7":
                characterNotInUni(message,"Goro7","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/1/15/Void_NPC_Goro7.png/revision/latest?cb=20210228065449")
                break;
            case "???":
                characterNotInUni(message,"???","https://static.wikia.nocookie.net/ghost-simulator-roblox/images/0/0a/Rebirth_NPC.png/revision/latest?cb=20210313001925")
                break;
            default:
                characterDoesNotExist(message,args[2])
                break;
        }
    }else{talkDetails(message)}
}
exports.help = {
    name: 'talk'
}

function talkDetails(message)
{
    message.react("❌")
    message.channel.send(`<@${message.member.id}> The correct sytnax for this command is \`%talk Ghost Hunter <name>\`.`)
}

function characterDoesNotExist(message,name)
{
    message.react("❌")
    message.channel.send(`<@${message.member.id}> Could not find \`Ghost Hunter ${name}\`.`)
}

function characterNotInUni(message,name,link)
{
    message.react("📬")
    const embed = new Discord.MessageEmbed()
    .setColor(16738740)
    .setTitle(`Ghost Hunter ${name}`)
    .setURL("https://www.roblox.com/games/2685347741")
    .setAuthor(message.author.username,message.author.avatarURL())
    .setThumbnail("https://t4.rbxcdn.com/ea4f118bf2e20f027f7d91de4d19e39d")
    .setDescription(`Ghost Hunter ${name}, does not make an appearance in Uni.\nBut you will find him in **'Ghost Simulator'** on Roblox.\nClick the link in the top of this message to play the game!`)
    .setImage(link)
    .setTimestamp()
    message.author.send({embed})
}

function talkToCharacter(message,sm,fs,q,quest,gender,name,link)
{
    if(sm.quest<quest){badTalk(message,name,link,`You can't talk to Ghost Hunter ${name} right now, because you haven't met with ${gender} yet!`)}else{if(sm.quest==quest){badTalk(message,name,link,`You can't talk to Ghost Hunter ${name} right now, because you are currently in a quest with ${gender}!`)}else{goodTalk(message,name,link,sm,fs,q)}}
}

function badTalk(message,name,link,description)
{
    message.react("❌")
    const embed = new Discord.MessageEmbed()
    .setColor(10145074)
    .setTitle(`Ghost Hunter ${name}`)
    .setAuthor(message.author.username,message.author.avatarURL())
    .setThumbnail(link)
    .setDescription(description)
    .setTimestamp()
    message.channel.send({embed})
}

function goodTalk(message,name,link,sm,fs,q)
{
    description = getDescription(name,sm)
    message.react("📬")
    const embed = new Discord.MessageEmbed()
    .setColor(10145074)
    .setTitle(`Ghost Hunter ${name}`)
    .setAuthor(message.author.username,message.author.avatarURL())
    .setThumbnail(link)
    .setDescription(description)
    .setTimestamp()
    message.channel.send({embed})
    checkQuests(sm,fs,q,name)
}

function getDescription(name,sm)
{
    switch(name)
    {
        case "Gabe":
            if((sm.quest==8)&&(sm.task==7)&&(sm.qStarted)&&(sm.obj2==0)){return "Ghost Hunter! It's great to see you again! What's that? You found Riley!? That's amazing! I really thought she was gone for good... Thanks so much for telling me, and please tell her that I miss her!"}else{return "Ghost Hunter! Long time no see... What have you been up to? I hope you're doing just fine in Uni and that you didn't forget who taught you everything!"}
        case "Adam":
            return "Looking good, Ghost Hunter! Wow, I see you got a lot of new Hoverboards... I like to stick to the classic original basic Hoverboard. It speaks to me... I'm not weird, you are."
        case "Liz":
            return "Ghost Hunter! Glad to see you again! It's always a pleasure to talk with you! How's Hypnotize doing? Is he still loyal to you? Helping you out all the time? Well, I am glad to hear that! Take care!"
        case "Jesse":
            return "Yeeeee haw! If it isn't my favorite Ghost Hunter coming to say hello! What you been up to Champ? Champ on the Champion Hoverboard!"
        case "Hans":
            if((sm.quest==8)&&(sm.task==7)&&(sm.qStarted)&&(sm.obj1==0)){return "Came for some more of my magic, Ghost Hunter! Wait, you're lying... You're telling me you met with Ghost Hunter Riley!!?? I can't believe it... Tell her that I took really good care of her ring and that I love her so much! Thanks, Ghost Hunter."}else{return "Well hello again Ghost Hunter! If you came by for another converter upgrade, unfortunatley, I can't help you there. If you came by to see some magic however... AVADA KEDABRA! Ha! I just turned myself into a squirrel! Uhh... could you come back please? I don't know how to turn myself back..."}
        case "Captain Finsley":
            return "Me first mate! How good it is to spot you again in the horizon! I've been plundering and plundering villages and islands and would love if you could come aboard for the next voyage! You will? Great!"
        case "Shelly":
            return "Top of the morning to you, Ghost Hunter! I heard that with the help of my B-L-O-X Hoverboard, you found Ghost Hunter Riley! Hot-diggity-dog! Keep on catching ghosts, Ghost Hunter!"
        case "Riley":
            return "Thank you again, Ghost Hunter, for helping me complete my research and proving my theory! Remember! If we continue defeating bosses... we might clear Uni from all ghosts!"
        case "Luna":
            return ""
        case "Blaze":
            return ""
    }
}

function checkQuests(sm,fs,q,name)
{
    console.log("in check quests")
    if((sm.quest==8)&&(sm.task==7)&&(sm.qStarted)&&(sm.obj1==0)&&(name=="Hans")){console.log("in check quests of hans")
        sm.obj1==1}
    if((sm.quest==8)&&(sm.task==7)&&(sm.qStarted)&&(sm.obj2==0)&&(name=="Gabe")){sm.obj2==1}
    fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})
}