exports.run = async (bot,message,args) => {
    const db = require('../../data/db.json')
    const q = require('../../data/q.json')
    const fs = require("fs")
    let ez = db[message.guild.id].users[message.member.id]
    let sm = q[message.guild.id].users[message.member.id]
    let cap = ez.capacity
    let storage = ez.storage
    if(cap!=storage){
        message.channel.send(`<@${message.member.id}> You cannot sell your 👻 ghosts until your <:pack:825122944204013588> pack is full! **\`${coinToStr(storage)}/${coinToStr(cap)}\`**`)
        message.react("❌");
    }
    else{
        let petArr1 = [ez.pug,ez.fox,ez.cow,ez.pig,ez.mouse,ez.deer,ez.wolf,ez.duck,ez.unicorn,ez.bat,ez.jack,sm.rainwave];
        let petArr2 = [ez.bear,ez.cat,ez.cyborg,ez.horse,ez.fish,ez.chicken,ez.giraffe,ez.bob,ez.butterfly,ez.peacock,ez.tiger];
        let petArr3 = [ez.flamingo,ez.koala,ez.bot,ez.dino,ez.clownfish,ez.panda,ez.bee,ez.shark,ez.steve,ez.rabbit,ez.rex];
        let petArr4 = [sm.hypno,sm.atom,sm.tree,sm.george,sm.sludge,sm.subject,sm.king,sm.mag]
        let ex1 = getExchangeRate(petArr1,true)
        let ex2 = getExchangeRate(petArr2,true)
        let ex3 = getExchangeRate(petArr3,true)
        let ex4 = getExchangeRate(petArr4,false)
        let exchange = ex1 + ex2 + ex3 + ex4 + 1
        ez.storage = 0
        let tokens = exchange * storage
        tokens = Math.round(tokens)
        ez.ectoTokens = ez.ectoTokens + tokens
        tokens = decreaseNumberLength(tokens)
        sm.sellWait = ez.sellTime
        sm.lastSell = new Date().getTime()
        let c2 = 0;
        let i2 = ez.sellTime;
        for(i2 ; i2>59 ; i2-=60){c2++}
        message.channel.send(`<@${message.member.id}> You succesfully sold your 👻 ghosts and recieved **${tokens} <:ectotoken:825122939812315219> Ecto-Tokens!**\nYou can start catching more 👻 ghosts once your <:pack:825122944204013588> pack finishes recharging: **\`${c2}h${i2}m\`**`)
        message.react("✅");
        checkQuests(sm,tokens)
        fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){let pog = 1}})
        fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})
    }
}
exports.help = {
    name: 'sell'
}

function checkQuests(sm,tokens)
{
    if((sm.quest==1)&&(sm.task==2)&&(sm.qStarted)){sm.obj1=1}
    if((sm.quest==8)&&(sm.task==6)&&(sm.qStarted)){sm.obj1+=tokens}
    if((sm.quest==10)&&(sm.task==4)&&(sm.qStarted)){sm.obj1=1}
}

function getExchangeRate(arr,n)
{
    let c = 0
    for(let i=0 ; i<arr.length ; i++){if(arr[i]){if(n){if(i<4){c = c + 0.1}else{if(i<7){c = c + 0.2}else{if(i<9){c = c + 0.3}else{if(i<10){c = c + 0.4}else{if(i<11){c = c + 0.5}else{c = c + 1}}}}}}else{c = c + 0.3}}}
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

function decreaseNumberLength(n)
{
    if(n>=1000)
    {
        if(n>=1000000)
        {
            if(n>=1000000000)
            {
                if(n>=1000000000000)
                {
                    if(n>=1000000000000000)
                    {
                        n/=1000000000000000;
                        return(`${accountForDecimal(n)} Quadrillion`);
                    }
                    n/=1000000000000;
                    return(`${accountForDecimal(n)} Trillion`);
                }
                n/=1000000000;
                return(`${accountForDecimal(n)} Billion`);
            }
            n/=1000000;
            return(`${accountForDecimal(n)} Million`);
        }
        n/=1000;
        return(`${accountForDecimal(n)} Thousand`);
    }
    return(`${n}`);
}

function accountForDecimal(n)
{
    let str = n.toString()
    let arr = str.split('.')
    arr[0] = coinToStr(arr[0])
    if(arr.length>1){arr[1] = removeAfter2(arr[1])
        return(`${arr[0]}.${arr[1]}`)}
    return arr[0];
}

function removeAfter2(str)
{
    if(str[1]){return(`${str[0]}${str[1]}`)}return(`${str[0]}`)
}