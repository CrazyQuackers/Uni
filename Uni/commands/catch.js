exports.run = async (bot,message,args) => {
    const db = require('../../data/db.json')
    const q = require('../../data/q.json')
    const fs = require("fs")
    let ez = db[message.guild.id].users[message.member.id]
    let sm = q[message.guild.id].users[message.member.id]
    if(args[0]){fullCatchFunction(ez,fs,db,sm,message,args,q,sm.gemDrop)}
    else{message.channel.send(`<@${message.member.id}> Use the command **%catch <biome>** to specify in which 🌐 biome the 👻 ghost you want to catch is.\nFor example, if you use the command **%catch forest** you will catch either a 🧚 Fairy or an 🦉 Owl.\nYou can also speed up the catching process by using the command **%catch <biome> <number of catches>**\nUsing the command **%catch <biome> all** will continue catching 👻 ghosts until you run out of space in your <:pack:825122944204013588> pack!`)}
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

function fullCatchFunction(ez,fs,db,sm,message,args,q,gemDrop)
{
    if(realAreaTest(args[0])){message.channel.send(`<@${message.member.id}> The 🌐 biome you've written doesn't exist!\nUse the command **%biomes** to see all the possible 🌐 biomes!`)
        message.react("❌")
        return;}
    let storage = ez.storage
    let capacity = ez.capacity
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
    if((a=="🏗️ Construction Site")||(a=="<:pyramid:825122937236357164> Pyramids")||(a=="🧊 Ice Cave")){if(((a=="🏗️ Construction Site")&&(ez.constructionOpen))||((a=="<:pyramid:825122937236357164> Pyramids")&&(ez.pyramidsOpen))||((a=="🧊 Ice Cave")&&(ez.iceOpen))){a=0}else{didntUnlock(a,message)
            return;}}
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
                if((args.length>1)&&(args[1]=="all")){
                    let z = 0
                    while(ez.storage<capacity){
                        arr = mainCatch(ez,fs,db,args,ez.storage,capacity,gemDrop)
                        if((arr[0]=="a 🧚 **Fairy!**")||(arr[0]=="a 🤵‍♂️ **Businessman!**")||(arr[0]=="a 🧑‍🔧 **Mechanic!**")||(arr[0]=="a 🛍️ **Paper Bag!**")||(arr[0]=="a 👷‍♀️ **Worker!**")||(arr[0]=="a <:bandit:825122917930500147> **Bandit!**")||(arr[0]=="a 👨‍🔬 **Scientist!**")||(arr[0]=="a 🧑‍🏭 **Miner!**")||(arr[0]=="a <:pharaoh:825122944514523226> **Pharaoh!**")||(arr[0]=="a 🏴‍☠️ **Pirate!**")||(arr[0]=="a 🤿 **Diver!**")||(arr[0]=="an <:islander:825122941963993099> **Islander!**")||(arr[0]=="an <:explorer:825123592290172939> **Explorer!**")){g1++}else{g2++}
                        if(arr[2]=="<:gems:825122942413045791> gems"){i1+=arr[1]}else{if(arr[2]=="🔩 antenna parts"){i2+=arr[1]}else{i3+=arr[1]}}
                        f+=arr[3]
                        z++
                    }let b = multipleCatchArr(args[0])
                    message.channel.send(`<@${message.member.id}>You caught **${coinToStr(z)} 👻 ghosts** in total!\n\nYou caught **${coinToStr(g1)}** ${b[0]}\nYou caught **${coinToStr(g2)}** ${b[1]}\n\n__You also found:__\n\n+ **${coinToStr(i1)}** <:gems:825122942413045791> gems\n+ **${coinToStr(i2)}** 🔩 antenna parts\n+ **${coinToStr(i3)}** ${arr[4]}\n+ **${coinToStr(f)}** <:pack:825122944204013588> pack storage **\`${coinToStr(ez.storage)}/${coinToStr(ez.capacity)}\`**`)
                    checkQuests(args,z,q,sm,g2,fs,g1,f)
                    return;}
                if((args.length>1)&&(isNumeric(args[1]))&&(parseInt(args[1],10)!=1)){
                    let num = parseInt(args[1],10)
                    let p = 0
                    while((ez.storage<capacity)&&(p<num)){
                        p++
                        arr = mainCatch(ez,fs,db,args,ez.storage,capacity,gemDrop)
                        if((arr[0]=="a 🧚 **Fairy!**")||(arr[0]=="a 🤵‍♂️ **Businessman!**")||(arr[0]=="a 🧑‍🔧 **Mechanic!**")||(arr[0]=="a 🛍️ **Paper Bag!**")||(arr[0]=="a 👷‍♀️ **Worker!**")||(arr[0]=="a <:bandit:825122917930500147> **Bandit!**")||(arr[0]=="a 👨‍🔬 **Scientist!**")||(arr[0]=="a 🧑‍🏭 **Miner!**")||(arr[0]=="a <:pharaoh:825122944514523226> **Pharaoh!**")||(arr[0]=="a 🏴‍☠️ **Pirate!**")||(arr[0]=="a 🤿 **Diver!**")||(arr[0]=="an <:islander:825122941963993099> **Islander!**")||(arr[0]=="an <:explorer:825123592290172939> **Explorer!**")){g1++}else{g2++}
                        if(arr[2]=="<:gems:825122942413045791> gems"){i1+=arr[1]}else{if(arr[2]=="🔩 antenna parts"){i2+=arr[1]}else{i3+=arr[1]}}
                        f+=arr[3]
                    }let b = multipleCatchArr(args[0])
                    message.channel.send(`<@${message.member.id}>\n\nYou caught **${coinToStr(g1)}** ${b[0]}\nYou caught **${coinToStr(g2)}** ${b[1]}\n\n__You also found:__\n\n+ **${coinToStr(i1)}** <:gems:825122942413045791> gems\n+ **${coinToStr(i2)}** 🔩 antenna parts\n+ **${coinToStr(i3)}** ${arr[4]}\n+ **${coinToStr(f)}** <:pack:825122944204013588> pack storage **\`${coinToStr(ez.storage)}/${coinToStr(ez.capacity)}\`**`)
                    checkQuests(args,p,q,sm,g2,fs,g1,f)
                }else{
                    let arr = mainCatch(ez,fs,db,args,storage,capacity,gemDrop)
                    message.channel.send(`<@${message.member.id}> You caught ${arr[0]}\n\n__You also found:__\n\n+ **${coinToStr(arr[1])}** ${arr[2]}\n+ **${coinToStr(arr[3])}** <:pack:825122944204013588> pack storage **\`${coinToStr(ez.storage)}/${coinToStr(ez.capacity)}\`**`)
                    if((arr[0]=="a 🧚 **Fairy!**")||(arr[0]=="a 🤵‍♂️ **Businessman!**")||(arr[0]=="a 🧑‍🔧 **Mechanic!**")||(arr[0]=="a 🛍️ **Paper Bag!**")||(arr[0]=="a 👷‍♀️ **Worker!**")||(arr[0]=="a <:bandit:825122917930500147> **Bandit!**")||(arr[0]=="a 👨‍🔬 **Scientist!**")||(arr[0]=="a 🧑‍🏭 **Miner!**")||(arr[0]=="a <:pharaoh:825122944514523226> **Pharaoh!**")||(arr[0]=="a 🏴‍☠️ **Pirate!**")||(arr[0]=="a 🤿 **Diver!**")||(arr[0]=="an <:islander:825122941963993099> **Islander!**")||(arr[0]=="an <:explorer:825123592290172939> **Explorer!**")){g1++}else{g2++}
                    checkQuests(args,1,q,sm,g2,fs,g1,arr[3])
                }
            }
        }
    }else{message.channel.send(`<@${message.member.id}> You cannot catch 👻 ghosts in The ${whichBiome(args[0])} until your 📡 Antenna Level is **\`${ez.antenna}/${a}\`**`)}
}

function checkQuests(args,num,q,sm,g2,fs,g1,f)
{
    if((args[0]=="forest")&&(sm.quest==1)&&(sm.task==1)&&(sm.qStarted)){sm.obj1+=num}
    if((args[0]=="forest")&&(sm.quest==1)&&(sm.task==3)&&(sm.qStarted)){sm.obj1+=g2}
    if((args[0]=="city")&&(sm.quest==2)&&(sm.task==1)&&(sm.qStarted)){sm.obj1+=g1
        sm.obj2+=g2}
    if((sm.quest==2)&&(sm.task==2)&&(sm.qStarted)){sm.obj1+=f}
    if((args[0]=="junkyard")&&(sm.quest==2)&&(sm.task==5)&&(sm.qStarted)){sm.obj1+=g1
        sm.obj2+=g2}
    if((args[0]=="sewers")&&(sm.quest==2)&&(sm.task==8)&&(sm.qStarted)){sm.obj1+=g1
        sm.obj2+=g2}
    if((args[0]=="construction")&&(sm.quest==2)&&(sm.task==10)&&(sm.qStarted)){sm.obj1+=g1
        sm.obj2+=g2}
    if((sm.quest==2)&&(sm.task==11)&&(sm.qStarted)){if(args[0]=="city"){sm.obj1+=g2}else{if(args[0]=="junkyard"){sm.obj2+=g2}else{if(args[0]=="sewers"){sm.obj3+=g2}else{if(args[0]=="construction"){sm.obj4+=g2}}}}}
    if((args[0]=="forest")&&(sm.quest==3)&&(sm.task==1)&&(sm.qStarted)){sm.obj1+=g1
        sm.obj2+=g2}
    if((args[0]=="city")&&(sm.quest==3)&&(sm.task==2)&&(sm.qStarted)){sm.obj1+=g2}
    if((sm.quest==3)&&(sm.task==3)&&(sm.qStarted)){if(args[0]=="forest"){sm.obj1+=g1}if(args[0]=="city"){sm.obj2+=g1}}
    if((args[0]=="junkyard")&&(sm.quest==3)&&(sm.task==4)&&(sm.qStarted)){sm.obj1+=g2}
    if((args[0]=="sewers")&&(sm.quest==3)&&(sm.task==5)&&(sm.qStarted)){sm.obj1+=g1
        sm.obj2+=g2}
    if((args[0]=="wild")&&(sm.quest==4)&&(sm.task==1)&&(sm.qStarted)){sm.obj1+=g1
        sm.obj2+=g2}
    if((sm.quest==4)&&(sm.task==2)&&(sm.qStarted)){if(args[0]=="forest"){sm.obj1+=g1}else{if(args[0]=="junkyard"){sm.obj2+=g1}else{if(args[0]=="wild"){sm.obj3+=g1
                    sm.obj4+=g2}}}}
    if((args[0]=="area")&&(sm.quest==4)&&(sm.task==5)&&(sm.qStarted)){sm.obj1+=g1
        sm.obj2+=g2}
    if((sm.quest==4)&&(sm.task==6)&&(sm.qStarted)){if(args[0]=="sewers"){sm.obj1+=g1}else{if(args[0]=="construction"){sm.obj2+=g1}else{if(args[0]=="area"){sm.obj3+=g1
                    sm.obj4+=g2}}}}
    if((args[0]=="mine")&&(sm.quest==4)&&(sm.task==9)&&(sm.qStarted)){sm.obj1+=g1
        sm.obj2+=g2}
    if((sm.quest==4)&&(sm.task==10)&&(sm.qStarted)){if(args[0]=="city"){sm.obj1+=g1}else{if(args[0]=="sewers"){sm.obj2+=g2}else{if(args[0]=="mine"){sm.obj3+=g1
                    sm.obj4+=g2}}}}
    if((args[0]=="pyramids")&&(sm.quest==4)&&(sm.task==14)&&(sm.qStarted)){sm.obj1+=g1
        sm.obj2+=g2}
    if((sm.quest==4)&&(sm.task==15)&&(sm.qStarted)){if(args[0]=="junkyard"){sm.obj1+=g2}else{if(args[0]=="construction"){sm.obj2+=g2}else{if(args[0]=="pyramids"){sm.obj3+=g1
                    sm.obj4+=g2}}}}
    if((sm.quest==4)&&(sm.task==17)&&(sm.qStarted)){if(args[0]=="wild"){sm.obj1+=g2}if(args[0]=="area"){sm.obj2+=g2}if(args[0]=="mine"){sm.obj3+=g2}if(args[0]=="pyramids"){sm.obj4+=g2}}
    if((sm.quest==5)&&(sm.task==3)&&(sm.qStarted)){if(args[0]=="wild"){sm.obj1+=num}if(args[0]=="area"){sm.obj2+=num}if(args[0]=="mine"){sm.obj3+=num}}
    if((args[0]=="beach")&&(sm.quest==6)&&(sm.task==1)&&(sm.qStarted)){sm.obj1+=g1
        sm.obj2+=g2}
    if((sm.quest==6)&&(sm.task==2)&&(sm.qStarted)){if(args[0]=="city"){sm.obj1+=g1}if(args[0]=="construction"){sm.obj2+=g1}if(args[0]=="beach"){sm.obj3+=g1
            sm.obj4+=g2}}
    if((args[0]=="underwater")&&(sm.quest==6)&&(sm.task==6)&&(sm.qStarted)){sm.obj1+=g1
        sm.obj2+=g2}
    if((sm.quest==6)&&(sm.task==7)&&(sm.qStarted)){if(args[0]=="sewers"){sm.obj1+=g1}if(args[0]=="area"){sm.obj2+=g1}if(args[0]=="underwater"){sm.obj3+=g1
            sm.obj4+=g2}}
    if((args[0]=="volcano")&&(sm.quest==6)&&(sm.task==10)&&(sm.qStarted)){sm.obj1+=g1
        sm.obj2+=g2}
    if((sm.quest==6)&&(sm.task==11)&&(sm.qStarted)){if(args[0]=="wild"){sm.obj1+=g1}if(args[0]=="pyramids"){sm.obj2+=g1}if(args[0]=="volcano"){sm.obj3+=g1}}
    if((args[0]=="ice")&&(sm.quest==6)&&(sm.task==15)&&(sm.qStarted)){sm.obj1+=g1
        sm.obj2+=g2}
    if((sm.quest==6)&&(sm.task==16)&&(sm.qStarted)){if(args[0]=="construction"){sm.obj1+=g1}if(args[0]=="mine"){sm.obj2+=g1}if(args[0]=="ice"){sm.obj3+=g1}}
    if((sm.quest==6)&&(sm.task==18)&&(sm.qStarted)){if(args[0]=="beach"){sm.obj1+=g2}if(args[0]=="underwater"){sm.obj2+=g2}if(args[0]=="volcano"){sm.obj3+=g2}if(args[0]=="ice"){sm.obj4+=g2}}
    if((sm.quest==7)&&(sm.task==1)&&(sm.qStarted)&&(args[0]=="forest")){sm.obj1+=g2}
    if((sm.quest==7)&&(sm.task==3)&&(sm.qStarted)){if(args[0]=="city"){sm.obj1+=g2}if(args[0]=="junkyard"){sm.obj2+=g2}}
    if((sm.quest==7)&&(sm.task==5)&&(sm.qStarted)){if(args[0]=="wild"){sm.obj1+=g2}if(args[0]=="area"){sm.obj2+=g2}}
    if((sm.quest==7)&&(sm.task==7)&&(sm.qStarted)){if(args[0]=="beach"){sm.obj1+=g2}if(args[0]=="underwater"){sm.obj2+=g2}}
    if((sm.quest==8)&&(sm.task==2)&&(sm.qStarted)){if(args[0]=="city"){sm.obj1+=g1
            sm.obj2+=g2}if(args[0]=="beach"){sm.obj3+=g1
            sm.obj4+=g2}}
    if((sm.quest==10)&&(sm.task==1)&&(sm.qStarted)){if(args[0]=="city"){sm.obj1+=g1}if(args[0]=="junkyard"){sm.obj2+=g1}if(args[0]=="sewers"){sm.obj3+=g1}if(args[0]=="construction"){sm.obj4+=g1}}
    if((sm.quest==10)&&(sm.task==2)&&(sm.qStarted)){if(args[0]=="wild"){sm.obj1+=g1}if(args[0]=="area"){sm.obj2+=g1}if(args[0]=="mine"){sm.obj3+=g1}if(args[0]=="pyramids"){sm.obj4+=g1}}
    if((sm.quest==10)&&(sm.task==3)&&(sm.qStarted)){if(args[0]=="beach"){sm.obj1+=g1}if(args[0]=="underwater"){sm.obj2+=g1}if(args[0]=="volcano"){sm.obj3+=g1}if(args[0]=="ice"){sm.obj4+=g1}}
    if((sm.quest==10)&&(sm.task==6)&&(sm.qStarted)){if(args[0]=="city"){sm.obj1+=g2}if(args[0]=="junkyard"){sm.obj2+=g2}if(args[0]=="sewers"){sm.obj3+=g2}if(args[0]=="construction"){sm.obj4+=g2}}
    if((sm.quest==10)&&(sm.task==7)&&(sm.qStarted)){if(args[0]=="wild"){sm.obj1+=g2}if(args[0]=="area"){sm.obj2+=g2}if(args[0]=="mine"){sm.obj3+=g2}if(args[0]=="pyramids"){sm.obj4+=g2}}
    if((sm.quest==10)&&(sm.task==8)&&(sm.qStarted)){if(args[0]=="beach"){sm.obj1+=g2}if(args[0]=="underwater"){sm.obj2+=g2}if(args[0]=="volcano"){sm.obj3+=g2}if(args[0]=="ice"){sm.obj4+=g2}}
    fs.writeFile("../data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})
}

function mainCatch(ez,fs,db,args,storage,capacity,gemDrop)
{
    let object = (Math.floor(Math.random()*100))+1;
    let ghost = whichGhost(object,args[0])
    let ghostArr = ghost.split('X');
    ghost = ghostArr[0]
    let fill = ghostArr[1]
    fill = parseInt(fill,10)
    let item = ""
    let amount = 0
    object = (Math.floor(Math.random()*4))+1;
    if((object==1)||(object==2)){
        item = "<:gems:825122942413045791> gems"
        amount = howMuchItems(args[0],item,ez)
        amount = amount * gemDrop
        amount = Math.floor(amount)
        ez.gems = ez.gems + amount
    }else{if(object==3){
        item = ghostArr[2]
        amount = howMuchItems(args[0],item,ez)
    }else{
        if((args[0]=="construction")||(args[0]=="pyramids")||(args[0]=="ice")){item = ghostArr[2]}else{item = "🔩 antenna parts"}
        amount = howMuchItems(args[0],item,ez)
    }}
    storage = storage + fill
    if(storage>capacity){ez.storage = capacity}else{ez.storage = storage}
    ez.caught++;
    fs.writeFile("../data/db.json", JSON.stringify(db,null,4), function(error){if(error){let pog = 1}})
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
                return "a 🧚 **Fairy!**X10X<:acorn:825122942660509707> acorns"
            case "city":
                return "a 🤵‍♂️ **Businessman!**X20X📰 newspapers"
            case "junkyard":
                return "a 🧑‍🔧 **Mechanic!**X50X<:tire:825122944128385054> tires"
            case "sewers":
                return "a 🛍️ **Paper Bag!**X125X🧦 socks"
            case "construction":
                return "a 👷‍♀️ **Worker!**X300X🔨 hammers"
            case "wild":
                return "a <:bandit:825122917930500147> **Bandit!**X550X<:sherrifbadge:825122941637230613> sherrif badges"
            case "area":
                return "a 👨‍🔬 **Scientist!**X1100X<:meteorite:825122930047320115> meteorites"
            case "mine":
                return "a 🧑‍🏭 **Miner!**X2000X<:goldbar:825122939006746625> gold bars"
            case "pyramids":
                return "a <:pharaoh:825122944514523226> **Pharaoh!**X4500X<:artifact:825122914210414592> artifacts"
            case "beach":
                return "a 🏴‍☠️ **Pirate!**X9500X<:doubloon:825122941746151434> doubloons"
            case "underwater":
                return "a 🤿 **Diver!**X17500X<:pearl:825122938457686057> pearls"
            case "volcano":
                return "an <:islander:825122941963993099> **Islander!**X45000X💎 diamonds"
            case "ice":
                return "an <:explorer:825123592290172939> **Explorer!**X100000X<:tusk:825122936927027289> ancient tusks"
        }
    }else{
        switch(str){
            case "forest":
                return "an 🦉 **Owl!**X15X<:acorn:825122942660509707> acorns"
            case "city":
                return "a 🐈‍⬛ **Street Cat!**X30X📰 newspapers"
            case "junkyard":
                return "a 🗑️ **Garbage Bin!**X75X<:tire:825122944128385054> tires"
            case "sewers":
                return "a 🐀 **Rat!**X190X🧦 socks"
            case "construction":
                return "a <:pigeon:825122931721371690> **Pigeon!**X450X🔨 hammers"
            case "wild":
                return "a 🤠 **Cowboy!**X825X<:sherrifbadge:825122941637230613> sherrif badges"
            case "area":
                return "a 👽 **Zorg!**X1650X<:meteorite:825122930047320115> meteorites"
            case "mine":
                return "a 🪨 **Rock!**X3000X<:goldbar:825122939006746625> gold bars"
            case "pyramids":
                return "a <:mummy:825122924318556200> **Mummy!**X6750X<:artifact:825122914210414592> artifacts"
            case "beach":
                return "a 🦜 **Parrot!**X14500X<:doubloon:825122941746151434> doubloons"
            case "underwater":
                return "a 🧜‍♀️ **Mermaid!**X26500X<:pearl:825122938457686057> pearls"
            case "volcano":
                return "a <:magmamonster:825122940290859009> **Magma Monster!**X67500X💎 diamonds"
            case "ice":
                return "a 🐧 **Penguin!**X150000X<:tusk:825122936927027289> ancient tusks"
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
            return "🏗️ Construction Site"
        case "wild":
            return 5
        case "area":
            return 6
        case "mine":
            return 7
        case "pyramids":
            return "<:pyramid:825122937236357164> Pyramids"
        case "beach":
            return 8
        case "underwater":
            return 9
        case "volcano":
            return 10
        case "ice":
            return "🧊 Ice Cave"
    }
}

function realAreaTest(str)
{
    return ((str!="forest")&&(str!="city")&&(str!="junkyard")&&(str!="sewers")&&(str!="construction")&&(str!="wild")&&(str!="area")&&(str!="mine")&&(str!="pyramids")&&(str!="beach")&&(str!="underwater")&&(str!="volcano")&&(str!="ice"))
}

function didntUnlock(bonus,message)
{
    message.channel.send(`<@${message.member.id}> You cannot catch 👻 ghosts in The ${bonus} because you haven't unlocked it yet. **\`%unlock\`**`)
}