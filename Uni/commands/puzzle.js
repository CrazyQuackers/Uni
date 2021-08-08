const Discord = require('discord.js')

exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const q = require('../../data/q.json')
    let sm = q[message.guild.id].users[message.member.id]
    if(sm.quest!=9){return}
    if(args.length>0)
    {
        switch(args[0])
        {
            case "find":
                if((sm.qStarted)&&(sm.obj1==0)){if((sm.task==1)||(sm.task==4)||(sm.task==6)||(sm.task==9)||(sm.task==12)){PuzzleFind(message,sm,fs,q,args)}else{message.channel.send(`<@${message.member.id}> You can not look for a 🎯 puzzle right now.`)}}else{message.channel.send(`<@${message.member.id}> You can not look for a 🎯 puzzle right now.`)}
                break;
            case "read":
                if(sm.obj1==1){if((sm.task==1)||(sm.task==4)||(sm.task==6)||(sm.task==9)||(sm.task==12)){PuzzleRead(message,sm)}else{message.channel.send(`<@${message.member.id}> You can't read a 🎯 puzzle before finding one!`)}}else{message.channel.send(`<@${message.member.id}> You can't read a 🎯 puzzle before finding one!`)}
                break;
            case "solve":
                if((sm.obj1==1)&&(sm.obj2==0)){if((sm.task==1)||(sm.task==4)||(sm.task==6)||(sm.task==9)||(sm.task==12)){PuzzleSolve(message,sm,fs,q,args)}else{message.channel.send(`<@${message.member.id}> You can not solve a 🎯 puzzle at the moment.`)}}else{message.channel.send(`<@${message.member.id}> You can not solve a 🎯 puzzle at the moment.`)}
                break;
            default:
                message.channel.send(`<@${message.member.id}>\n\n🎯 __**Puzzles**__ 🎯\n\n• \`%puzzle find <biome>\` - *Find a puzzle*\n• \`%puzzle read\` - *Read a puzzle*\n• \`%puzzle solve <answer>\` - *Solve a puzzle*`)
                break;
        }
    }else{message.channel.send(`<@${message.member.id}>\n\n🎯 __**Puzzles**__ 🎯\n\n• \`%puzzle find <biome>\` - *Find a puzzle*\n• \`%puzzle read\` - *Read a puzzle*\n• \`%puzzle solve <answer>\` - *Solve a puzzle*`)}
}
exports.help = {
    name: 'puzzle'
}

function PuzzleSolve(message,sm,fs,q,args)
{
    if(args.length<2){message.channel.send(`<@${message.member.id}> The correct sytax for this command is \`%puzzle solve <answer>\`.`)}else{
        switch(sm.task)
        {
            case 1:
                if(args[1]=="23"){SuccessfulSolve(message,sm,fs,q,"⛏️ Mine")}else{message.channel.send(`<@${message.member.id}> You did not solve the 🎯 puzzle correctly.`)}
                break;
            case 4:
                break;
            case 6:
                break;
            case 9:
                break;
            case 12:
                break;
        }
    }
}

function SuccessfulSolve(message,sm,fs,q,biome)
{
    message.delete()
    message.channel.send(`<@${message.member.id}> You solved **The 🎯 Puzzle** in The ${biome} biome!`)
    sm.obj2=1
    fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})
}

function PuzzleRead(message,sm)
{
    message.react("📬")
    switch(sm.task)
    {
        case 1:
            message.author.send(`<@${message.member.id}>\n\n🎯 **The Mine Puzzle!** 🎯\n\n**\`What is 5 + 2 * 9 ?\`**`)
            break;
        case 4:
            break;
        case 6:
            break;
        case 9:
            break;
        case 12:
            break;
    }
}

function PuzzleFind(message,sm,fs,q,args)
{
    if(args.length<2){message.channel.send(`<@${message.member.id}> The correct sytax for this command is \`%puzzle find <biome>\`.`)}else{
        switch(sm.task)
        {
            case 1:
                if(args[1]=="mine"){SuccessfulFind(message,sm,fs,q,"⛏️ Mine")}else{message.channel.send(`<@${message.member.id}> You did not find a 🎯 puzzle in The ⛏️ Mine.`)}
                break;
            case 4:
                break;
            case 6:
                break;
            case 9:
                break;
            case 12:
                break;
        }
    }
}

function SuccessfulFind(message,sm,fs,q,biome)
{
    message.channel.send(`<@${message.member.id}> You found **a 🎯 puzzle** in The ${biome} biome!`)
    sm.obj1=1
    fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})
}