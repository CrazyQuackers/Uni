const { parse } = require('path')

exports.run = async (bot,message,args) => {
    const db = require('../../data/db.json')
    const q = require('../../data/q.json')
    const fs = require("fs")
    let ez = db[message.guild.id].users[message.member.id]
    let sm = q[message.guild.id].users[message.member.id]
    if(args[0]){fullCatchFunction(ez,fs,db,sm,message,args,q)}
    else{message.channel.send(`<@${message.member.id}>\nUse the command **%catch <biome>** to specify in which 🌐 biome the 👻 ghost you want to catch is.\nFor example, if you use the command **%catch forest** you will catch either a 🧚 Fairy or an 🦉 Owl.\nYou can also speed up the catching process by using the command **%catch <biome> <number of catches>**`)}
}
exports.help = {
    name: 'catch'
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

function fullCatchFunction(ez,fs,db,sm,message,args,q)
{
    let storage = ez.storage
    let capacity = parseInt(ez.capacity,10)
    let c = 0
    let i = 0
    let p = 0
    let arr = []
    let g1 = 0
    let g2 = 0
    let i1 = 0
    let i2 = 0
    let i3 = 0
    let f = 0
    let a = whichAntenna(args[0])
    if(ez.antenna>=a){
        if(storage==capacity){message.channel.send(`<@${message.member.id}> Your <:pack:825122944204013588> pack is full!\nUse the **%sell** command to empty your <:pack:825122944204013588> pack before trying to catch another 👻 ghost!`)}else{
            if(Math.floor(new Date().getTime() - sm.lastSell) / (1000 * 60 * sm.sellWait) < 1){
                let h = (Math.floor((Math.abs(new Date().getTime() - sm.lastSell))/(1000 * 60 * 60)))
                let m = (Math.round((new Date().getTime() - sm.lastSell)/(1000 * 60)))
                for(i = sm.sellWait ; i>59 ; i-=60){c++}
                if(i==0){
                    h = c - h - 1
                    m = 60 - m
                }else{
                    if(i<m){
                        h = c - h - 1
                        m = 60 - m + i
                    }else{
                        h = c - h
                        m = i - m
                    }
                }
                if(h<10){h = `0${h}`}
                if(m<10){m = `0${m}`}
                let str = `\`${h}h${m}m\``
                message.channel.send(`<@${message.member.id}> Your <:pack:825122944204013588> pack hasn't finished **recharging!**\nTime until you can catch 👻 ghosts: **${str}**`)
            }else{
                if((args.length>1)&&(isNumeric(args[1]))&&(parseInt(args[1],10)!=1)){
                    let num = parseInt(args[1],10)
                    let ghost2 = secondGhost(args[0])
                    if(((num-1)*ghost2+storage)<capacity){
                        for(p=0 ; p<num ; p++){
                            storage = ez.storage
                            arr = mainCatch(ez,fs,db,args,storage,capacity)
                            if((arr[0]=="a 🧚 **Fairy!**")||(arr[0]=="a 🤵‍♂️ **Businessman!**")||(arr[0]=="a 🧑‍🔧 **Mechanic!**")||(arr[0]=="a 🛍️ **Paper Bag!**")||(arr[0]=="a 👷‍♀️ **Worker!**")||(arr[0]=="a <:bandit:825122917930500147> **Bandit!**")||(arr[0]=="a 👨‍🔬 **Scientist!**")||(arr[0]=="a 🧑‍🏭 **Miner!**")||(arr[0]=="a <:pharaoh:825122944514523226> **Pharaoh!**")||(arr[0]=="a 🏴‍☠️ **Pirate!**Z9,500")||(arr[0]=="a 🤿 **Diver!**Z17,500")||(arr[0]=="an <:islander:825122941963993099> **Islander!**")||(arr[0]=="an <:explorer:825123592290172939> **Explorer!**")){g1++}else{g2++}
                            if(arr[2]=="<:gems:825122942413045791> gems"){i1+=arr[1]}else{if(arr[2]=="🔩 antenna parts"){i2+=arr[1]}else{i3+=arr[1]}}
                            f+=arr[3]
                        }
                        let b = multipleCatchArr(args[0])
                        message.channel.send(`<@${message.member.id}>\n\nYou caught **${coinToStr(g1)}** ${b[0]}\nYou caught **${coinToStr(g2)}** ${b[1]}\n\n__You also found:__\n\n+ **${coinToStr(i1)}** <:gems:825122942413045791> gems\n+ **${coinToStr(i2)}** 🔩 antenna parts\n+ **${coinToStr(i3)}** ${arr[4]}\n+ **${coinToStr(f)}** <:pack:825122944204013588> pack storage **\`${coinToStr(ez.storage)}/${coinToStr(ez.capacity)}\`**`)
                        checkQuests(args,num,q,sm,g2,fs,g1,f)
                    }else{message.channel.send(`<@${message.member.id}> Your <:pack:825122944204013588> pack may not have enough space to catch **${coinToStr(num)}** 👻 ghosts right now.`)}
                }else{
                    let arr = mainCatch(ez,fs,db,args,storage,capacity)
                    message.channel.send(`<@${message.member.id}> You caught ${arr[0]}\n\n__You also found:__\n\n+ **${coinToStr(arr[1])}** ${arr[2]}\n+ **${coinToStr(arr[3])}** <:pack:825122944204013588> pack storage **\`${coinToStr(ez.storage)}/${coinToStr(ez.capacity)}\`**`)
                    if((arr[0]=="a 🧚 **Fairy!**")||(arr[0]=="a 🤵‍♂️ **Businessman!**")||(arr[0]=="a 🧑‍🔧 **Mechanic!**")||(arr[0]=="a 🛍️ **Paper Bag!**")||(arr[0]=="a 👷‍♀️ **Worker!**")||(arr[0]=="a <:bandit:825122917930500147> **Bandit!**")||(arr[0]=="a 👨‍🔬 **Scientist!**")||(arr[0]=="a 🧑‍🏭 **Miner!**")||(arr[0]=="a <:pharaoh:825122944514523226> **Pharaoh!**")||(arr[0]=="a 🏴‍☠️ **Pirate!**Z9,500")||(arr[0]=="a 🤿 **Diver!**Z17,500")||(arr[0]=="an <:islander:825122941963993099> **Islander!**")||(arr[0]=="an <:explorer:825123592290172939> **Explorer!**")){g1++}else{g2++}
                    checkQuests(args,1,q,sm,g2,fs,g1,arr[3])
                }
            }
        }
    }else{message.channel.send(`<@${message.member.id}> You cannot catch 👻 ghosts in the ${whichBiome(args[0])} until your 📡 antenna level is **\`${ez.antenna}/${a}\`**`)}
}

function checkQuests(args,num,q,sm,g2,fs,g1,f)
{
    if((args[0]=="forest")&&(sm.quest==1)&&(sm.task==1)&&(sm.qStarted)){sm.obj1=sm.obj1+num}
    if((args[0]=="forest")&&(sm.quest==1)&&(sm.task==3)&&(sm.qStarted)){sm.obj1=sm.obj1+g2}
    if((args[0]=="city")&&(sm.quest==2)&&(sm.task==1)&&(sm.qStarted)){sm.obj1=sm.obj1+g1
    sm.obj2=sm.obj2+g2}
    if((sm.quest==2)&&(sm.task==2)&&(sm.qStarted)){sm.obj1=sm.obj1+f}
    if((args[0]=="junkyard")&&(sm.quest==2)&&(sm.task==5)&&(sm.qStarted)){sm.obj1=sm.obj1+g1
    sm.obj2=sm.obj2+g2}
    if((args[0]=="sewers")&&(sm.quest==2)&&(sm.task==8)&&(sm.qStarted)){sm.obj1=sm.obj1+g1
    sm.obj2=sm.obj2+g2}
    if((args[0]=="construction")&&(sm.quest==2)&&(sm.task==10)&&(sm.qStarted)){sm.obj1=sm.obj1+g1
    sm.obj2=sm.obj2+g2}
    if((sm.quest==2)&&(sm.task==11)&&(sm.qStarted)){if(args[0]=="city"){sm.obj1=sm.obj1+g2}else{if(args[0]=="junkyard"){sm.obj2=sm.obj2+g2}else{if(args[0]=="sewers"){sm.obj3=sm.obj3+g2}else{if(args[0]=="construction"){sm.obj4=sm.obj4+g2}}}}}
    fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){console.log(error)}})
}

function mainCatch(ez,fs,db,args,storage,capacity)
{
    let object = (Math.floor(Math.random()*100))+1;
    let ghost = whichGhost(object,args[0])
    let ghostArr = ghost.split('Z');
    ghost = ghostArr[0]
    let fill = ghostArr[1]
    fill = parseInt(fill,10)
    let item = ""
    let amount = 0
    object = (Math.floor(Math.random()*4))+1;
    if((object==1)||(object==2)){
        item = "<:gems:825122942413045791> gems"
        amount = howMuchItems(args[0],item,ez)
        ez.gems = ez.gems + amount
    }else{if(object==3){
        item = ghostArr[2]
        amount = howMuchItems(args[0],item,ez)
    }else{
        item = "🔩 antenna parts"
        amount = howMuchItems(args[0],item,ez)
    }}
    storage = storage + fill
    if(storage>capacity){ez.storage = capacity}else{ez.storage = storage}
    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){console.log(error)}})
    return [ghost,amount,item,fill,ghostArr[2]]
}

function multipleCatchArr(str)
{
    switch(str)
    {
        case "forest":
            return ["🧚 **Fairies!**","🦉 **Owls!**"]
        case "city":
            return ["🤵‍♂️ **Businessmens!**","🐈‍⬛ **Street Cats!**"]
        case "junkyard":
            return ["🧑‍🔧 **Mechanics!**","🗑️ **Garbage Bins!**"]
        case "sewers":
            return ["🛍️ **Paper Bags!**","🐀 **Rats!**"]
        case "construction":
            return ["👷‍♀️ **Workers!**","<:pigeon:825122931721371690> **Pigeons!**"]
        case "wild":
            return ["<:bandit:825122917930500147> **Bandits!**","🤠 **Cowboys!**"]
        case "area":
            return ["👨‍🔬 **Scientists!**","👽 **Zorgs!**"]
        case "mine":
            return ["🧑‍🏭 **Miners!**","🪨 **Rocks!**"]
        case "pyramids":
            return ["<:pharaoh:825122944514523226> **Pharaohs!**","<:mummy:825122924318556200> **Mummies!**"]
        case "beach":
            return ["🏴‍☠️ **Pirates!**","🦜 **Parrots!**"]
        case "underwater":
            return ["🤿 **Divers!**","🧜‍♀️ **Mermaids!**"]
        case "volcano":
            return ["<:islander:825122941963993099> **Islanders!**","<:magmamonster:825122940290859009> **Magma Monsters!**"]
        case "ice":
            return ["<:explorer:825123592290172939> **Explorers!**","🐧 **Penguins!**"]
    }
}

function secondGhost(str)
{
    switch(str)
    {
        case "forest":
            return 15
        case "city":
            return 30
        case "junkyard":
            return 75
        case "sewers":
            return 190
        case "construction":
            return 450
        case "wild":
            return 825
        case "area":
            return 1650
        case "mine":
            return 3000
        case "pyramids":
            return 6750
        case "beach":
            return 14500
        case "underwater":
            return 26500
        case "volcano":
            return 67500
        case "ice":
            return 150000
    }
}

function isNumeric(str)
{
    return !isNaN(str)
}

function howMuchItems(str,item,ez)
{
    let n = 0
    let n2 = 0
    switch(str)
    {
        case "forest":
            if(item=="<:gems:825122942413045791> gems"){return (Math.floor(Math.random()*6))+1;}
            n = (Math.floor(Math.random()*2))+1;
            if(item=="🔩 antenna parts"){ez.parts = ez.parts + n}else{ez.acorns = ez.acorns + n}
            return n;
        case "city":
            if(item=="<:gems:825122942413045791> gems"){return (Math.floor(Math.random()*12))+1;}
            n = (Math.floor(Math.random()*2))+1;
            if(item=="🔩 antenna parts"){ez.parts = ez.parts + n}else{ez.newspapers = ez.newspapers + n}
            return n;
        case "junkyard":
            if(item=="<:gems:825122942413045791> gems"){return (Math.floor(Math.random()*15))+1;}
            n = (Math.floor(Math.random()*3))+1;
            n2 = (Math.floor(Math.random()*2))+1;
            if(item=="🔩 antenna parts"){ez.parts = ez.parts + n
                return n}
            ez.tires = ez.tires + n2
            return n2
        case "sewers":
            if(item=="<:gems:825122942413045791> gems"){return (Math.floor(Math.random()*20))+1;}
            n = (Math.floor(Math.random()*4))+1;
            n2 = (Math.floor(Math.random()*2))+1;
            if(item=="🔩 antenna parts"){ez.parts = ez.parts + n
                return n}
            ez.socks = ez.socks + n2
            return n2
        case "construction":
            if(item=="<:gems:825122942413045791> gems"){return (Math.floor(Math.random()*50))+1;}
            n = (Math.floor(Math.random()*2))+1;
            ez.hammers = ez.hammers + n
            return n
        case "wild":
            if(item=="<:gems:825122942413045791> gems"){return (Math.floor(Math.random()*30))+1;}
            n = (Math.floor(Math.random()*5))+1;
            n2 = (Math.floor(Math.random()*3))+1;
            if(item=="🔩 antenna parts"){ez.parts = ez.parts + n
                return n}
            ez.badges = ez.badges + n2
            return n2
        case "area":
            if(item=="<:gems:825122942413045791> gems"){return (Math.floor(Math.random()*40))+1;}
            n = (Math.floor(Math.random()*6))+1;
            n2 = (Math.floor(Math.random()*3))+1;
            if(item=="🔩 antenna parts"){ez.parts = ez.parts + n
                return n}
            ez.meteorites = ez.meteorites + n2
            return n2
        case "mine":
            if(item=="<:gems:825122942413045791> gems"){return (Math.floor(Math.random()*55))+1;}
            n = (Math.floor(Math.random()*7))+1;
            n2 = (Math.floor(Math.random()*3))+1;
            if(item=="🔩 antenna parts"){ez.parts = ez.parts + n
                return n}
            ez.gold = ez.gold + n2
            return n2
        case "pyramids":
            if(item=="<:gems:825122942413045791> gems"){return (Math.floor(Math.random()*100))+1;}
            n = (Math.floor(Math.random()*4))+1;
            ez.artifacts = ez.artifacts + n
            return n
        case "beach":
            if(item=="<:gems:825122942413045791> gems"){return (Math.floor(Math.random()*80))+1;}
            n = (Math.floor(Math.random()*10))+1;
            n2 = (Math.floor(Math.random()*5))+1;
            if(item=="🔩 antenna parts"){ez.parts = ez.parts + n
                return n}
            ez.doubloons = ez.doubloons + n2
            return n2
        case "underwater":
            if(item=="<:gems:825122942413045791> gems"){return (Math.floor(Math.random()*90))+1;}
            n = (Math.floor(Math.random()*15))+1;
            n2 = (Math.floor(Math.random()*6))+1;
            if(item=="🔩 antenna parts"){ez.parts = ez.parts + n
                return n}
            ez.pearls = ez.pearls + n2
            return n2
        case "volcano":
            if(item=="<:gems:825122942413045791> gems"){return (Math.floor(Math.random()*120))+1;}
            n = (Math.floor(Math.random()*20))+1;
            n2 = (Math.floor(Math.random()*7))+1;
            if(item=="🔩 antenna parts"){ez.parts = ez.parts + n
                return n}
            ez.diamonds = ez.diamonds + n2
            return n2
        case "ice":
            if(item=="<:gems:825122942413045791> gems"){return (Math.floor(Math.random()*200))+1;}
            n = (Math.floor(Math.random()*8))+1;
            ez.tusks = ez.tusks + n
            return n
    }
}

function whichGhost(num,str)
{
    if(num<=65){
        switch(str){
            case "forest":
                return "a 🧚 **Fairy!**Z10Z<:acorn:825122942660509707> acorns"
            case "city":
                return "a 🤵‍♂️ **Businessman!**Z20Z📰 newspapers"
            case "junkyard":
                return "a 🧑‍🔧 **Mechanic!**Z50Z<:tire:825122944128385054> tires"
            case "sewers":
                return "a 🛍️ **Paper Bag!**Z125Z🧦 socks"
            case "construction":
                return "a 👷‍♀️ **Worker!**Z300Z🔨 hammers"
            case "wild":
                return "a <:bandit:825122917930500147> **Bandit!**Z550Z<:sherrifbadge:825122941637230613> sherrif badges"
            case "area":
                return "a 👨‍🔬 **Scientist!**Z1100Z<:meteorite:825122930047320115> meteorites"
            case "mine":
                return "a 🧑‍🏭 **Miner!**Z2000Z<:goldbar:825122939006746625> gold bars"
            case "pyramids":
                return "a <:pharaoh:825122944514523226> **Pharaoh!**Z4500Z<:artifact:825122914210414592> artifacts"
            case "beach":
                return "a 🏴‍☠️ **Pirate!**Z9500Z<:doubloon:825122941746151434> doubloons"
            case "underwater":
                return "a 🤿 **Diver!**Z17500Z<:pearl:825122938457686057> pearls"
            case "volcano":
                return "an <:islander:825122941963993099> **Islander!**Z45000Z💎 diamonds"
            case "ice":
                return "an <:explorer:825123592290172939> **Explorer!**Z100000Z<:tusk:825122936927027289> ancient tusks"
        }
    }else{
        switch(str){
            case "forest":
                return "an 🦉 **Owl!**Z15Z<:acorn:825122942660509707> acorns"
            case "city":
                return "a 🐈‍⬛ **Street Cat!**Z30Z📰 newspapers"
            case "junkyard":
                return "a 🗑️ **Garbage Bin!**Z75Z<:tire:825122944128385054> tires"
            case "sewers":
                return "a 🐀 **Rat!**Z190Z🧦 socks"
            case "construction":
                return "a <:pigeon:825122931721371690> **Pigeon!**Z450Z🔨 hammers"
            case "wild":
                return "a 🤠 **Cowboy!**Z825Z<:sherrifbadge:825122941637230613> sherrif badges"
            case "area":
                return "a 👽 **Zorg!**Z1650Z<:meteorite:825122930047320115> meteorites"
            case "mine":
                return "a 🪨 **Rock!**Z3000Z<:goldbar:825122939006746625> gold bars"
            case "pyramids":
                return "a <:mummy:825122924318556200> **Mummy!**Z6750Z<:artifact:825122914210414592> artifacts"
            case "beach":
                return "a 🦜 **Parrot!**Z14500Z<:doubloon:825122941746151434> doubloons"
            case "underwater":
                return "a 🧜‍♀️ **Mermaid!**Z26500Z<:pearl:825122938457686057> pearls"
            case "volcano":
                return "a <:magmamonster:825122940290859009> **Magma Monster!**Z67500Z💎 diamonds"
            case "ice":
                return "a 🐧 **Penguin!**Z150000Z<:tusk:825122936927027289> ancient tusks"
        }
    }
}

function whichBiome(str)
{
    switch(str)
    {
        case "forest":
            return "🏕️ forest biome"
        case "city":
            return "🏙️ city biome"
        case "junkyard":
            return "💡 junkyard biome"
        case "sewers":
            return "<:manhole:825122943133941821> sewers biome"
        case "construction":
            return "🏗️ construction site biome"
        case "wild":
            return "🏜️ wild west biome"
        case "area":
            return "☄️ area 51 biome"
        case "mine":
            return "⛏️ mine biome"
        case "pyramids":
            return "<:pyramid:825122937236357164> pyramids biome"
        case "beach":
            return "🏖️ beach biome"
        case "underwater":
            return "💦 underwater biome"
        case "volcano":
            return "🌋 volcano biome"
        case "ice":
            return "🧊 ice cave biome"
    }
}

function whichAntenna(str)
{
    switch(str)
    {
        case "forest":
            return 1
        case "city":
            return 2
        case "junkyard":
            return 3
        case "sewers":
            return 4
        case "construction":
            return 4
        case "wild":
            return 5
        case "area":
            return 6
        case "mine":
            return 7
        case "pyramids":
            return 7
        case "beach":
            return 8
        case "underwater":
            return 9
        case "volcano":
            return 10
        case "ice":
            return 10
    }
}