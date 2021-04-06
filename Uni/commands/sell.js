exports.run = async (bot,message,args) => {
    const db = require('../data/db.json')
    const q = require('../data/q.json')
    const fs = require("fs")
    let ez = db[message.guild.id].users[message.member.id]
    let sm = q[message.guild.id].users[message.member.id]
    let cap = parseInt(ez.capacity,10)
    let storage = ez.storage
    if(cap!=storage){
        message.channel.send(`<@${message.member.id}> You cannot sell your 👻 ghosts until your <:pack:825122944204013588> pack is full! **\`${coinToStr(storage)}/${coinToStr(cap)}\`**`)
        message.react("❌");
    }
    else{
        let petArr1 = [ez.pug,ez.fox,ez.cow,ez.pig,ez.mouse,ez.deer,ez.wolf,ez.duck,ez.unicorn,ez.bat,ez.jack];
        let petArr2 = [ez.bear,ez.cat,ez.cyborg,ez.horse,ez.fish,ez.chicken,ez.giraffe,ez.bob,ez.butterfly,ez.peacock,ez.tiger];
        let petArr3 = [ez.flamingo,ez.koala,ez.bot,ez.dino,ez.clownfish,ez.panda,ez.bee,ez.shark,ez.steve,ez.rabbit,ez.rex];
        let ex1 = getExchangeRate(petArr1)
        let ex2 = getExchangeRate(petArr2)
        let ex3 = getExchangeRate(petArr3)
        let exchange = ex1 + ex2 + ex3 + 1
        ez.storage = 0
        let tokens = exchange * storage
        ez.ectoTokens = ez.ectoTokens + tokens
        sm.sellWait = ez.sellTime
        sm.lastSell = new Date().getTime()
        let c2 = 0;
        let i2 = ez.sellTime;
        for(i2 ; i2>59 ; i2-60){c2++}
        message.channel.send(`<@${message.member.id}> You succesfully sold your 👻 ghosts and recieved **${coinToStr(tokens)} <:ectotoken:825122939812315219> ecto-tokens!**\nYou can start catching more 👻 ghosts once your <:pack:825122944204013588> pack finishes recharging: **\`${c2}h${i2}m\`**`)
        message.react("✅");
        checkQuests(sm)
        fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
        fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})
    }
}
exports.help = {
    name: 'sell'
}

function checkQuests(sm)
{
    if((sm.quest==1)&&(sm.task==2)&&(sm.qStarted)){sm.obj1=sm.obj1+1}
}

function getExchangeRate(arr)
{
    let c = 0
    for(let i=0 ; i<arr.length ; i++)
    {
        if(arr[i])
        {
            if(i<4){c = c + 0.1}else{if(i<7){c = c + 0.2}else{if(i<9){c = c + 0.3}else{if(i<10){c = c + 0.4}else{c = c + 0.5}}}}
        }
    }
    return c;
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