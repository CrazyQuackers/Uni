exports.run = async (bot,message,args) => {
    const fs = require("fs")
    const q = require('../../data/q.json')
    let sm = q[message.guild.id].users[message.member.id]
    if((sm.quest==2)&&(sm.task==6)&&(sm.qStarted)&&(sm.obj1==0)){if((args.length==2)&&(args[0]=="walkie")&&(args[1]=="talkie")){message.react("✅")
        message.channel.send(`<@${message.member.id}> You've found 📞 **Adam's Walkie Talkie**!`)
        sm.obj1=1
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")}}
    if((sm.quest==4)&&(sm.task==7)&&(sm.qStarted)&&(sm.obj2==0)){if((args.length==2)&&(args[0]=="green")&&(args[1]=="ring")){message.react("✅")
        message.channel.send(`<@${message.member.id}> You've found The 🟢 **Green Ring**!`)
        sm.obj2=1
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")}}
    if((sm.quest==4)&&(sm.task==16)&&(sm.qStarted)&&(sm.obj1==0)){if((args.length==2)&&(args[0]=="cowboy")&&(args[1]=="boot")){message.react("✅")
        message.channel.send(`<@${message.member.id}> You've found 👢 **Jesse's Cowboy Boot**!`)
        sm.obj1=1
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")}}
    if((sm.quest==5)&&(sm.task==4)&&(sm.qStarted)&&(sm.obj1==0)){if((args.length==2)&&(args[0]=="red")&&(args[1]=="ring")){message.react("✅")
        message.channel.send(`<@${message.member.id}> You've found The 🔴 **Red Ring**!`)
        sm.obj1=1
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")}}
    if((sm.quest==6)&&(sm.task==5)&&(sm.qStarted)&&(sm.obj1==0)){if((args.length==2)&&(args[0]=="trusty")&&(args[1]=="sword")){message.react("✅")
        message.channel.send(`<@${message.member.id}> You've found ⚔️ **Captain Finsley's Trusty Sword**!`)
        sm.obj1=1
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")}}
    if((sm.quest==6)&&(sm.task==8)&&(sm.qStarted)&&(sm.obj1==0)){if((args.length==2)&&(args[0]=="blue")&&(args[1]=="ring")){message.react("✅")
        message.channel.send(`<@${message.member.id}> You've found The 🔵 **Blue Ring**!`)
        sm.obj1=1
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")}}
    if((sm.quest==7)&&(sm.task==4)&&(sm.qStarted)&&(sm.obj1==0)){if((args.length==2)&&(args[0]=="egg")&&(args[1]=="basket")){message.react("✅")
        message.channel.send(`<@${message.member.id}> You've found 🧺 **Shelly's Egg Basket**!`)
        sm.obj1=1
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")}}
    if((sm.quest==7)&&(sm.task==12)&&(sm.qStarted)&&(sm.obj1==0)){if((args.length==2)&&(args[0]=="yellow")&&(args[1]=="ring")){message.react("✅")
        message.channel.send(`<@${message.member.id}> You've found The 🟡 **Yellow Ring**!`)
        sm.obj1=1
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")}}
    if((sm.quest==7)&&(sm.task==14)&&(sm.qStarted)&&(sm.obj1==0)){if((args.length==2)&&(args[0]=="blox")&&(args[1]=="piece")){message.react("✅")
        message.channel.send(`<@${message.member.id}> You've found a 🧩 **Blox Piece**!`)
        sm.obj1=1
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")}}
    if((sm.quest==8)&&(sm.task==1)&&(sm.qStarted)&&(sm.obj1==0)){if((args.length==2)&&(args[0]=="purple")&&(args[1]=="ring")){message.react("✅")
        message.channel.send(`<@${message.member.id}> You've found The 🟣 **Purple Ring**!`)
        sm.obj1=1
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")}}
    if((sm.quest==8)&&(sm.task==5)&&(sm.qStarted)&&(sm.obj1==0)){if((args.length==2)&&(args[0]=="boss")&&(args[1]=="book")){message.react("✅")
        message.channel.send(`<@${message.member.id}> You've found 📕 **Riley's Boss Book**!`)
        sm.obj1=1
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")}}
    if((sm.quest==9)&&(sm.task==10)&&(sm.qStarted)&&(sm.obj1==0)){if((args.length==2)&&(args[0]=="gadget")&&(args[1]=="fragment")){message.react("✅")
        message.channel.send(`<@${message.member.id}> You've found a 🏹 **Gadget Fragment**!`)
        sm.obj1=1
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")}}
    if((sm.quest==9)&&(sm.task==10)&&(sm.qStarted)&&(sm.obj2==0)){if((args.length==2)&&(args[0]=="gadget")&&(args[1]=="piece")){message.react("✅")
        message.channel.send(`<@${message.member.id}> You've found a 🏹 **Gadget Piece**!`)
        sm.obj2=1
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")}}
    if((sm.quest==9)&&(sm.task==10)&&(sm.qStarted)&&(sm.obj3==0)){if((args.length==2)&&(args[0]=="gadget")&&(args[1]=="particle")){message.react("✅")
        message.channel.send(`<@${message.member.id}> You've found a 🏹 **Gadget Particle**!`)
        sm.obj3=1
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")}}
    if((sm.quest==9)&&(sm.task==10)&&(sm.qStarted)&&(sm.obj4==0)){if((args.length==2)&&(args[0]=="gadget")&&(args[1]=="shard")){message.react("✅")
        message.channel.send(`<@${message.member.id}> You've found a 🏹 **Gadget Shard**!`)
        sm.obj4=1
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")}}
    if((sm.quest==9)&&(sm.task==10)&&(sm.qStarted)&&(sm.obj5==0)){if((args.length==2)&&(args[0]=="gadget")&&(args[1]=="scrap")){message.react("✅")
        message.channel.send(`<@${message.member.id}> You've found a 🏹 **Gadget Scrap**!`)
        sm.obj5=1
        fs.writeFile("./data/q.json", JSON.stringify(q,null,4), function(error){if(error){let pog = 1}})}else{message.react("❌")}}
}
exports.help = {
    name: 'find'
}