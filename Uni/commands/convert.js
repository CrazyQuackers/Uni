const { send } = require("process")

exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const db = require('../../data/db.json')
    const q = require('../../data/q.json')
    let ez = db[message.guild.id].users[message.member.id]
    let sm = q[message.guild.id].users[message.member.id]
    if(sm.converter==0)
    {
        message.react("❌")
        message.channel.send(`<@${message.member.id}> You haven't unlocked this feature yet! Reach 📖 Quest #5, Task #2! **\`Q${sm.quest}.T${sm.task}/Q5.T2\`**`)
    }
    if(sm.converter==1)
    {
        if(ez.ectoTokens<10000000)
        {
            message.react("❌")
            message.channel.send(`<@${message.member.id}> You don't have enough <:ectotoken:825122939812315219> Ecto-Tokens to complete a <:gems:825122942413045791> Gem Convertion right now. **\`${coinToStr(ez.ectoTokens)}/10,000,000\`**`)
        }
        else
        {
            message.react("✅")
            ez.ectoTokens-=10000000
            ez.gems++;
            message.channel.send(`<@${message.member.id}> You recieved **1** <:gems:825122942413045791> Gem!`)
            checkQuests(sm,fs,q,10000000)
        }
    }
    if(sm.converter==2)
    {
        if(ez.ectoTokens<5000000)
        {
            message.react("❌")
            message.channel.send(`<@${message.member.id}> You don't have enough <:ectotoken:825122939812315219> Ecto-Tokens to complete a <:gems:825122942413045791> Gem Convertion right now. **\`${coinToStr(ez.ectoTokens)}/5,000,000\`**`)
        }
        else
        {
            message.react("✅")
            ez.ectoTokens-=5000000
            ez.gems++;
            message.channel.send(`<@${message.member.id}> You recieved **1** <:gems:825122942413045791> Gem!`)
        }
    }
    if(sm.converter==3)
    {
        if((args.length>=1)&&(args[0]=="all"))
        {
            if(ez.ectoTokens<1000000)
            {
                message.react("❌")
                message.channel.send(`<@${message.member.id}> You don't have enough <:ectotoken:825122939812315219> Ecto-Tokens to complete a <:gems:825122942413045791> Gem Convertion right now. **\`${coinToStr(ez.ectoTokens)}/1,000,000\`**`)
            }
            else
            {
                let i=0
                let tokens=ez.ectoTokens
                while(tokens>=1000000)
                {
                    tokens-=1000000
                    i++
                }
                message.react("✅")
                ez.ectoTokens=tokens
                ez.gems+=i
                message.channel.send(`<@${message.member.id}> You recieved **${i}** <:gems:825122942413045791> Gems!`)
                checkQuests(sm,fs,q,(i*1000000))
            }
        }
        else
        {
            if(ez.ectoTokens<1000000)
            {
                message.react("❌")
                message.channel.send(`<@${message.member.id}> You don't have enough <:ectotoken:825122939812315219> Ecto-Tokens to complete a <:gems:825122942413045791> Gem Convertion right now. **\`${coinToStr(ez.ectoTokens)}/1,000,000\`**`)
            }
            else
            {
                message.react("✅")
                ez.ectoTokens-=1000000
                ez.gems++;
                message.channel.send(`<@${message.member.id}> You recieved **1** <:gems:825122942413045791> Gem!\n💡 Tip - You can use the command **%convert all** to convert all of your <:ectotoken:825122939812315219> Ecto-Tokens to <:gems:825122942413045791> Gems!`)
                checkQuests(sm,fs,q,1000000)
            }
        }
    }
    fs.writeFile("./data/db.json", JSON.stringify(db,null,4), function(error){if(error){let pog = 1}})
}
exports.help = {
    name: 'convert'
}

function checkQuests(sm,fs,q,tokens)
{
    if((sm.quest==5)&&(sm.task==2)&&(sm.qStarted)){sm.obj1=1}
    if((sm.quest==6)&&(sm.task==17)&&(sm.qStarted)){sm.obj3+=tokens}
    if((sm.quest==7)&&(sm.task==10)&&(sm.qStarted)){sm.obj1+=tokens}
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